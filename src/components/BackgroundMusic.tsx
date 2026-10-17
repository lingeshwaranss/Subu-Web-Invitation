import React, { useEffect, useRef, useCallback } from 'react';
import { INVITATION_DATA } from '../data/invitationData';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
    ytPlayerInstance?: any;
    playValaikappuMusic?: () => void;
    pauseValaikappuMusic?: () => void;
  }
}

interface BackgroundMusicProps {
  shouldPlay: boolean;
  isPlaying: boolean;
  onPlayingChange: (playing: boolean) => void;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  shouldPlay,
  isPlaying,
  onPlayingChange,
}) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Send direct command via both YT API and postMessage to guarantee unmuted playback
  const startAudioPlayback = useCallback(() => {
    // 1. YouTube Player API call
    if (playerRef.current) {
      try {
        if (typeof playerRef.current.unMute === 'function') {
          playerRef.current.unMute();
        }
        if (typeof playerRef.current.setVolume === 'function') {
          playerRef.current.setVolume(INVITATION_DATA.audio.defaultVolume);
        }
        if (typeof playerRef.current.playVideo === 'function') {
          playerRef.current.playVideo();
        }
        onPlayingChange(true);
      } catch (err) {
        console.warn('YouTube playVideo error:', err);
      }
    }

    // 2. Direct postMessage fallback to YouTube iframe
    try {
      const iframe =
        (document.querySelector('#valaikappu-youtube-audio iframe') as HTMLIFrameElement) ||
        (document.querySelector('iframe#valaikappu-youtube-audio') as HTMLIFrameElement);
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'setVolume',
            args: [INVITATION_DATA.audio.defaultVolume],
          }),
          '*'
        );
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
    } catch {}
  }, [onPlayingChange]);

  const pauseAudioPlayback = useCallback(() => {
    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      try {
        playerRef.current.pauseVideo();
      } catch {}
    }

    try {
      const iframe =
        (document.querySelector('#valaikappu-youtube-audio iframe') as HTMLIFrameElement) ||
        (document.querySelector('iframe#valaikappu-youtube-audio') as HTMLIFrameElement);
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    } catch {}

    onPlayingChange(false);
  }, [onPlayingChange]);

  // Expose global window control helpers for synchronous user click handlers
  useEffect(() => {
    window.playValaikappuMusic = startAudioPlayback;
    window.pauseValaikappuMusic = pauseAudioPlayback;
    return () => {
      delete window.playValaikappuMusic;
      delete window.pauseValaikappuMusic;
    };
  }, [startAudioPlayback, pauseAudioPlayback]);

  // Initialize YouTube IFrame API for "Thaimai" song (SiORnQvqA98)
  useEffect(() => {
    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      try {
        new window.YT.Player('valaikappu-youtube-audio', {
          videoId: INVITATION_DATA.audio.youtubeVideoId,
          width: '320',
          height: '180',
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            loop: 1,
            playlist: INVITATION_DATA.audio.youtubeVideoId,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (event: any) => {
              playerRef.current = event.target;
              window.ytPlayerInstance = event.target;

              event.target.setVolume(INVITATION_DATA.audio.defaultVolume);

              // 1. Attempt unmuted autoplay immediately
              try {
                event.target.unMute();
                event.target.playVideo();
              } catch (e) {
                // 2. If unmuted is blocked by browser policy on initial load, start muted
                try {
                  event.target.mute();
                  event.target.playVideo();
                } catch {}
              }
            },
            onStateChange: (event: any) => {
              if (window.YT?.PlayerState) {
                if (event.data === window.YT.PlayerState.PLAYING) {
                  onPlayingChange(true);
                } else if (
                  event.data === window.YT.PlayerState.PAUSED ||
                  event.data === window.YT.PlayerState.ENDED
                ) {
                  onPlayingChange(false);
                }
              }
            },
          },
        });
      } catch (err) {
        console.warn('YouTube player initialization:', err);
      }
    };

    // Load API script if not present
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingScript = document.getElementById('youtube-iframe-api');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const previousOnReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previousOnReady) previousOnReady();
        initPlayer();
      };
    }

    // Global listener on first user interaction to unmute and ensure playback
    const onFirstGesture = () => {
      startAudioPlayback();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('pointerdown', onFirstGesture);
      window.removeEventListener('touchstart', onFirstGesture);
      window.removeEventListener('click', onFirstGesture);
      window.removeEventListener('scroll', onFirstGesture, true);
      window.removeEventListener('keydown', onFirstGesture);
    };

    window.addEventListener('pointerdown', onFirstGesture, { passive: true });
    window.addEventListener('touchstart', onFirstGesture, { passive: true });
    window.addEventListener('click', onFirstGesture, { passive: true });
    window.addEventListener('scroll', onFirstGesture, { passive: true, capture: true });
    window.addEventListener('keydown', onFirstGesture, { passive: true });

    return () => {
      cleanupListeners();
    };
  }, [onPlayingChange, startAudioPlayback]);

  // Synchronize playback if shouldPlay changes (e.g. video invitation plays/pauses)
  useEffect(() => {
    if (shouldPlay) {
      startAudioPlayback();
    } else {
      pauseAudioPlayback();
    }
  }, [shouldPlay, startAudioPlayback, pauseAudioPlayback]);

  return (
    /* 
      YouTube Player Viewport Container:
      Positioned in viewport (bottom-0 right-0, 300x180) so Chromium does NOT throttle it as offscreen,
      with opacity 0.001 and pointer-events: none so it doesn't obstruct any UI elements.
    */
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '300px',
        height: '180px',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.001,
      }}
      aria-hidden="true"
    >
      <div id="valaikappu-youtube-audio" />
    </div>
  );
};

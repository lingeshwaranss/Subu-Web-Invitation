import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Film, Sparkles } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export const VideoInvitation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [hasStarted, setHasStarted] = useState(false);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      window.pauseValaikappuMusic?.();
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      window.playValaikappuMusic?.();
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    setProgress(dur ? (cur / dur) * 100 : 0);
    setCurrentTime(formatTime(cur));
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTo = (Number(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTo;
    setProgress(Number(e.target.value));
  };

  // Synchronize playback state with native mobile fullscreen changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleWebkitBegin = () => setIsPlaying(true);
    const handleWebkitEnd = () => {
      if (video.paused) setIsPlaying(false);
    };

    video.addEventListener('webkitbeginfullscreen', handleWebkitBegin);
    video.addEventListener('webkitendfullscreen', handleWebkitEnd);

    return () => {
      video.removeEventListener('webkitbeginfullscreen', handleWebkitBegin);
      video.removeEventListener('webkitendfullscreen', handleWebkitEnd);
    };
  }, []);

  const handleFullScreen = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      // 1. Ensure video starts playback when opening fullscreen
      if (video.paused) {
        try {
          await video.play();
          setIsPlaying(true);
          setHasStarted(true);
        } catch (e) {
          console.warn('Playback could not auto-start before fullscreen:', e);
        }
      }

      // 2. Check if currently in fullscreen to toggle exit
      const doc = document as any;
      const isDocFullscreen =
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement;

      if (isDocFullscreen) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        }
        return;
      }

      // 3. iOS Safari (iPhone / iPad) - native webkitEnterFullscreen on video element
      if (typeof (video as any).webkitEnterFullscreen === 'function') {
        (video as any).webkitEnterFullscreen();
        return;
      }

      // 4. Android Chrome / Standard Mobile & Desktop
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).webkitEnterFullScreen) {
        (video as any).webkitEnterFullScreen();
      } else if (containerRef.current?.requestFullscreen) {
        await containerRef.current.requestFullscreen();
      } else if ((containerRef.current as any)?.webkitRequestFullscreen) {
        (containerRef.current as any).webkitRequestFullscreen();
      }
    } catch (err) {
      console.warn('Video fullscreen request fallback to container:', err);
      try {
        if (containerRef.current?.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        }
      } catch (fallbackErr) {
        console.error('All fullscreen methods failed:', fallbackErr);
      }
    }
  };

  return (
    <section className="my-10 sm:my-16 px-3 sm:px-4 max-w-4xl mx-auto w-full">
      {/* Tamil Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF3] border border-[#C6A15B] shadow-sm mb-2">
          <Film className="w-4 h-4 text-[#70451F]" />
          <span className="font-serif-tamil text-xs font-bold text-[#70451F]">
            சிறப்பு வீடியோ அழைப்பிதழ்
          </span>
          <Sparkles className="w-4 h-4 text-[#C6A15B]" />
        </div>

        <h3 className="font-serif-tamil text-2xl sm:text-4xl font-extrabold text-[#20572C]">
          {INVITATION_DATA.video.title}
        </h3>
        <p className="font-serif-tamil text-xs sm:text-sm text-[#70451F] max-w-lg mx-auto mt-2 leading-relaxed">
          {INVITATION_DATA.video.description}
        </p>
      </motion.div>

      {/* Royal Cinema Frame Container */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-[#8C1423] via-[#5A0A14] to-[#2B0308] border-3 sm:border-4 border-[#ECC880] shadow-[0_15px_40px_rgba(0,0,0,0.45)] overflow-hidden"
      >
        {/* Background Ambient Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#ECC880]/20 via-[#C6A15B]/30 to-[#8C1423]/20 blur-xl pointer-events-none" />

        {/* Miniature Top Royal Curtain Pelmet */}
        <div className="relative z-20 mb-2 sm:mb-3 flex justify-between items-center px-2 py-1 rounded-xl bg-gradient-to-r from-[#3D060E] via-[#680D19] to-[#3D060E] border border-[#ECC880]/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ECC880] shadow-sm animate-pulse" />
            <span className="text-[11px] font-bold text-[#FFF3C2] tracking-wider uppercase font-sans">
              Subamathi & Muralidharan
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-[#ECC880] font-semibold">
            <span>HD VIDEO</span>
            <span className="text-white/60">✦</span>
            <span>2026</span>
          </div>
        </div>

        {/* Video Screen Viewport */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner group">
          <video
            ref={videoRef}
            src={INVITATION_DATA.video.src}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => {
              setIsPlaying(false);
              window.playValaikappuMusic?.();
            }}
            onClick={handleTogglePlay}
            playsInline
            webkit-playsinline="true"
            preload="metadata"
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Quick Top-Right Full Screen Overlay Button (Instant Mobile Access) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFullScreen();
            }}
            className="absolute top-2.5 right-2.5 z-30 px-2.5 py-1.5 rounded-lg bg-black/65 hover:bg-black/90 backdrop-blur-sm text-[#FFE380] border border-[#ECC880]/70 flex items-center gap-1.5 text-xs font-bold shadow-md cursor-pointer transition-all active:scale-95"
            title={INVITATION_DATA.uiLabels.fullScreen}
            aria-label={INVITATION_DATA.uiLabels.fullScreen}
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#ECC880]" />
            <span className="font-sans text-[11px] font-bold tracking-wide">Full Screen</span>
          </button>

          {/* Central Play/Pause Overlay Button when paused or initial */}
          {!isPlaying && (
            <div
              onClick={handleTogglePlay}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity z-20"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#ECC880] via-[#FFE380] to-[#C6A15B] text-[#5A0A14] flex items-center justify-center shadow-[0_0_30px_rgba(236,200,128,0.7)] border-3 border-[#FFFDF3]"
                aria-label={INVITATION_DATA.uiLabels.playVideo}
              >
                <Play className="w-7 h-7 sm:w-9 sm:h-9 ml-1 fill-current" />
              </motion.button>

              <p className="mt-3 font-serif-tamil text-sm sm:text-base font-bold text-[#FFF3C2] drop-shadow-md tracking-wide">
                {hasStarted ? "மீண்டும் காண தொடவும்" : "வீடியோவைக் காண தொடவும்"}
              </p>
              <span className="text-[11px] font-medium text-white/80 font-sans">
                {INVITATION_DATA.uiLabels.playVideo}
              </span>
            </div>
          )}

          {/* Bottom Floating Control Bar (Always accessible on mobile touch, hover on desktop) */}
          <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex flex-col gap-1.5 sm:gap-2 z-25 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-within:opacity-100 transition-opacity duration-300">
            {/* Scrubber Progress Bar */}
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#ECC880]"
            />

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Play/Pause Button */}
                <button
                  onClick={handleTogglePlay}
                  className="px-3 py-1.5 rounded-full bg-[#ECC880] hover:bg-[#FFE380] text-[#5A0A14] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer min-h-[36px]"
                  title={isPlaying ? INVITATION_DATA.uiLabels.pauseVideo : INVITATION_DATA.uiLabels.playVideo}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>{INVITATION_DATA.uiLabels.pauseVideo}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{INVITATION_DATA.uiLabels.playVideo}</span>
                    </>
                  )}
                </button>

                {/* Mute/Unmute Button */}
                <button
                  onClick={handleToggleMute}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                  title={isMuted ? INVITATION_DATA.uiLabels.unmuteVideo : INVITATION_DATA.uiLabels.muteVideo}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-300" /> : <Volume2 className="w-4 h-4" />}
                </button>

                {/* Duration */}
                <span className="font-mono text-[11px] text-white/90">
                  {currentTime} / {duration}
                </span>
              </div>

              {/* Fullscreen Button with large touch area */}
              <button
                onClick={handleFullScreen}
                className="px-3 py-1.5 rounded-full bg-[#ECC880] hover:bg-[#FFE380] text-[#5A0A14] font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow min-h-[36px]"
                title={INVITATION_DATA.uiLabels.fullScreen}
                aria-label={INVITATION_DATA.uiLabels.fullScreen}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{INVITATION_DATA.uiLabels.fullScreen}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Footer Actions */}
        <div className="mt-3 pt-2 border-t border-[#ECC880]/30 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-[#ECC880]">
          <span className="font-serif-tamil text-[11px] sm:text-xs text-[#FFF3C2]">
            சுபமதி & முரளிதரன் வளைகாப்பு விழா நல்வரவு
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleFullScreen}
              className="px-3.5 py-1.5 rounded-full bg-[#FFFDF3] hover:bg-[#FFE380] text-[#5A0A14] font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow border border-[#ECC880] cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#8C1423]" />
              <span>{INVITATION_DATA.uiLabels.fullScreen}</span>
            </button>
            <button
              onClick={handleTogglePlay}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ECC880] to-[#FFE380] text-[#5A0A14] font-bold text-xs transition-all active:scale-95 shadow cursor-pointer"
            >
              {isPlaying ? INVITATION_DATA.uiLabels.pauseVideo : INVITATION_DATA.uiLabels.watchVideo}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

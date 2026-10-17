import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { InvitationCover } from './components/InvitationCover';
import { MainInvitationCard } from './components/MainInvitationCard';
import { BackgroundMusic } from './components/BackgroundMusic';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  // Auto-play music automatically when site opens
  const [shouldPlayMusic, setShouldPlayMusic] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Ensure music plays automatically upon site opening or on first interaction
  useEffect(() => {
    const handleFirstGesture = () => {
      setShouldPlayMusic(true);
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    window.addEventListener('pointerdown', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('keydown', handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  // When user clicks "Open Invitation" or taps envelope
  const handleOpenInvitation = useCallback(() => {
    setIsOpening(true);
    setShouldPlayMusic(true);

    window.playValaikappuMusic?.();

    // Allow grand royal curtain parting & envelope animation to complete gracefully
    setTimeout(() => {
      setIsOpened(true);
      setIsOpening(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1250);
  }, []);

  // Skip animation directly
  const handleSkipAnimation = useCallback(() => {
    setShouldPlayMusic(true);
    window.playValaikappuMusic?.();
    setIsOpened(true);
    setIsOpening(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Replay curtain reveal animation without stopping ongoing music
  const handleReplayOpening = useCallback(() => {
    setIsOpened(false);
    setIsOpening(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#140205] text-[#20572C] selection:bg-[#ECC880]/30 selection:text-[#FFFDF3]">
      {/* Background YouTube Music Integration (Autoplay enabled, no floating button) */}
      <BackgroundMusic
        shouldPlay={shouldPlayMusic}
        isPlaying={isMusicPlaying}
        onPlayingChange={setIsMusicPlaying}
      />

      {/* Main Experience: Royal Curtain & Normal Envelope Opening -> Ceremonial Hall */}
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <InvitationCover
              onOpen={handleOpenInvitation}
              onSkip={handleSkipAnimation}
              isOpening={isOpening}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <MainInvitationCard onReplayOpening={handleReplayOpening} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

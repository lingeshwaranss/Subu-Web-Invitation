import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';
import { LotusBloom, KuthuvilakkuLamp } from './FloralDecorations';
import { RoyalCurtains } from './RoyalCurtains';

interface InvitationCoverProps {
  onOpen: () => void;
  onSkip: () => void;
  isOpening: boolean;
}

export const InvitationCover: React.FC<InvitationCoverProps> = ({
  onOpen,
  onSkip,
  isOpening,
}) => {
  const [isFlapOpen, setIsFlapOpen] = useState(false);

  const handleTriggerOpen = () => {
    if (isOpening) return;
    window.playValaikappuMusic?.();
    setIsFlapOpen(true);
    onOpen();
  };

  return (
    <div className="fixed inset-0 z-40 flex flex-col justify-between items-center bg-gradient-to-b from-[#1C0407] via-[#35070E] to-[#1C0407] overflow-y-auto overflow-x-hidden p-3 sm:p-6 select-none min-h-[100dvh]">
      {/* 1. Grand Royal Curtains Background (Curtain Theme) */}
      <RoyalCurtains isOpen={isFlapOpen || isOpening} />

      {/* 2. Floating Ceremonial Petals & Golden Dust Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -40,
              x: `${(i * 4.6) % 100}vw`,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: '105vh',
              x: `${((i * 4.6) % 100) + (i % 2 === 0 ? 8 : -8)}vw`,
              rotate: 360,
              opacity: [0, 0.85, 0.85, 0],
            }}
            transition={{
              duration: 6.5 + (i % 5) * 1.5,
              repeat: Infinity,
              delay: (i * 0.3) % 4,
              ease: 'linear',
            }}
            className="absolute"
          >
            {i % 3 === 0 ? (
              // Marigold Gold Petal
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFD233] to-[#E65100] shadow-[0_0_8px_rgba(255,210,51,0.5)] transform rotate-45" />
            ) : i % 3 === 1 ? (
              // Jasmine White Petal
              <div className="w-2.5 h-3.5 rounded-full bg-[#FFFDF3] border border-[#ECC880] shadow-sm" />
            ) : (
              // Golden Shimmer Dust
              <div className="w-2 h-2 rounded-full bg-[#ECC880] shadow-[0_0_12px_#ECC880]" />
            )}
          </motion.div>
        ))}
      </div>

      {/* 3. Stage Brass Kuthuvilakku Lamps for Wide Screens */}
      <div className="hidden lg:block fixed left-6 bottom-6 pointer-events-none z-25">
        <KuthuvilakkuLamp height={190} />
      </div>
      <div className="hidden lg:block fixed right-6 bottom-6 pointer-events-none z-25 scale-x-[-1]">
        <KuthuvilakkuLamp height={190} />
      </div>

      {/* Empty top spacer to balance layout with top pelmet */}
      <div className="h-8 sm:h-20 shrink-0" />

      {/* 4. Center Spotlight Stage: Classic Ivory & Gold Envelope */}
      <div className="relative z-30 my-auto py-1 sm:py-2 w-full max-w-[310px] sm:max-w-md md:max-w-lg flex flex-col items-center">
        {/* Sacred Tamil Invocation Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2 sm:mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-0.5 sm:px-3.5 sm:py-1 bg-[#FFFDF3] rounded-full border border-[#C6A15B] shadow-md mb-1.5 sm:mb-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C6A15B]" />
            <span className="font-serif-tamil text-[11px] sm:text-xs font-bold text-[#70451F]">
              மங்கலத் தொடக்கம்
            </span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif-tamil text-lg sm:text-3xl font-black text-[#FFF3C2] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            வளைகாப்பு விழா அழைப்பிதழ்
          </h2>
        </motion.div>

        {/* 3D Realistic Classic Ivory & Gold Normal Envelope Container */}
        <div
          className="relative w-full aspect-[1.42/1] cursor-pointer perspective-1000 group"
          onClick={handleTriggerOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleTriggerOpen()}
          aria-label={INVITATION_DATA.uiLabels.openInvitation}
        >
          {/* Outer Halo Glow on hover */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#ECC880]/40 via-[#FFE380]/60 to-[#ECC880]/40 rounded-3xl opacity-70 group-hover:opacity-100 blur-md transition-opacity duration-300" />

          {/* Envelope Body (Normal Classic Warm Ivory & Golden Pearl Design) */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-[#ECC880] bg-gradient-to-br from-[#FAF6EB] via-[#F4EDE0] to-[#E8DCBF]">
            {/* Fine Parchment Paper Texture */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(#70451F 1px, transparent 1px), radial-gradient(#C6A15B 1px, transparent 1px)',
                backgroundSize: '18px 18px',
                backgroundPosition: '0 0, 9px 9px',
              }}
            />

            {/* Embossed Gold Foil Filigree Double Border */}
            <div className="absolute inset-2.5 border-2 border-[#C6A15B]/70 rounded-xl pointer-events-none shadow-inner" />
            <div className="absolute inset-3.5 border border-[#ECC880]/60 rounded-lg pointer-events-none" />

            {/* Traditional Gold Corner Ornaments */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#C6A15B] rounded-tl-sm pointer-events-none" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#C6A15B] rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#C6A15B] rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#C6A15B] rounded-br-sm pointer-events-none" />

            {/* Inner Auspicious Invitation Card sliding up */}
            <motion.div
              initial={false}
              animate={
                isFlapOpen || isOpening
                  ? { y: -180, scale: 1.05, opacity: 0 }
                  : { y: 0, scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-4 inset-y-3 bg-[#FFFDF5] rounded-xl border-2 border-[#C6A15B] p-3 sm:p-5 flex flex-col justify-between items-center text-center shadow-lg z-10 pointer-events-none"
            >
              {/* Inner card top gold crest */}
              <div className="flex items-center justify-center gap-2">
                <LotusBloom size={22} />
                <span className="font-serif-tamil text-xs sm:text-sm font-extrabold text-[#20572C]">
                  {INVITATION_DATA.title}
                </span>
                <LotusBloom size={22} className="scale-x-[-1]" />
              </div>

              {/* Couple Name Preview */}
              <div className="my-auto py-1">
                <p className="font-serif-tamil text-sm sm:text-base font-bold text-[#20572C]">
                  {INVITATION_DATA.bride.name}
                </p>
                <span className="text-[#C6A15B] text-xs font-bold">✦ & ✦</span>
                <p className="font-serif-tamil text-sm sm:text-base font-bold text-[#20572C]">
                  {INVITATION_DATA.groom.name}
                </p>
              </div>

              <p className="text-[10px] sm:text-xs font-semibold text-[#70451F]">
                25 அக்டோபர் 2026 · சிதம்பரம்
              </p>
            </motion.div>

            {/* Natural Cream Paper Triangular Folds (SVG) */}
            <svg
              viewBox="0 0 500 360"
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              preserveAspectRatio="none"
            >
              {/* Left triangular side flap */}
              <path
                d="M 0 0 L 250 185 L 0 360 Z"
                fill="#EDE3CD"
                stroke="#C6A15B"
                strokeWidth="1.5"
              />

              {/* Right triangular side flap */}
              <path
                d="M 500 0 L 250 185 L 500 360 Z"
                fill="#E5D9C2"
                stroke="#C6A15B"
                strokeWidth="1.5"
              />

              {/* Bottom triangular flap */}
              <path
                d="M 0 360 L 250 170 L 500 360 Z"
                fill="#F4EBD9"
                stroke="#C6A15B"
                strokeWidth="2"
              />
            </svg>

            {/* Front Envelope Elegant Calligraphy Addressing */}
            <div className="absolute bottom-3 inset-x-4 z-25 text-center pointer-events-none">
              <p className="font-serif-tamil text-xs sm:text-sm font-bold text-[#70451F] tracking-wide">
                சுபமதி & முரளிதரன்
              </p>
            </div>

            {/* 3D Top Triangular Envelope Flap with Auspicious Golden Wax Seal */}
            <motion.div
              initial={false}
              animate={{
                rotateX: isFlapOpen || isOpening ? 180 : 0,
              }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
              }}
              className="absolute top-0 inset-x-0 h-[62%] z-30 pointer-events-none"
            >
              <svg
                viewBox="0 0 500 220"
                className="w-full h-full drop-shadow-xl"
                preserveAspectRatio="none"
              >
                {/* Triangular top flap in rich ivory cream */}
                <path
                  d="M 0 0 L 250 215 L 500 0 Z"
                  fill="#FAF5E8"
                  stroke="#C6A15B"
                  strokeWidth="2.5"
                />
              </svg>

              {/* Auspicious Golden Royal Wax Seal (முத்திரை) with "உ" */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#ECC880] via-[#FFE380] to-[#C6A15B] p-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] flex items-center justify-center border-2 border-[#FFFDF3]"
                >
                  {/* Inner Seal with Auspicious Letter */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#8C1423] to-[#560912] border border-[#FFE380] flex items-center justify-center shadow-inner">
                    <span className="font-serif-tamil text-xl sm:text-2xl font-black text-[#FFE380] drop-shadow">
                      உ
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* English Hint Text */}
        <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs text-[#FFF3C2]/90 font-medium text-center flex items-center justify-center gap-1.5 font-sans">
          <span>Tap envelope or button below to open</span>
          <span className="text-[#ECC880]">✦</span>
        </p>

        {/* Action Buttons in ENGLISH as requested */}
        <div className="w-full mt-2.5 sm:mt-5 flex flex-col items-center gap-2 sm:gap-3 z-30">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleTriggerOpen}
            disabled={isOpening}
            className="w-full sm:w-auto min-w-[260px] sm:min-w-[320px] min-h-[46px] sm:min-h-[56px] px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#ECC880] via-[#FFE380] to-[#C6A15B] hover:from-[#FFE380] hover:to-[#ECC880] text-[#46060F] font-sans text-sm sm:text-lg font-extrabold shadow-[0_8px_30px_rgba(236,200,128,0.4)] border-2 border-[#FFFDF3] flex items-center justify-center gap-2.5 sm:gap-3 transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#ECC880]/50"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C1423] shrink-0" />
            <span className="tracking-wide">{INVITATION_DATA.uiLabels.openInvitation}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C1423] shrink-0" />
          </motion.button>

          {/* Direct Skip Button in ENGLISH */}
          <button
            onClick={onSkip}
            className="text-[11px] sm:text-sm font-semibold text-[#ECC880] hover:text-[#FFF3C2] underline decoration-[#ECC880]/60 transition-colors py-0.5 sm:py-1 cursor-pointer font-sans"
          >
            {INVITATION_DATA.uiLabels.skipIntro}
          </button>
        </div>
      </div>

      {/* Footer Tamil Blessing Tagline */}
      <div className="shrink-0 text-center pb-1.5 sm:pb-3 z-25">
        <p className="font-serif-tamil text-xs sm:text-sm font-semibold text-[#FFF3C2]/90 drop-shadow">
          {INVITATION_DATA.uiLabels.coupleBlessing}
        </p>
      </div>
    </div>
  );
};

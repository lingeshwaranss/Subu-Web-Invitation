import React from 'react';
import { motion } from 'framer-motion';
import { TraditionalPillar } from './TraditionalPillars';
import { MangoThoranam, LotusBloom } from './FloralDecorations';
import { InvitationHero } from './InvitationHero';
import { CouplePhoto } from './CouplePhoto';
import { VideoInvitation } from './VideoInvitation';
import { EventDetails } from './EventDetails';
import { VenueSection } from './VenueSection';
import { BlessingsRSVP } from './BlessingsRSVP';
import { ShareControls } from './ShareControls';
import { RoyalCurtains } from './RoyalCurtains';

interface MainInvitationCardProps {
  onReplayOpening: () => void;
}

export const MainInvitationCard: React.FC<MainInvitationCardProps> = ({
  onReplayOpening,
}) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1C0407] via-[#2A050B] to-[#120205] text-[#20572C] overflow-x-hidden selection:bg-[#ECC880]/30 selection:text-[#FFFDF3]">
      {/* 1. Permanent Royal Curtain Pelmet & Side Drapes for Grand Curtain Stage Theme */}
      <RoyalCurtains isOpen={true} />

      {/* 2. Traditional Mango Thoranam Garland just underneath the pelmet */}
      <div className="sticky top-16 sm:top-24 left-0 right-0 z-25 pointer-events-none drop-shadow-md">
        <MangoThoranam />
      </div>

      {/* 3. Side Carved Wooden Temple Pillars - Displayed on lg+ screens */}
      <div className="hidden lg:block fixed top-24 left-2 bottom-0 w-20 xl:w-28 z-20 pointer-events-none opacity-85">
        <TraditionalPillar side="left" />
      </div>

      <div className="hidden lg:block fixed top-24 right-2 bottom-0 w-20 xl:w-28 z-20 pointer-events-none opacity-85">
        <TraditionalPillar side="right" />
      </div>

      {/* 4. Main Center Stage Content Container */}
      <main className="relative z-25 max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-8 md:px-12 pt-20 sm:pt-36 pb-24 sm:pb-28">
        {/* Soft Ivory & Gold Royal Card Surface */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FFFDF5] rounded-2xl sm:rounded-[2.5rem] border-3 sm:border-4 border-[#ECC880] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden py-5 sm:py-8 px-2.5 sm:px-8"
        >
          {/* Ornate Gold Double Hairline Border */}
          <div className="absolute inset-2 sm:inset-3 border-2 border-[#70451F]/15 rounded-2xl sm:rounded-[2rem] pointer-events-none" />
          <div className="absolute inset-3.5 sm:inset-5 border border-[#ECC880]/60 rounded-xl sm:rounded-[1.75rem] pointer-events-none" />

          {/* Traditional Gold Corner Ornaments */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#C6A15B] rounded-tl-sm pointer-events-none" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C6A15B] rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C6A15B] rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C6A15B] rounded-br-sm pointer-events-none" />

          {/* Divine Lord Murugan with Vel & Peacock Feather Watermark */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 opacity-[0.05] pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-[#20572C]">
              <circle cx="100" cy="50" r="30" />
              <ellipse cx="100" cy="50" rx="18" ry="24" fill="#C6A15B" />
              <ellipse cx="100" cy="50" rx="8" ry="12" fill="#20572C" />
              <path d="M 100 20 C 80 40 85 70 100 95 C 115 70 120 40 100 20 Z" fill="#20572C" />
              <line x1="100" y1="95" x2="100" y2="190" stroke="#20572C" strokeWidth="6" />
            </svg>
          </div>

          {/* Hero Header Section in Tamil */}
          <InvitationHero />

          {/* Bride & Groom Photograph & Names with English Badges */}
          <CouplePhoto />

          {/* Creative Video Invitation Section */}
          <VideoInvitation />

          {/* Date, Time & Countdown Calendar */}
          <EventDetails />

          {/* Venue & Clickable QR Code to Google Maps */}
          <VenueSection />

          {/* Interactive Guest Blessings & RSVP */}
          <BlessingsRSVP />

          {/* Sharing Controls & Replay Curtain Reveal */}
          <ShareControls onReplay={onReplayOpening} />

          {/* Auspicious Traditional Footer in Tamil */}
          <footer className="text-center mt-12 pt-8 border-t border-[#C6A15B]/40 pb-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <LotusBloom size={36} />
              <div className="w-12 sm:w-20 h-0.5 bg-gradient-to-r from-[#C6A15B] via-[#ECC880] to-[#C6A15B]" />
              <LotusBloom size={36} className="scale-x-[-1]" />
            </div>

            <p className="font-serif-tamil text-base sm:text-xl font-bold text-[#20572C]">
              அனைவரும் வருகை தந்து வாழ்த்தி மகிழ வேண்டுகிறோம்!
            </p>
            <p className="font-serif-tamil text-xs sm:text-sm font-semibold text-[#70451F] mt-1.5">
              இவண்: சுபமதி & முரளிதரன் குடும்பத்தினர்
            </p>
          </footer>
        </motion.div>
      </main>
    </div>
  );
};

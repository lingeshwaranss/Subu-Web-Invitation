import React from 'react';
import { motion } from 'framer-motion';

interface RoyalCurtainsProps {
  isOpen: boolean;
  className?: string;
  showPelmetOnly?: boolean;
}

export const RoyalCurtains: React.FC<RoyalCurtainsProps> = ({
  isOpen,
  className = '',
  showPelmetOnly = false,
}) => {
  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden z-20 ${className}`}>
      {/* 1. Left Curtain Wing */}
      {!showPelmetOnly && (
        <motion.div
          initial={false}
          animate={{
            x: isOpen ? '-92%' : '0%',
            skewY: isOpen ? -1 : 0,
          }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute top-0 left-0 bottom-0 w-[55%] z-10 origin-left"
          style={{
            filter: 'drop-shadow(8px 0 24px rgba(0,0,0,0.65))',
          }}
        >
          {/* Main Velvet Curtain Body with Pleated Vertical Folds */}
          <div className="relative w-full h-full bg-gradient-to-r from-[#3A050D] via-[#730D1A] to-[#8F1223] overflow-hidden">
            {/* Realistic Silk Drapery Pleats Pattern */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-multiply"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, rgba(0,0,0,0.6) 0px, rgba(255,255,255,0.2) 20px, rgba(0,0,0,0.7) 45px, rgba(0,0,0,0.2) 65px)',
              }}
            />

            {/* Luxurious Vertical Velvet Sheen Waves */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent 0px, rgba(255,215,0,0.18) 18px, transparent 40px)',
              }}
            />

            {/* Inner Opening Border: Golden Embroidered Zari Lace */}
            <div className="absolute top-0 right-0 bottom-0 w-4 sm:w-7 bg-gradient-to-b from-[#ECC880] via-[#C6A15B] to-[#70451F] shadow-lg flex flex-col justify-around items-center">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-2 h-2 sm:w-3.5 sm:h-3.5 rotate-45 border border-[#46060F]/40 bg-[#FFF3C2] my-1 shadow-sm" />
              ))}
            </div>

            {/* Bottom Golden Fringe Hem */}
            <div className="absolute bottom-0 inset-x-0 h-7 sm:h-12 bg-gradient-to-t from-[#C6A15B] to-[#996515] border-t-2 border-[#FFE89E] flex justify-between items-end px-1 overflow-hidden">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 sm:w-2 h-4 sm:h-8 bg-gradient-to-b from-[#FFF5C0] via-[#D4AF37] to-[#805200] rounded-b-sm shadow-sm"
                />
              ))}
            </div>

            {/* Elegant Curtain Gather Tieback & Tassel */}
            <motion.div
              initial={false}
              animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 flex items-center"
            >
              <div className="w-6 sm:w-8 h-20 sm:h-28 rounded-r-full border-3 sm:border-4 border-[#ECC880] bg-gradient-to-b from-[#ECC880] to-[#70451F] shadow-2xl flex flex-col items-center justify-end pb-1.5 sm:pb-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FFE89E] border border-[#70451F] shadow-inner mb-0.5 sm:mb-1" />
                <div className="w-2.5 h-6 sm:w-3 sm:h-8 bg-[#C6A15B] rounded-b-full shadow" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* 2. Right Curtain Wing */}
      {!showPelmetOnly && (
        <motion.div
          initial={false}
          animate={{
            x: isOpen ? '92%' : '0%',
            skewY: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute top-0 right-0 bottom-0 w-[55%] z-10 origin-right"
          style={{
            filter: 'drop-shadow(-8px 0 24px rgba(0,0,0,0.65))',
          }}
        >
          {/* Main Velvet Curtain Body with Pleated Vertical Folds */}
          <div className="relative w-full h-full bg-gradient-to-l from-[#3A050D] via-[#730D1A] to-[#8F1223] overflow-hidden">
            {/* Realistic Silk Drapery Pleats Pattern */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-multiply"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.7) 20px, rgba(255,255,255,0.2) 45px, rgba(0,0,0,0.6) 65px)',
              }}
            />

            {/* Vertical Velvet Sheen */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent 0px, rgba(255,215,0,0.18) 18px, transparent 40px)',
              }}
            />

            {/* Inner Opening Border: Golden Embroidered Zari Lace */}
            <div className="absolute top-0 left-0 bottom-0 w-4 sm:w-7 bg-gradient-to-b from-[#ECC880] via-[#C6A15B] to-[#70451F] shadow-lg flex flex-col justify-around items-center">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-2 h-2 sm:w-3.5 sm:h-3.5 rotate-45 border border-[#46060F]/40 bg-[#FFF3C2] my-1 shadow-sm" />
              ))}
            </div>

            {/* Bottom Golden Fringe Hem */}
            <div className="absolute bottom-0 inset-x-0 h-7 sm:h-12 bg-gradient-to-t from-[#C6A15B] to-[#996515] border-t-2 border-[#FFE89E] flex justify-between items-end px-1 overflow-hidden">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 sm:w-2 h-4 sm:h-8 bg-gradient-to-b from-[#FFF5C0] via-[#D4AF37] to-[#805200] rounded-b-sm shadow-sm"
                />
              ))}
            </div>

            {/* Curtain Gather Tieback & Tassel */}
            <motion.div
              initial={false}
              animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 flex items-center"
            >
              <div className="w-6 sm:w-8 h-20 sm:h-28 rounded-l-full border-3 sm:border-4 border-[#ECC880] bg-gradient-to-b from-[#ECC880] to-[#70451F] shadow-2xl flex flex-col items-center justify-end pb-1.5 sm:pb-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FFE89E] border border-[#70451F] shadow-inner mb-0.5 sm:mb-1" />
                <div className="w-2.5 h-6 sm:w-3 sm:h-8 bg-[#C6A15B] rounded-b-full shadow" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* 3. Top Grand Royal Pelmet / Swag Valance (தோரணம் அமைந்த மேல் திரைச்சீலை) */}
      <div className="absolute top-0 inset-x-0 z-25 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
        {/* Scalloped Swags Array */}
        <div className="relative w-full h-12 sm:h-20 bg-gradient-to-b from-[#3D060E] via-[#6B0D19] to-[#8C1423] border-b-2 sm:border-b-4 border-[#ECC880] flex items-center justify-around overflow-hidden px-1">
          {/* Subtle gold brocade overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(#ECC880 1.5px, transparent 1.5px)',
              backgroundSize: '12px 12px',
            }}
          />

          {/* Scalloped drapes inside valance */}
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="relative -bottom-2 w-14 sm:w-36 h-9 sm:h-14 rounded-b-[100px] border-b-2 sm:border-b-4 border-[#ECC880] bg-gradient-to-b from-[#560912] to-[#991929] shadow-md flex items-end justify-center pb-0.5"
            >
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ECC880] shadow" />
            </div>
          ))}

          {/* Central Auspicious Royal Medallion */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="relative px-3.5 py-0.5 sm:px-6 sm:py-1.5 rounded-full bg-gradient-to-r from-[#ECC880] via-[#FFF1B8] to-[#ECC880] border-1.5 sm:border-2 border-[#70451F] shadow-2xl flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#8C1423]" />
              <span className="font-serif-tamil text-xs sm:text-base font-black text-[#560912] tracking-wider drop-shadow-sm whitespace-nowrap">
                சுப வளைகாப்பு அரங்கம்
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#8C1423]" />
            </div>
          </div>
        </div>

        {/* Golden Tassel Fringe hanging below pelmet */}
        <div className="w-full h-2.5 sm:h-3.5 bg-gradient-to-r from-[#ECC880] via-[#FFE380] to-[#ECC880] flex justify-between px-1 overflow-hidden shadow">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-2.5 sm:h-3 bg-gradient-to-b from-[#FFE380] to-[#8F640E] rounded-b-full opacity-90"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

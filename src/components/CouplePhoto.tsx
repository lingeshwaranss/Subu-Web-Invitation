import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ZoomIn, X } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';
import { LotusBloom, KuthuvilakkuLamp } from './FloralDecorations';

export const CouplePhoto: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [showFullModal, setShowFullModal] = useState(false);

  return (
    <section className="relative my-8 sm:my-14 px-3 sm:px-4 flex flex-col items-center">
      {/* Sacred Tamil Blessings Banner above the photo */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <span className="font-serif-tamil text-xs sm:text-sm font-semibold tracking-wide text-[#70451F] block mb-1">
          {INVITATION_DATA.uiLabels.coupleBlessing}
        </span>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto rounded-full" />
      </motion.div>

      {/* Main Framed Couple Display Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-sm sm:max-w-md w-full"
      >
        {/* Flanking Kuthuvilakku Brass Lamps on left and right */}
        <div className="hidden sm:block absolute -left-12 lg:-left-16 bottom-4 pointer-events-none z-10">
          <KuthuvilakkuLamp height={160} />
        </div>
        <div className="hidden sm:block absolute -right-12 lg:-right-16 bottom-4 pointer-events-none z-10 scale-x-[-1]">
          <KuthuvilakkuLamp height={160} />
        </div>

        {/* Traditional Antique Gold & Wood Arch Frame */}
        <div className="relative p-3 rounded-3xl bg-gradient-to-b from-[#C6A15B] via-[#8C1423] to-[#4A260D] shadow-2xl">
          {/* Inner gold filigree border */}
          <div className="relative rounded-2xl p-1.5 bg-[#FFFDF3] border-2 border-[#ECC880]">
            {/* The Photograph Viewport */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#E7F0D7] shadow-inner group">
              {!imageError ? (
                <img
                  src="/image.png"
                  alt="சு. சுபமதி மற்றும் லெ. முரளிதரன் வளைகாப்பு தம்பதியர் புகைப்படம்"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: '50% 86%' }}
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* Fallback artistic ceremonial couple portrait */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FFFDF3] to-[#E7F0D7]">
                  <div className="relative w-28 h-28 rounded-full border-4 border-[#C6A15B] p-1 bg-[#FFFDF3] shadow-md flex items-center justify-center mb-4">
                    <svg viewBox="0 0 100 100" className="w-20 h-20 text-[#70451F]">
                      <circle cx="50" cy="35" r="18" fill="#C6A15B" opacity="0.3" />
                      <circle cx="50" cy="33" r="14" fill="#70451F" />
                      <path d="M 25 80 C 25 55 75 55 75 80 Z" fill="#20572C" />
                      <circle cx="50" cy="70" r="10" fill="#E99BB7" />
                    </svg>
                    <Sparkles className="w-5 h-5 text-[#C6A15B] absolute -top-1 -right-1" />
                  </div>
                  <h4 className="font-serif-tamil text-lg font-bold text-[#20572C]">
                    {INVITATION_DATA.bride.name}
                  </h4>
                  <p className="text-xs text-[#70451F] font-semibold mb-1">
                    & {INVITATION_DATA.groom.name}
                  </p>
                  <p className="text-xs text-[#477A32] italic mt-2">
                    வளைகாப்பு விழா தம்பதியர்
                  </p>
                </div>
              )}

              {/* Shimmer Light Sweep on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              {/* Subtle vignette gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#20572C]/40 via-transparent to-transparent pointer-events-none" />

              {/* View Full Card Button in ENGLISH as requested */}
              <button
                onClick={() => setShowFullModal(true)}
                className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-[#FFFDF3]/95 hover:bg-[#FFFDF3] text-[#20572C] text-xs font-bold shadow-lg border border-[#C6A15B] flex items-center gap-1.5 backdrop-blur-sm transition-all transform hover:scale-105 active:scale-95 cursor-pointer font-sans"
              >
                <ZoomIn className="w-3.5 h-3.5 text-[#70451F]" />
                <span>{INVITATION_DATA.uiLabels.viewFullCard}</span>
              </button>
            </div>

            {/* Bottom Floral Lotus Accents on the frame */}
            <div className="flex items-center justify-center gap-2 -mt-4 relative z-20 pointer-events-none">
              <LotusBloom size={42} className="transform -rotate-12" />
              <div className="px-3.5 py-1 bg-[#FFFDF3] rounded-full border border-[#C6A15B] shadow-sm flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#E99BB7] fill-[#E99BB7]" />
                <span className="font-serif-tamil text-[11px] font-bold text-[#20572C]">மங்கலத் தம்பதியர்</span>
              </div>
              <LotusBloom size={42} className="transform rotate-12" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Couple Names & Qualifications in Grand Tamil Typography with English Badges */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-7 max-w-lg w-full"
      >
        <div className="space-y-3">
          {/* Bride Name in Tamil */}
          <div className="flex items-center justify-center">
            <div className="flex items-baseline gap-2">
              <h3 className="font-serif-tamil text-2xl sm:text-3xl font-extrabold text-[#20572C] tracking-tight">
                {INVITATION_DATA.bride.name}
              </h3>
              <span className="text-sm sm:text-base font-bold text-[#70451F] font-sans">
                {INVITATION_DATA.bride.qualification}
              </span>
            </div>
          </div>

          <p className="text-[#C6A15B] font-bold text-lg my-1">✦ ❖ ✦</p>

          {/* Groom Name in Tamil */}
          <div className="flex items-center justify-center">
            <div className="flex items-baseline gap-2">
              <h3 className="font-serif-tamil text-2xl sm:text-3xl font-extrabold text-[#20572C] tracking-tight">
                {INVITATION_DATA.groom.name}
              </h3>
              <span className="text-sm sm:text-base font-bold text-[#70451F] font-sans">
                {INVITATION_DATA.groom.qualification}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal to view full original invitation document */}
      <AnimatePresence>
        {showFullModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center"
            onClick={() => setShowFullModal(false)}
          >
            <div
              className="relative max-w-2xl w-full max-h-[92vh] bg-[#FFFDF3] rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-3 border-3 border-[#C6A15B]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowFullModal(false)}
                className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-[#8C1423] hover:bg-[#680B18] text-[#FFFDF3] text-xs font-bold flex items-center gap-1 shadow-lg transition-transform active:scale-95 font-sans"
                aria-label={INVITATION_DATA.uiLabels.close}
              >
                <X className="w-4 h-4" />
                <span>{INVITATION_DATA.uiLabels.close}</span>
              </button>
              <div className="overflow-auto max-h-[85vh] rounded-2xl">
                <img
                  src="/image.png"
                  alt="சுபமதி & முரளிதரன் வளைகாப்பு விழா அழைப்பிதழ்"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Compass } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';
import { ClickableQRCode } from './ClickableQRCode';

export const VenueSection: React.FC = () => {
  return (
    <section className="my-8 sm:my-14 px-3 sm:px-4 max-w-3xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#FFFDF3] rounded-3xl p-6 sm:p-10 border-2 border-[#C6A15B] shadow-2xl overflow-hidden"
      >
        {/* Subtle decorative gold corners */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#C6A15B] rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#C6A15B] rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#C6A15B] rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#C6A15B] rounded-br-lg" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#E7F0D7] border border-[#C6A15B] text-[#20572C] mb-3">
            <Compass className="w-6 h-6 text-[#70451F]" />
          </div>

          {/* Section heading in English */}
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#20572C] uppercase tracking-wide">
            {INVITATION_DATA.uiLabels.venueHeading}
          </h3>
          <p className="font-serif-tamil text-xs sm:text-sm text-[#70451F] font-semibold mt-1">
            சிதம்பரம் திருத்தலம்
          </p>
        </div>

        {/* 2-Column Responsive Layout: Venue Text & Clickable QR Code */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Venue Information Column in Tamil */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="p-5 bg-[#E7F0D7]/60 rounded-2xl border border-[#C6A15B]/50 w-full">
              <span className="font-serif-tamil text-xs font-bold uppercase tracking-wider text-[#70451F] block mb-2">
                {INVITATION_DATA.venue.label}
              </span>
              <h4 className="font-serif-tamil text-xl sm:text-2xl font-extrabold text-[#20572C] mb-1">
                {INVITATION_DATA.venue.name}
              </h4>
              <p className="font-serif-tamil text-base sm:text-lg font-medium text-[#70451F]">
                {INVITATION_DATA.venue.street},
              </p>
              <p className="font-serif-tamil text-base sm:text-lg font-bold text-[#20572C]">
                {INVITATION_DATA.venue.town}.
              </p>
            </div>

            <p className="font-serif-tamil text-xs text-[#20572C]/80 leading-relaxed">
              சிதம்பரம் அருள்மிகு நடராஜர் திருக்கோயில் திருத்தலத்திற்கு அருகாமையில் அமைந்திருக்கும் ஆறுமுக நாவலர் நிலையத்தில் விழா இனிதே நடைபெறும்.
            </p>

            {/* Direct Directions Button in English */}
            <a
              href={INVITATION_DATA.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#20572C] to-[#184422] text-[#FFFDF3] text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-103 focus:outline-none focus:ring-4 focus:ring-[#C6A15B]/40 font-sans"
            >
              <Navigation className="w-4 h-4 text-[#ECC880]" />
              <span>{INVITATION_DATA.uiLabels.viewDirections}</span>
            </a>
          </div>

          {/* Clickable QR Code Column */}
          <div className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-[#C6A15B]/40 pt-6 md:pt-0 md:pl-6">
            <ClickableQRCode size={180} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

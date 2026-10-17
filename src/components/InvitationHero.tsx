import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_DATA } from '../data/invitationData';
import { LotusBloom } from './FloralDecorations';

export const InvitationHero: React.FC = () => {
  return (
    <section className="relative text-center pt-8 pb-4 sm:py-10 px-4 max-w-3xl mx-auto overflow-hidden">
      {/* Auspicious Invocation: உ */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-3"
      >
        <span className="font-serif-tamil text-2xl font-black text-[#20572C] inline-block px-3 py-1 bg-[#FFFDF3] rounded-full border border-[#C6A15B] shadow-sm">
          உ
        </span>
      </motion.div>

      {/* Main Heading: வளைகாப்பு விழா! */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center justify-center gap-2 sm:gap-3 my-2"
      >
        <LotusBloom size={38} className="transform -rotate-12 hidden sm:block" />
        <h1 className="font-serif-tamil text-3xl sm:text-5xl md:text-6xl font-black text-[#20572C] tracking-tight drop-shadow-sm">
          {INVITATION_DATA.title}
        </h1>
        <LotusBloom size={38} className="transform rotate-12 hidden sm:block scale-x-[-1]" />
      </motion.div>

      {/* Ornamental Golden Divider */}
      <div className="flex items-center justify-center gap-3 my-4">
        <div className="w-16 sm:w-28 h-0.5 bg-gradient-to-r from-transparent to-[#C6A15B]" />
        <span className="text-[#C6A15B] font-serif text-lg">✦ ❖ ✦</span>
        <div className="w-16 sm:w-28 h-0.5 bg-gradient-to-l from-transparent to-[#C6A15B]" />
      </div>

      {/* Supporting Invitation Poetry / Message */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-serif-tamil text-base sm:text-xl font-medium text-[#20572C] leading-relaxed max-w-2xl mx-auto px-2"
      >
        {INVITATION_DATA.invitationMessage}
      </motion.p>
    </section>
  );
};

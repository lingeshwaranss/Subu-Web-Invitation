import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Copy, Check, RotateCcw, MessageSquare } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

interface ShareControlsProps {
  onReplay: () => void;
}

export const ShareControls: React.FC<ShareControlsProps> = ({ onReplay }) => {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    return window.location.href;
  };

  const getShareMessage = () => {
    return (
      `🌸 ${INVITATION_DATA.title} 🌸\n\n` +
      `தாய்மையின் இனிய பயணத்தில் ஒரு அழகான தருணம் — எங்கள் வளைகாப்பு விழாவிற்கு அன்புடன் அழைக்கிறோம்!\n\n` +
      `மணமக்கள்:\n` +
      `சு. சுபமதி B.E.,\n` +
      `லெ. முரளிதரன் DCE., BBA.,\n\n` +
      `📅 நாள்: 25 அக்டோபர் 2026, ஞாயிற்றுக்கிழமை\n` +
      `⏰ நேரம்: காலை 11:00 மணி முதல் 12:00 வரை\n` +
      `📍 நிகழ்விடம்: ஆறுமுக நாவலர் நிலையம், மாலைகட்டி தெரு, சிதம்பரம்.\n\n` +
      `அழைப்பிதழை முழுமையாகக் காண இந்த இணைப்பைத் தொடவும்:\n` +
      `${getShareUrl()}`
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = getShareUrl();
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'சுபமதி & முரளிதரன் வளைகாப்பு விழா அழைப்பிதழ்',
          text: getShareMessage(),
          url: getShareUrl(),
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          handleWhatsAppShare();
        }
      }
    } else {
      handleWhatsAppShare();
    }
  };

  const handleWhatsAppShare = () => {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(getShareMessage())}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="my-10 px-3 sm:px-4 max-w-xl mx-auto w-full text-center">
      <div className="p-6 sm:p-8 bg-[#FFFDF3] rounded-3xl border-2 border-[#C6A15B] shadow-xl">
        <h4 className="font-serif-tamil text-lg font-bold text-[#20572C] mb-4">
          குடும்பத்தினருடனும் நண்பர்களுடனும் பகிரவும்
        </h4>

        {/* Action Buttons strictly in English */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* WhatsApp Direct Share */}
          <button
            onClick={handleWhatsAppShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] font-sans"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{INVITATION_DATA.uiLabels.shareWhatsApp}</span>
          </button>

          {/* Web Share API */}
          <button
            onClick={handleWebShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#20572C] hover:bg-[#184422] text-[#FFFDF3] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] font-sans"
          >
            <Share2 className="w-4 h-4 text-[#ECC880]" />
            <span>{INVITATION_DATA.uiLabels.shareInvitation}</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFFDF3] hover:bg-[#E7F0D7] text-[#70451F] text-xs sm:text-sm font-bold border border-[#C6A15B] shadow-sm hover:shadow transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] font-sans"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#20572C]" />
                <span>{INVITATION_DATA.uiLabels.copyLink}</span>
              </>
            )}
          </button>
        </div>

        {/* Replay Opening Animation */}
        <div className="mt-6 pt-5 border-t border-[#C6A15B]/30 flex justify-center">
          <button
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-[#70451F] hover:text-[#20572C] hover:bg-[#E7F0D7]/60 transition-colors font-sans border border-[#C6A15B]/40"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{INVITATION_DATA.uiLabels.replayOpening}</span>
          </button>
        </div>
      </div>

      {/* Floating Copied Toast Alert */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#20572C] text-[#FFFDF3] px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 border border-[#C6A15B] font-sans"
          >
            <Check className="w-4 h-4 text-[#ECC880]" />
            <span>{INVITATION_DATA.uiLabels.copiedNotice}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

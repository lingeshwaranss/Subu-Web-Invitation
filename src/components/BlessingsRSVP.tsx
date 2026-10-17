import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, CheckCircle2, MessageCircleHeart } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

interface Blessing {
  id: string;
  name: string;
  message: string;
  attending: boolean;
  date: string;
}

export const BlessingsRSVP: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attending, setAttending] = useState(true);
  const [guestCount, setGuestCount] = useState(2);
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Load blessings from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('valaikappu_blessings');
      if (saved) {
        setBlessings(JSON.parse(saved));
      } else {
        // Initial auspicious Tamil blessings
        setBlessings([
          {
            id: '1',
            name: 'அன்புள்ள பெரியோர்கள்',
            message: 'தாயும் பிறக்கப் போகும் செல்வமும் நலமும் வளமும் பெற்று பல்லாண்டு வாழ வாழ்த்துகிறோம்!',
            attending: true,
            date: 'இன்று',
          },
        ]);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim() || 'எங்கள் மனமார்ந்த நல்வாழ்த்துக்கள்!',
      attending,
      date: 'இப்போது',
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    try {
      localStorage.setItem('valaikappu_blessings', JSON.stringify(updated));
    } catch {
      // Ignore
    }

    // Prefill WhatsApp blessing message
    const waText = encodeURIComponent(
      `வணக்கம்! சு. சுபமதி & லெ. முரளிதரன் வளைகாப்பு விழாவிற்கு வாழ்த்துக்கள்!\n\nவாழ்த்து தெரிவித்தவர்: ${name.trim()}\nசெய்தி: ${message.trim() || 'தாயும் சேயும் நலமுடன் வாழ வாழ்த்துகிறோம்!'}\nவருகை: ${attending ? `மகிழ்ச்சியுடன் கலந்து கொள்கிறோம் (${guestCount} பேர்)` : 'நல்வாழ்த்துக்கள்!'}`
    );

    setName('');
    setMessage('');
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);

    // Open WhatsApp option
    window.open(`https://wa.me/?text=${waText}`, '_blank');
  };

  return (
    <section className="my-10 sm:my-16 px-3 sm:px-4 max-w-2xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#FFFDF3] rounded-3xl p-6 sm:p-8 border-2 border-[#C6A15B] shadow-xl text-center"
      >
        <div className="inline-flex items-center justify-center p-2.5 rounded-full bg-[#E7F0D7] border border-[#C6A15B] text-[#70451F] mb-3">
          <MessageCircleHeart className="w-6 h-6 text-[#E99BB7]" />
        </div>

        {/* Section Heading in English */}
        <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-[#20572C] mb-2 uppercase tracking-wide">
          {INVITATION_DATA.uiLabels.blessingsTitle}
        </h3>
        <p className="font-serif-tamil text-xs sm:text-sm text-[#70451F] max-w-md mx-auto mb-6">
          தாய்மை எய்தும் சுபமதிக்கு உங்கள் அன்பான வாழ்த்துக்களையும் ஆசிகளையும் பதிவு செய்யுங்கள்
        </p>

        {/* Blessing / RSVP Form with English labels and buttons */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
          <div>
            <label className="block text-xs font-bold text-[#20572C] mb-1 font-sans">
              {INVITATION_DATA.uiLabels.guestNamePlaceholder} <span className="text-[#C6A15B]">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDF3] border border-[#C6A15B] text-[#20572C] text-sm focus:outline-none focus:ring-2 focus:ring-[#20572C] placeholder:text-[#20572C]/40 font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#20572C] mb-1 font-sans">
              {INVITATION_DATA.uiLabels.guestBlessingPlaceholder}
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your heartfelt wishes and blessings..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#FFFDF3] border border-[#C6A15B] text-[#20572C] text-sm focus:outline-none focus:ring-2 focus:ring-[#20572C] placeholder:text-[#20572C]/40 resize-none font-sans"
            />
          </div>

          {/* RSVP attending toggle */}
          <div className="p-3 bg-[#E7F0D7]/60 rounded-xl border border-[#C6A15B]/40 flex flex-col gap-2 font-sans">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={attending}
                onChange={(e) => setAttending(e.target.checked)}
                className="w-4 h-4 text-[#20572C] rounded accent-[#20572C]"
              />
              <span className="text-xs font-bold text-[#20572C]">
                {INVITATION_DATA.uiLabels.rsvpYes}
              </span>
            </label>
            {attending && (
              <div className="flex items-center gap-2 pl-6 text-xs text-[#70451F]">
                <span className="font-semibold">{INVITATION_DATA.uiLabels.guestsCount}</span>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="px-2 py-1 rounded bg-[#FFFDF3] border border-[#C6A15B] text-xs font-bold text-[#20572C]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-full bg-[#20572C] hover:bg-[#184422] text-[#FFFDF3] text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] font-sans uppercase tracking-wider cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#ECC880]" />
            <span>{INVITATION_DATA.uiLabels.sendBlessing}</span>
          </button>
        </form>

        {/* Success Alert */}
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-[#20572C] text-[#FFFDF3] rounded-xl text-xs flex items-center justify-center gap-2 shadow font-sans"
          >
            <CheckCircle2 className="w-4 h-4 text-[#ECC880]" />
            <span>{INVITATION_DATA.uiLabels.blessingSentSuccess}</span>
          </motion.div>
        )}

        {/* Recent Auspicious Blessings Stream */}
        <div className="mt-8 pt-6 border-t border-[#C6A15B]/40 text-left">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#70451F] mb-3 flex items-center gap-1.5 font-sans">
            <Heart className="w-3.5 h-3.5 text-[#E99BB7] fill-[#E99BB7]" />
            <span>Recent Blessings Received</span>
          </h4>
          <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
            {blessings.slice(0, 5).map((b) => (
              <div
                key={b.id}
                className="p-3 bg-[#E7F0D7]/40 rounded-xl border border-[#C6A15B]/30 text-xs"
              >
                <div className="flex items-center justify-between font-semibold text-[#20572C] mb-1">
                  <span>{b.name}</span>
                  {b.attending && (
                    <span className="text-[10px] text-[#477A32] bg-[#FFFDF3] px-1.5 py-0.5 rounded border border-[#C6A15B]/40 font-sans font-bold">
                      Attending
                    </span>
                  )}
                </div>
                <p className="text-[#70451F] italic leading-relaxed font-serif-tamil">{b.message}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

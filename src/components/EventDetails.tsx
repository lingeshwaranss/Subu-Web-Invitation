import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CalendarPlus } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

export const EventDetails: React.FC = () => {
  // Countdown Timer state
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = INVITATION_DATA.startDate.getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent('வளைகாப்பு விழா - சுபமதி & முரளிதரன்');
    const details = encodeURIComponent(
      'சு. சுபமதி B.E. & லெ. முரளிதரன் DCE., BBA. வளைகாப்பு விழா. தாய்மையின் இனிய பயணத்தில் ஒரு அழகான தருணம்!'
    );
    const location = encodeURIComponent(INVITATION_DATA.venue.fullAddress);
    const dates = '20261025T053000Z/20261025T063000Z';

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section className="my-8 sm:my-14 px-3 sm:px-4 max-w-2xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#FFFDF3] rounded-3xl p-6 sm:p-8 border-2 border-[#C6A15B] shadow-xl overflow-hidden text-center"
      >
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-[#E7F0D7]/60 rounded-br-full -z-0" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#E7F0D7]/60 rounded-tl-full -z-0" />

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center p-2.5 rounded-full bg-[#E7F0D7] border border-[#C6A15B] text-[#70451F] mb-3">
            <Calendar className="w-5 h-5 text-[#20572C]" />
          </div>

          {/* Section Heading in English */}
          <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-[#20572C] mb-4 tracking-wide uppercase">
            {INVITATION_DATA.uiLabels.eventDetails}
          </h3>

          {/* Exact Tamil Date Line */}
          <div className="my-3">
            <span className="font-serif-tamil text-2xl sm:text-3xl font-extrabold text-[#70451F] block tracking-wide">
              {INVITATION_DATA.eventDateText}
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#20572C] mt-1 block font-serif-tamil">
              25 அக்டோபர் 2026
            </span>
          </div>

          {/* Exact Tamil Time Line */}
          <div className="my-4 flex items-center justify-center gap-2 text-base sm:text-lg font-medium text-[#20572C] bg-[#E7F0D7]/70 py-3 px-4 rounded-2xl border border-[#C6A15B]/40 max-w-lg mx-auto">
            <Clock className="w-5 h-5 text-[#70451F] shrink-0" />
            <span className="leading-snug font-serif-tamil">{INVITATION_DATA.eventDayTimeText}</span>
          </div>

          {/* Countdown timer blocks with English labels */}
          <div className="my-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[#70451F] mb-3 font-sans">
              {INVITATION_DATA.uiLabels.countdownTitle}
            </p>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-sm mx-auto">
              {[
                { label: INVITATION_DATA.uiLabels.days, value: timeLeft.days },
                { label: INVITATION_DATA.uiLabels.hours, value: timeLeft.hours },
                { label: INVITATION_DATA.uiLabels.minutes, value: timeLeft.minutes },
                { label: INVITATION_DATA.uiLabels.seconds, value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFDF3] border border-[#C6A15B] rounded-xl p-2 sm:p-2.5 shadow-sm"
                >
                  <span className="block text-lg sm:text-2xl font-extrabold text-[#20572C] font-mono tabular-nums">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="block text-[10px] sm:text-xs font-bold text-[#70451F] font-sans uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Action in English */}
          <div className="mt-6 flex items-center justify-center">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#20572C] hover:bg-[#184422] text-[#FFFDF3] text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-103 focus:outline-none focus:ring-4 focus:ring-[#C6A15B]/50 font-sans cursor-pointer"
            >
              <CalendarPlus className="w-5 h-5 text-[#ECC880]" />
              <span>{INVITATION_DATA.uiLabels.addToCalendar}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Hourglass, BellRing } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

interface EventCountdownProps {
  language: 'ta' | 'en';
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const EventCountdown: React.FC<EventCountdownProps> = ({ language }) => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(invitationConfig.event.dateISO).getTime();
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { labelTa: 'நாட்கள்', labelEn: 'Days', value: timeLeft.days },
    { labelTa: 'மணித்துளிகள்', labelEn: 'Hours', value: timeLeft.hours },
    { labelTa: 'நிமிடங்கள்', labelEn: 'Minutes', value: timeLeft.minutes },
    { labelTa: 'விநாடிகள்', labelEn: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#1B0105] overflow-hidden">
      {/* Golden Aura Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-60 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-glass border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <Hourglass className="w-3.5 h-3.5 text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{language === 'ta' ? 'நிகழ்விற்கான நேரக் கணிப்பு' : 'Live Event Countdown'}</span>
        </div>

        <h3 className="font-tamil text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-2">
          {language === 'ta' ? 'மங்கள விழா இன்னும் சில நாட்களில்...' : 'Counting Down to the Auspicious Day'}
        </h3>
        <p className="text-xs sm:text-sm text-ivory-200/80 font-serif italic mb-10">
          {invitationConfig.event.dateFormattedTamil} • {invitationConfig.event.muhurthamTimeTamil}
        </p>

        {timeLeft.isPast ? (
          <div className="p-6 rounded-2xl royal-card border border-gold-400 max-w-lg mx-auto">
            <BellRing className="w-8 h-8 text-gold-400 mx-auto mb-2 animate-bounce" />
            <h4 className="font-tamil text-xl font-bold text-gold-200">
              {language === 'ta' ? 'மங்கள விழா இனிதே நடைபெறுகிறது!' : 'The Blessed Celebration is Live!'}
            </h4>
            <p className="text-xs text-ivory-200/80 mt-1">
              {language === 'ta' ? 'தங்கள் பொற்பாதங்களால் எங்களை ஆசீர்வதியுங்கள்' : 'We warmly welcome you to bless the child'}
            </p>
          </div>
        ) : (
          /* Countdown Flip Cards Grid */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {timeBlocks.map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glow Edge */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-gold-400 to-gold-700 opacity-25 group-hover:opacity-60 blur-sm transition-opacity" />

                {/* Card Container */}
                <div className="relative rounded-2xl p-4 sm:p-6 bg-gradient-to-b from-maroon-900/95 via-maroon-950/95 to-[#1A0105] border border-gold-400/40 shadow-2xl flex flex-col items-center">
                  {/* Subtle Top Brass Rivet */}
                  <div className="w-2 h-2 rounded-full bg-gold-400/80 mb-2 shadow-sm" />

                  {/* Digit Display */}
                  <span className="font-cinematic text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 tracking-wider gold-text-glow">
                    {String(block.value).padStart(2, '0')}
                  </span>

                  {/* Divider line */}
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent my-2" />

                  {/* Label */}
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gold-200 font-tamil">
                    {language === 'ta' ? block.labelTa : block.labelEn}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, Share2, Copy, Check, MessageCircle, Users, Sparkles } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';
import confetti from 'canvas-confetti';

interface FinalCelebrationProps {
  language: 'ta' | 'en';
}

export const FinalCelebration: React.FC<FinalCelebrationProps> = ({ language }) => {
  const { child, rsvp, event } = invitationConfig;
  const [guestCount, setGuestCount] = useState<number>(2);
  const [copied, setCopied] = useState<boolean>(false);

  // Trigger celebration confetti burst
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#FFA500', '#F7E7B6', '#E11D48'],
    });
  };

  // WhatsApp RSVP link with dynamic guest count
  const handleRSVPWhatsApp = () => {
    triggerConfetti();
    const message = language === 'ta'
      ? `${rsvp.prefilledMessageTamil}${guestCount} நபர்கள். (நிகழ்வு: ${event.titleTamil} - ${child.nameTamil})`
      : `${rsvp.prefilledMessageEnglish}${guestCount} guests. (Event: ${event.titleEnglish} - ${child.nameEnglish})`;

    const url = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Share Invitation on WhatsApp
  const handleShareWhatsApp = () => {
    const shareText = language === 'ta'
      ? `🙏 *${child.nameTamil}* அவர்களின் மங்கள *காது குத்து விழா அழைப்பிதழ்*! \n📅 நாள்: ${event.dateFormattedTamil} \n📍 இடம்: ${invitationConfig.venue.mandapamTamil}, ${invitationConfig.venue.cityTamil} \n\nஅழைப்பிதழை முழுமையாகக் காண இந்த இணைப்பைத் திறக்கவும்: ${window.location.href}`
      : `🙏 Cordially inviting you to the traditional *Ear-Piercing Ceremony* of *${child.nameEnglish}*! \n📅 Date: ${event.dateFormattedEnglish} \n📍 Venue: ${invitationConfig.venue.mandapamEnglish}, ${invitationConfig.venue.cityEnglish} \n\nView the full interactive invitation here: ${window.location.href}`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  // Copy Link to Clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="rsvp" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#180104] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-b from-gold-500/10 via-maroon-700/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Baby Portrait Finale Spotlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-10"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-2 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 shadow-2xl mx-auto border-2 border-gold-200">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-maroon-950">
              <img
                src={child.photoUrl}
                alt={child.photoAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full royal-glass border border-gold-400 text-gold-300 text-xs font-bold whitespace-nowrap shadow-xl">
            {language === 'ta' ? child.nameTamil : child.nameEnglish}
          </div>
        </motion.div>

        {/* Finale Headline */}
        <h2 className="font-tamil text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-4 gold-text-glow">
          {language === 'ta' ? 'தங்கள் பொற்பாத வருகையை எதிர்நோக்கும்...' : 'Awaiting Your Gracious Presence'}
        </h2>
        
        <p className="font-serif text-sm sm:text-base text-ivory-200/90 italic max-w-xl mx-auto mb-10 leading-relaxed">
          {language === 'ta'
            ? '“தங்கள் வருகை எங்கள் இல்லத்திற்கு மங்களம் சேர்க்கும். தங்கள் ஆசியால் எங்கள் செல்வக்குழந்தை நீண்ட ஆயுளும் நற்புகழும் பெற்று சிறக்க வேண்டுகிறோம்.”'
            : '"Your sacred presence will bless our humble abode with joy, prosperity, and bestow lifelong grace upon our beloved child."'}
        </p>

        {/* Interactive RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-card rounded-3xl p-6 sm:p-10 border-2 border-gold-400/40 shadow-2xl max-w-xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">
            <MessageCircle className="w-4 h-4" />
            <span>{language === 'ta' ? 'வருகையை உறுதி செய்ய (RSVP)' : 'Confirm Your Presence (RSVP)'}</span>
          </div>

          <p className="text-xs text-ivory-200/70 mb-6">
            {language === 'ta'
              ? 'வாட்ஸ்அப் மூலமாக உங்கள் வருகையை எளிதில் உறுதிசெய்து உபசரிப்பை சிறப்பிக்க உதவுங்கள்'
              : 'Kindly let us know through WhatsApp so we can arrange traditional hospitality for you'}
          </p>

          {/* Guest Count Selector */}
          <div className="mb-6 p-4 rounded-2xl bg-maroon-950/80 border border-gold-500/25 flex items-center justify-between">
            <div className="flex items-center gap-2 text-left">
              <Users className="w-5 h-5 text-gold-400" />
              <div>
                <span className="text-xs font-bold text-gold-200 block">
                  {language === 'ta' ? 'கலந்துகொள்ளும் உறுப்பினர்கள்:' : 'Attending Guests:'}
                </span>
                <span className="text-[10px] text-ivory-200/60">
                  {language === 'ta' ? 'குடும்ப உறுப்பினர்கள் எண்ணிக்கை' : 'Number of family members'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                className="w-8 h-8 rounded-full royal-glass border border-gold-400/50 text-gold-200 font-bold hover:bg-gold-500/20 active:scale-95 transition-all flex items-center justify-center text-sm"
              >
                -
              </button>
              <span className="font-bold text-base text-gold-300 w-6 text-center">
                {guestCount}
              </span>
              <button
                onClick={() => setGuestCount(Math.min(20, guestCount + 1))}
                className="w-8 h-8 rounded-full royal-glass border border-gold-400/50 text-gold-200 font-bold hover:bg-gold-500/20 active:scale-95 transition-all flex items-center justify-center text-sm"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons: WhatsApp RSVP & Share */}
          <div className="space-y-3">
            <button
              onClick={handleRSVPWhatsApp}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span>{language === 'ta' ? 'வாட்ஸ்அப் வழி உறுதி செய்க (RSVP ON WHATSAPP)' : 'CONFIRM RSVP VIA WHATSAPP'}</span>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* Share on WhatsApp */}
              <button
                onClick={handleShareWhatsApp}
                className="py-3 px-4 rounded-xl royal-glass border border-gold-400/40 text-gold-200 hover:text-gold-100 hover:border-gold-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <Share2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ta' ? 'அழைப்பை பகிர்க (Share)' : 'Share on WhatsApp'}</span>
              </button>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className="py-3 px-4 rounded-xl royal-glass border border-gold-400/40 text-gold-200 hover:text-gold-100 hover:border-gold-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">{language === 'ta' ? 'இணைப்பு நகலெடுக்கப்பட்டது!' : 'Link Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gold-400" />
                    <span>{language === 'ta' ? 'இணைப்பை நகலெடு' : 'Copy Invitation Link'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Traditional Mangalam & Nandri Footer */}
        <div className="border-t border-gold-500/20 pt-10 text-center space-y-2">
          <div className="w-12 h-12 rounded-full border border-gold-400/40 flex items-center justify-center mx-auto bg-gold-500/10 mb-2">
            <Sparkles className="w-5 h-5 text-gold-400" />
          </div>
          <h4 className="font-tamil text-2xl font-bold text-gold-200">
            {language === 'ta' ? 'நன்றி • வணக்கம்' : 'Thank You • Mangalam'}
          </h4>
          <p className="text-xs text-ivory-200/60 font-tamil">
            {language === 'ta'
              ? 'எல்லாம்வல்ல இறைவன் மற்றும் குலதெய்வ திருவருள் என்றும் நிலைக்கட்டும்'
              : 'May the eternal blessings of the Divine and Ancestors be with us all'}
          </p>
          <p className="text-[10px] text-gold-400/50 pt-4 uppercase tracking-widest">
            Royal Traditional Tamil Ear-Piercing Ceremony Invitation Website
          </p>
        </div>
      </div>
    </section>
  );
};

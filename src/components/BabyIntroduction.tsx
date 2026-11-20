import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Crown, Users } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

interface BabyIntroductionProps {
  language: 'ta' | 'en';
}

export const BabyIntroduction: React.FC<BabyIntroductionProps> = ({ language }) => {
  const { child, parents, grandparents, quotes } = invitationConfig;

  return (
    <section id="baby" className="relative py-16 sm:py-24 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-[#200308]/90 overflow-hidden w-full max-w-full">
      {/* Kolam Pattern Ambient Background */}
      <div className="absolute inset-0 kolam-pattern pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-maroon-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 px-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full royal-glass border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2.5 sm:mb-3"
          >
            <Crown className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>{language === 'ta' ? 'எங்கள் இல்லத்து செல்வம்' : 'The Star of Our Family'}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-tamil text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-2 sm:mb-3 break-words"
          >
            {language === 'ta' ? 'அன்பு மழலையின் அறிமுகம்' : 'Introducing Our Little Treasure'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm text-ivory-200/80 font-serif italic"
          >
            {language === 'ta'
              ? 'இறைவனின் அருட்கொடையாய் எங்கள் இல்லம் மலர்ந்த அன்புச் செல்வத்தை வாழ்த்த வாருங்கள்'
              : 'Blessed by the Divine and cherished by our ancestors, introducing the little light of our lives'}
          </motion.p>
        </div>

        {/* Baby Portrait & Family Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* Baby Royal Portrait Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative group max-w-full">
              {/* Outer Radiant Gold Halo */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-gold-600 via-turmeric-500 to-gold-300 opacity-60 blur-md group-hover:opacity-80 transition-opacity animate-pulseGlow" />
              
              {/* Ornate Circular Thanjavur / Temple Brass Frame (Mobile-sized & Desktop-sized) */}
              <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full p-2 sm:p-2.5 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-800 shadow-[0_15px_40px_rgba(0,0,0,0.8)] border-2 border-gold-200/60 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 sm:border-4 border-maroon-950 shadow-inner">
                  <img
                    src={child.photoUrl}
                    alt={child.photoAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle Inner Warm Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Gold Kadukkan Badge */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full royal-glass border border-gold-400 text-gold-300 text-[10px] sm:text-xs font-bold whitespace-nowrap shadow-xl flex items-center gap-1.5">
                  <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400 shrink-0" />
                  <span>{language === 'ta' ? child.goldOrnamentTamil : child.goldOrnamentEnglish}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Child Profile & Family Lineage Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 w-full">
            {/* Child Title & Name Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="royal-card rounded-2xl p-4 sm:p-7 border border-gold-400/30 w-full"
            >
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-gold-400 uppercase tracking-widest mb-1">
                <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{language === 'ta' ? child.titleTamil : child.titleEnglish}</span>
              </div>
              <h3 className="font-tamil text-xl sm:text-3xl font-extrabold text-gold-100 mb-2 sm:mb-3 gold-text-glow break-words">
                {language === 'ta' ? child.nameTamil : child.nameEnglish}
              </h3>
              
              {child.dateOfBirth && (
                <p className="text-[11px] sm:text-xs text-ivory-200/80 mb-3 sm:mb-4 flex items-center gap-1.5">
                  <span className="text-gold-400">★</span>
                  <span>{language === 'ta' ? 'பிறந்த நாள்:' : 'Born On:'}</span>
                  <span className="text-gold-200 font-semibold">{child.dateOfBirth}</span>
                </p>
              )}

              {/* Poetic Family Invitation Verse */}
              <div className="p-3 sm:p-4 rounded-xl bg-maroon-950/60 border-l-2 border-gold-400 italic font-serif text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
                {language === 'ta' ? quotes.tamil : quotes.english}
              </div>
            </motion.div>

            {/* Lineage Details: Parents & Grandparents Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              {/* Parents Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="royal-card rounded-xl p-3.5 sm:p-5 border border-gold-500/25 w-full"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-gold-400 mb-2">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold-400/30 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                    {language === 'ta' ? 'பெற்றோர்கள்' : 'Beloved Parents'}
                  </span>
                </div>
                <p className="font-tamil font-bold text-xs sm:text-sm text-gold-200 break-words">
                  {language === 'ta' ? parents.fatherTamil : parents.fatherEnglish}
                </p>
                <p className="font-tamil font-bold text-xs sm:text-sm text-gold-200 mt-1 break-words">
                  {language === 'ta' ? parents.motherTamil : parents.motherEnglish}
                </p>
              </motion.div>

              {/* Grandparents Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="royal-card rounded-xl p-3.5 sm:p-5 border border-gold-500/25 w-full"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-gold-400 mb-2">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                    {language === 'ta' ? 'தாத்தா & பாட்டி' : 'Loving Grandparents'}
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-ivory-200/90 font-tamil">
                  <div>
                    <span className="text-gold-400/80 text-[9px] sm:text-[10px] block">
                      {language === 'ta' ? 'தந்தை வழி:' : 'Paternal:'}
                    </span>
                    <span className="font-semibold text-gold-200 break-words">
                      {language === 'ta' ? grandparents.paternalTamil : grandparents.paternalEnglish}
                    </span>
                  </div>
                  <div>
                    <span className="text-gold-400/80 text-[9px] sm:text-[10px] block">
                      {language === 'ta' ? 'தாய் வழி:' : 'Maternal:'}
                    </span>
                    <span className="font-semibold text-gold-200 break-words">
                      {language === 'ta' ? grandparents.maternalTamil : grandparents.maternalEnglish}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

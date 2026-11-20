import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Flame, Utensils, Award } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

interface FamilyStoryProps {
  language: 'ta' | 'en';
}

export const FamilyStory: React.FC<FamilyStoryProps> = ({ language }) => {
  const { traditions, maternalUncles } = invitationConfig;

  const iconMap: Record<string, React.ElementType> = {
    HeartHandshake,
    Sparkles,
    Flame,
    Utensils,
  };

  return (
    <section id="traditions" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-maroon-950/95 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#220308] via-maroon-950 to-[#1e0207]" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-turmeric-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full royal-glass border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'ta' ? 'தொன்மை வாய்ந்த தமிழர் மரபு' : 'Sacred Heritage & Rituals'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-tamil text-2xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-4"
          >
            {language === 'ta' ? 'காது குத்து விழாவின் ஆன்மீகத் தத்துவம்' : 'The Significance of Ear-Piercing Ceremony'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm text-ivory-200/80 font-serif leading-relaxed"
          >
            {language === 'ta'
              ? 'கர்ணவேதம் எனப்படும் இத்திருவிழா குழந்தையின் அறிவாற்றலையும், நீண்ட ஆயுளையும், உடல் நலனையும் காக்கும் அக்குபங்சர் நாடிகளைத் தூண்டி, நம் முன்னோர்களின் ஆசியைப் பெற்றுத் தரும் உன்னத சடங்காகும்.'
              : 'Known traditionally as Karna Vedha, this ceremony awakens acupressure energy pathways for lifelong vitality, sharpness of mind, and bestows the sacred blessings of ancestors and the Kula Deivam.'}
          </motion.p>
        </div>

        {/* Special Spotlight: The Thai Maaman (Maternal Uncle) Honor */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 royal-glass rounded-2xl p-6 sm:p-8 border-2 border-gold-400/40 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 p-1 flex items-center justify-center shrink-0 shadow-xl">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-maroon-950" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-0.5 rounded-full bg-gold-500/20 text-gold-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                {language === 'ta' ? 'விழாவின் முதன்மை நாயகர்கள்' : 'The Central Pillar of the Ritual'}
              </div>
              <h3 className="font-tamil text-xl sm:text-2xl font-bold text-gold-200 mb-2">
                {language === 'ta' ? 'தாய்மாமன் மடி & சீர்வரிசை மகிமை' : 'The Sacred Maternal Uncle Bond'}
              </h3>
              <p className="text-xs sm:text-sm text-ivory-200/85 font-serif leading-relaxed mb-4">
                {language === 'ta'
                  ? 'தமிழ் பண்பாட்டில் தாய்மாமனின் மடியில் அமரவைத்து காது குத்துவதே பெருமைமிக்க வழக்கம். மாமன் அன்போடு வழங்கும் பொற்கடுக்கன், பட்டு வேட்டி, தட்டு வரிசைகள் மங்களத்தின் திருவுருவமாகும்.'
                  : "Seated with deep love on the maternal uncle's lap, the child receives gold earrings and royal seer offerings, symbolizing eternal guidance, security, and familial pride."}
              </p>
              
              {/* Uncles List */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                {maternalUncles.map((uncle, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-maroon-950/80 border border-gold-400/30 text-xs font-tamil"
                  >
                    <span className="text-gold-400 font-bold block text-[10px]">
                      {language === 'ta' ? uncle.roleTamil : uncle.roleEnglish}
                    </span>
                    <span className="text-gold-100 font-bold">
                      {language === 'ta' ? uncle.nameTamil : uncle.nameEnglish}
                    </span>
                    {uncle.spouseTamil && (
                      <span className="text-ivory-200/70 block text-[11px] mt-0.5">
                        & {language === 'ta' ? uncle.spouseTamil : uncle.spouseEnglish}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alternating Cultural Ritual Cards */}
        <div className="space-y-16">
          {traditions.map((tradition, index) => {
            const Icon = iconMap[tradition.icon] || Sparkles;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Imagery Column (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-gold-600 to-turmeric-500 opacity-40 blur-lg group-hover:opacity-70 transition-opacity" />
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl aspect-[4/3]">
                      <img
                        src={tradition.imageUrl}
                        alt={tradition.titleEnglish}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-gold-300">
                        <span className="font-semibold">{language === 'ta' ? tradition.titleTamil : tradition.titleEnglish}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-maroon-900/80 border border-gold-400/30">0{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cultural Narrative Content Column (7 cols) */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-gold-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                      {language === 'ta' ? `சடங்கு 0${index + 1}` : `Ritual 0${index + 1}`}
                    </span>
                  </div>

                  <h3 className="font-tamil text-2xl sm:text-3xl font-extrabold text-gold-100 gold-text-glow">
                    {language === 'ta' ? tradition.titleTamil : tradition.titleEnglish}
                  </h3>

                  <p className="text-sm sm:text-base text-ivory-200/90 font-serif leading-relaxed">
                    {language === 'ta' ? tradition.descriptionTamil : tradition.descriptionEnglish}
                  </p>

                  <div className="pt-2 flex items-center gap-3 text-gold-400/80 text-xs">
                    <span className="w-12 h-[1px] bg-gold-400/40" />
                    <span className="font-serif italic">
                      {language === 'ta' ? 'மங்கலம் பொங்க நல்வாழ்த்துக்கள்' : 'Auspicious Heritage Blessing'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

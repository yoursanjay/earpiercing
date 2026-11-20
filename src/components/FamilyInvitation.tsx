import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Crown } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

interface FamilyInvitationProps {
  language: 'ta' | 'en';
}

export const FamilyInvitation: React.FC<FamilyInvitationProps> = ({ language }) => {
  const { parents, grandparents, maternalUncles, child } = invitationConfig;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#200308] overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute inset-0 kolam-pattern pointer-events-none opacity-5" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-glass border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400/30" />
            <span>{language === 'ta' ? 'அன்பான குடும்ப அழைப்பு' : 'Heartfelt Family Invitation'}</span>
          </div>
          <h2 className="font-tamil text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-3">
            {language === 'ta' ? 'அன்புடன் அழைக்கும் குடும்பத்தினர்' : 'Warmly Welcomed by the Family'}
          </h2>
          <p className="text-xs sm:text-sm text-ivory-200/80 font-serif italic">
            {language === 'ta'
              ? 'எங்கள் இல்லத்து மங்கள விழாவில் கலந்துகொண்டு குழந்தையை மனமார வாழ்த்த வேண்டுகிறோம்'
              : 'Your gracious presence and heartfelt blessings will make this day truly divine'}
          </p>
        </div>

        {/* Royal Silk Scroll Card */}
        <div className="relative p-1 rounded-3xl bg-gradient-to-b from-gold-400 via-gold-600 to-gold-800 shadow-2xl">
          <div className="royal-glass rounded-[22px] p-6 sm:p-10 border border-gold-300/30 space-y-10">
            {/* Blessings Seal Header */}
            <div className="text-center pb-6 border-b border-gold-500/25">
              <span className="font-tamil text-sm text-gold-300 tracking-widest block mb-1">
                {invitationConfig.event.blessingTamil}
              </span>
              <p className="text-xs text-ivory-200/70 font-serif italic">
                {language === 'ta' ? 'சுற்றமும் நட்பும் சூழ இனிதே நடைபெறும் காது குத்து விழா' : 'Celebrated together with family, kin and cherished friends'}
              </p>
            </div>

            {/* Lineage Hierarchy Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {/* Grandparents Column */}
              <div className="space-y-4 p-5 rounded-2xl bg-maroon-950/60 border border-gold-500/20">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/30 mx-auto flex items-center justify-center text-gold-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider block mb-1">
                    {language === 'ta' ? 'தாத்தா - பாட்டி ஆசிகள்' : 'Grandparents’ Blessings'}
                  </span>
                  <div className="text-xs font-tamil text-gold-100 space-y-2">
                    <p className="font-semibold">
                      {language === 'ta' ? grandparents.paternalTamil : grandparents.paternalEnglish}
                    </p>
                    <div className="w-8 h-[1px] bg-gold-400/30 mx-auto" />
                    <p className="font-semibold">
                      {language === 'ta' ? grandparents.maternalTamil : grandparents.maternalEnglish}
                    </p>
                  </div>
                </div>
              </div>

              {/* Parents Column (Hero Center) */}
              <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-b from-maroon-900/90 to-maroon-950 border-2 border-gold-400/50 shadow-xl relative transform md:-translate-y-2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gold-500 text-maroon-950 font-bold text-[10px] uppercase tracking-wider shadow-md">
                  {language === 'ta' ? 'அழைப்பாளர்கள்' : 'Hosts'}
                </div>
                <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400/50 mx-auto flex items-center justify-center text-gold-200">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-300 tracking-wider block mb-1">
                    {language === 'ta' ? 'அன்பு பெற்றோர்கள்' : 'Loving Parents'}
                  </span>
                  <h4 className="font-tamil font-bold text-base text-gold-100 mb-1">
                    {language === 'ta' ? parents.fatherTamil : parents.fatherEnglish}
                  </h4>
                  <h4 className="font-tamil font-bold text-base text-gold-100">
                    {language === 'ta' ? parents.motherTamil : parents.motherEnglish}
                  </h4>
                  <p className="text-[11px] text-ivory-200/80 font-serif italic mt-3">
                    {language === 'ta' ? `செல்வன். ${child.nameTamil} - பெற்றோர்` : `Parents of ${child.nameEnglish}`}
                  </p>
                </div>
              </div>

              {/* Thai Maaman Column */}
              <div className="space-y-4 p-5 rounded-2xl bg-maroon-950/60 border border-gold-500/20">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/30 mx-auto flex items-center justify-center text-gold-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider block mb-1">
                    {language === 'ta' ? 'தாய்மாமன் & குடும்பத்தினர்' : 'Maternal Uncles & Aunts'}
                  </span>
                  <div className="text-xs font-tamil text-gold-100 space-y-2">
                    {maternalUncles.map((uncle, i) => (
                      <div key={i}>
                        <p className="font-semibold text-gold-200">
                          {language === 'ta' ? uncle.nameTamil : uncle.nameEnglish}
                        </p>
                        {uncle.spouseTamil && (
                          <p className="text-[11px] text-ivory-200/70">
                            & {language === 'ta' ? uncle.spouseTamil : uncle.spouseEnglish}
                          </p>
                        )}
                        <span className="text-[10px] text-gold-400/80 block">
                          ({language === 'ta' ? uncle.roleTamil : uncle.roleEnglish})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Relatives & Friends Warm Welcome Note */}
            <div className="text-center pt-4 border-t border-gold-500/25">
              <p className="font-tamil text-sm sm:text-base font-bold text-gold-200">
                {language === 'ta'
                  ? 'உற்றார், உறவினர்கள் மற்றும் நண்பர்கள் அனைவரும் வருகை தந்து வாழ்த்தி அருள வேண்டுகிறோம்.'
                  : 'All relatives, elders, kin, and cherished friends are warmly welcomed to grace the celebration.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

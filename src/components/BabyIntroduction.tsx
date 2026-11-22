import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Sparkles, Calendar, Clock, MapPin } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

interface BabyIntroductionProps {
  language: 'ta' | 'en';
}

export const BabyIntroduction: React.FC<BabyIntroductionProps> = ({ language }) => {
  const { child, parents, event, venue } = invitationConfig;
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking as visitor transitions from Section 1 into Section 2
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // 1 & 2: Initial scale slightly down (0.93), smoothly zooms in to 1.0 as user scrolls
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.93, 1.0]);
  const smoothScale = useSpring(rawScale, { stiffness: 85, damping: 22 });
  const scale = shouldReduceMotion ? 1 : smoothScale;

  // 3: The ornamental frame gradually becomes fully visible
  const rawFrameOpacity = useTransform(scrollYProgress, [0, 0.6], [0.75, 1]);
  const frameOpacity = shouldReduceMotion ? 1 : rawFrameOpacity;

  // 8: Subtle parallax effect to background without distorting artwork
  const rawParallaxY = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const smoothParallaxY = useSpring(rawParallaxY, { stiffness: 85, damping: 22 });
  const parallaxY = shouldReduceMotion ? 0 : smoothParallaxY;

  // 4: Central arch container fade-in and subtle upward glide
  const archVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // 5 & 6: Staggered reveal for lines of invitation text inside the arch
  const lineVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="baby"
      ref={sectionRef}
      className="relative min-h-screen py-6 sm:py-10 md:py-14 px-3 sm:px-6 flex items-center justify-center overflow-hidden w-full max-w-full bg-[#1A0206]"
    >
      {/* Ambient background extension using the artwork's warm aura */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 filter blur-2xl scale-110">
        <img src="/sec2_bg.jpg" alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0206] via-transparent to-[#1A0206] pointer-events-none" />

      {/* Radiant Gold Aura Glow Behind Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[80%] rounded-3xl bg-gradient-to-tr from-gold-600/25 via-turmeric-500/15 to-transparent blur-3xl pointer-events-none" />

      {/* 
        MAIN INVITATION ARTWORK CONTAINER
        - Full portrait composition of the uploaded image (576:1024 native aspect ratio)
        - Preserves complete red ornamental frame, central cream arch, baby Krishna, peacocks & lotuses
        - Scaled & positioned with responsive aspect ratio
        - Cinematic scroll-triggered scale & parallax
      */}
      <motion.div
        style={{
          scale,
          y: parallaxY,
          opacity: frameOpacity,
        }}
        className="relative w-full max-w-[430px] xs:max-w-[460px] sm:max-w-[500px] md:max-w-[540px] aspect-[576/1024] max-h-[94vh] rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-gold-500/50 overflow-hidden select-none bg-[#200308] z-10"
      >
        {/* Uploaded Background Image (Exact Artwork Unchanged) */}
        <img
          src="/sec2_bg.jpg"
          alt="Ear Piercing Ceremony Traditional Arch Invitation"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          loading="eager"
        />

        {/* 
          CENTRAL CREAM-COLORED ARCH CONTENT CANVAS
          Positioned strictly inside the cream arch (Y: ~11% to ~58% of card height),
          leaving the baby Krishna, yellow dhoti, lotus flowers and peacocks at the bottom
          completely unobstructed!
        */}
        <motion.div
          variants={archVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          className="absolute top-[10.5%] sm:top-[11%] left-[12%] right-[12%] h-[47%] flex flex-col items-center justify-between text-center z-10 px-2 sm:px-3 py-1 sm:py-2 select-text"
        >
          {/* 1. Divine Blessing Invocation */}
          <motion.div variants={lineVariants} className="w-full">
            <p className="font-tamil text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-bold text-[#831826] tracking-wider leading-tight">
              {language === 'ta' ? event.blessingTamil : event.blessingEnglish}
            </p>
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#9A2A38]/50 to-transparent mx-auto mt-0.5 sm:mt-1" />
          </motion.div>

          {/* 2. Invitation Heading inside the arch */}
          <motion.div variants={lineVariants} className="w-full">
            <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] uppercase font-bold tracking-widest text-[#9A2A38] block mb-0.5">
              {language === 'ta' ? 'மங்கள சுப நிகழ்வு' : 'Auspicious Celebration'}
            </span>
            <h3 className="font-tamil text-sm xs:text-base sm:text-xl md:text-2xl font-black text-[#580B17] leading-tight filter drop-shadow-[0_1px_1px_rgba(212,175,55,0.3)]">
              {language === 'ta' ? event.titleTamil : event.titleEnglish}
            </h3>
          </motion.div>

          {/* 3. Auspicious Invitation Badge */}
          <motion.div variants={lineVariants}>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#9A2A38]/40 bg-[#7B1123]/10 text-[#7B1123] font-bold text-[8px] xs:text-[9px] sm:text-[10.5px] tracking-wider">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#9A2A38] shrink-0" />
              <span>{language === 'ta' ? 'அழைப்பிதழ்' : 'Cordially Invite You'}</span>
            </div>
          </motion.div>

          {/* 4. Children's Names */}
          <motion.div variants={lineVariants} className="w-full">
            <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] text-[#8C1D2F] font-semibold block mb-0.5">
              {language === 'ta' ? child.titleTamil : child.titleEnglish}
            </span>
            <div className="py-0.5 sm:py-1 px-2 rounded-lg bg-gradient-to-r from-transparent via-[#7B1123]/10 to-transparent border-y border-[#9A2A38]/30">
              <p className="font-tamil font-black text-xs xs:text-sm sm:text-base md:text-lg text-[#4E0611] tracking-wide break-words">
                {language === 'ta' ? child.nameTamil : child.nameEnglish}
              </p>
            </div>
          </motion.div>

          {/* 5. Loving Parents / Hosts */}
          <motion.div variants={lineVariants} className="w-full">
            <span className="text-[7px] xs:text-[8px] sm:text-[9.5px] text-[#8C1D2F] font-medium block">
              {language === 'ta' ? 'அழைப்பின் மகிழ்வில்:' : 'Warmly Invited By:'}
            </span>
            <p className="font-tamil font-bold text-[9.5px] xs:text-[11px] sm:text-xs md:text-sm text-[#4E0611] leading-snug">
              {language === 'ta'
                ? `${parents.fatherTamil} & ${parents.motherTamil}`
                : `${parents.fatherEnglish} & ${parents.motherEnglish}`}
            </p>
          </motion.div>

          {/* 6. Date & Auspicious Muhurtham Timing */}
          <motion.div variants={lineVariants} className="w-full">
            <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-2 sm:px-2.5 py-0.5 rounded-md bg-[#6E0F1E]/8 text-[#6E0F1E] text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-semibold border border-[#9A2A38]/25 shadow-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#9A2A38] shrink-0" />
                <span>{language === 'ta' ? event.dateFormattedTamil : event.dateFormattedEnglish}</span>
              </div>
              <span className="text-[#9A2A38]/40 hidden xs:inline">•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#9A2A38] shrink-0" />
                <span>{language === 'ta' ? event.muhurthamTimeTamil : event.muhurthamTimeEnglish}</span>
              </div>
            </div>
          </motion.div>

          {/* 7. Venue */}
          <motion.div variants={lineVariants} className="w-full">
            <div className="inline-flex items-center justify-center gap-1 text-[7.5px] xs:text-[8.5px] sm:text-[10px] text-[#550816] font-bold">
              <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#9A2A38] shrink-0" />
              <span>
                {language === 'ta'
                  ? `${venue.nameTamil}, ${venue.addressTamil}, மதுரை`
                  : `${venue.nameEnglish}, ${venue.addressEnglish}, Madurai`}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

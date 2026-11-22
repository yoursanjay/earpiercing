import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Calendar, MapPin, Clock } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';
import { templeAudio } from '../utils/audioSynth';

interface CinematicOpeningProps {
  language: 'ta' | 'en';
  isOpened: boolean;
  onOpen: () => void;
}

export const CinematicOpening: React.FC<CinematicOpeningProps> = ({ language, isOpened, onOpen }) => {
  const handleOpenDoors = () => {
    templeAudio.playTempleBell(0.9);
    templeAudio.start();
    onOpen();
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-maroon-950">
      {/* Background: Mobile uses /mbg.webp, Desktop uses /mainbg.webp */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 767px)" srcSet="/mbg.webp" />
          <source media="(min-width: 768px)" srcSet="/mainbg.webp" />
          <img
            src="/mbg.webp"
            alt="Traditional Temple Celebration Background"
            className="w-full h-full object-cover object-center scale-105 animate-[floatSlow_12s_ease-in-out_infinite]"
          />
        </picture>
        {/* Cinematic Film Grading & Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/60 to-black/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-maroon-950/40 to-maroon-950/90" />
        
        {/* Morning Sun God-Rays Simulation */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[800px] h-[500px] sm:h-[700px] bg-gradient-to-b from-yellow-300/25 via-gold-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      </div>

      {/* Traditional Carved Temple Entrance Doors (Interactive 3D Gate) */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              pointerEvents: 'none',
              transition: { duration: 0.8, delay: 1.4 },
            }}
            className="fixed inset-0 z-50 flex perspective-1000 overflow-hidden"
          >
            {/* Left Door */}
            <motion.div
              initial={{ rotateY: 0 }}
              exit={{
                rotateY: -108,
                transition: { duration: 1.7, ease: [0.65, 0, 0.35, 1] },
              }}
              style={{ transformOrigin: 'left center' }}
              className="w-1/2 h-full bg-gradient-to-br from-[#1E0308] via-[#28050D] to-[#150205] border-r-2 border-gold-500/70 shadow-[25px_0_50px_rgba(0,0,0,0.95)] relative flex items-center justify-end pr-2 sm:pr-8 md:pr-12 select-none"
            >
              {/* Solid Teak Wood Planks Texture & Gold Pattern */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_2px,transparent_2px)] [background-size:24px_24px] sm:[background-size:28px_28px]" />

              {/* Ornate Door Frame Borders */}
              <div className="absolute inset-y-4 sm:inset-y-6 left-2 sm:left-6 right-1 sm:right-3 border-2 border-gold-500/40 rounded-lg pointer-events-none flex flex-col justify-between p-2 sm:p-3">
                <div className="flex justify-between items-center text-gold-400 text-[10px] sm:text-xs">
                  <span>✦</span>
                  <div className="h-[1px] flex-1 mx-1 sm:mx-2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
                  <span>✦</span>
                </div>
                <div className="flex justify-between items-center text-gold-400 text-[10px] sm:text-xs">
                  <span>✦</span>
                  <div className="h-[1px] flex-1 mx-1 sm:mx-2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
                  <span>✦</span>
                </div>
              </div>

              {/* Outer Left Antique Hinges */}
              <div className="absolute left-0.5 top-1/4 w-2 sm:w-3 h-12 sm:h-16 bg-gradient-to-r from-gold-600 to-gold-400 rounded-r shadow-md border-y border-gold-300" />
              <div className="absolute left-0.5 bottom-1/4 w-2 sm:w-3 h-12 sm:h-16 bg-gradient-to-r from-gold-600 to-gold-400 rounded-r shadow-md border-y border-gold-300" />

              {/* Left Brass Lion Door Knocker (சிம்ம முகம்) */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gold-200 via-gold-500 to-gold-800 p-1 sm:p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.9)] border border-gold-200/60 flex items-center justify-center">
                  <div className="w-11 h-11 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-full border border-gold-950 flex items-center justify-center bg-gradient-to-tr from-gold-700 to-gold-500 shadow-inner">
                    <span className="text-lg sm:text-3xl md:text-4xl filter drop-shadow">🦁</span>
                  </div>
                </div>
                {/* Heavy Gold Knocker Ring */}
                <div className="w-7 h-10 sm:w-11 sm:h-14 md:w-12 md:h-16 border-2 sm:border-4 border-gold-300 rounded-b-full -mt-1.5 sm:-mt-2 bg-gradient-to-b from-transparent to-gold-600/30 shadow-2xl" />
              </div>
            </motion.div>

            {/* Right Door */}
            <motion.div
              initial={{ rotateY: 0 }}
              exit={{
                rotateY: 108,
                transition: { duration: 1.7, ease: [0.65, 0, 0.35, 1] },
              }}
              style={{ transformOrigin: 'right center' }}
              className="w-1/2 h-full bg-gradient-to-bl from-[#1E0308] via-[#28050D] to-[#150205] border-l-2 border-gold-500/70 shadow-[-25px_0_50px_rgba(0,0,0,0.95)] relative flex items-center justify-start pl-2 sm:pl-8 md:pl-12 select-none"
            >
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_2px,transparent_2px)] [background-size:24px_24px] sm:[background-size:28px_28px]" />

              {/* Ornate Door Frame Borders */}
              <div className="absolute inset-y-4 sm:inset-y-6 left-1 sm:left-3 right-2 sm:right-6 border-2 border-gold-500/40 rounded-lg pointer-events-none flex flex-col justify-between p-2 sm:p-3">
                <div className="flex justify-between items-center text-gold-400 text-[10px] sm:text-xs">
                  <span>✦</span>
                  <div className="h-[1px] flex-1 mx-1 sm:mx-2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
                  <span>✦</span>
                </div>
                <div className="flex justify-between items-center text-gold-400 text-[10px] sm:text-xs">
                  <span>✦</span>
                  <div className="h-[1px] flex-1 mx-1 sm:mx-2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
                  <span>✦</span>
                </div>
              </div>

              {/* Outer Right Antique Hinges */}
              <div className="absolute right-0.5 top-1/4 w-2 sm:w-3 h-12 sm:h-16 bg-gradient-to-l from-gold-600 to-gold-400 rounded-l shadow-md border-y border-gold-300" />
              <div className="absolute right-0.5 bottom-1/4 w-2 sm:w-3 h-12 sm:h-16 bg-gradient-to-l from-gold-600 to-gold-400 rounded-l shadow-md border-y border-gold-300" />

              {/* Right Brass Lion Door Knocker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gold-200 via-gold-500 to-gold-800 p-1 sm:p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.9)] border border-gold-200/60 flex items-center justify-center">
                  <div className="w-11 h-11 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-full border border-gold-950 flex items-center justify-center bg-gradient-to-tr from-gold-700 to-gold-500 shadow-inner">
                    <span className="text-lg sm:text-3xl md:text-4xl filter drop-shadow">🦁</span>
                  </div>
                </div>
                <div className="w-7 h-10 sm:w-11 sm:h-14 md:w-12 md:h-16 border-2 sm:border-4 border-gold-300 rounded-b-full -mt-1.5 sm:-mt-2 bg-gradient-to-b from-transparent to-gold-600/30 shadow-2xl" />
              </div>
            </motion.div>

            {/* Center Sacred Gate Seal & "OPEN INVITATION" Call to Action Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 1.15,
                opacity: 0,
                transition: { duration: 0.8, ease: 'easeOut' },
              }}
              className="absolute inset-0 z-30 flex flex-col items-center justify-center px-3 sm:px-4 pointer-events-none"
            >
              <div className="relative royal-glass p-5 sm:p-8 md:p-9 rounded-2xl sm:rounded-3xl max-w-[92vw] sm:max-w-md md:max-w-lg w-full border-2 border-gold-400/60 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-center pointer-events-auto overflow-hidden bg-gradient-to-b from-[#33040C] via-[#240308] to-[#1A0105]">
                {/* Radial Gold Ambient Glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-gold-400/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-gold-600/15 rounded-full blur-2xl pointer-events-none" />

                {/* Pillaiyar Suzhi (உ) Crest */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gold-400/50 flex items-center justify-center bg-gold-500/15 mx-auto mb-2 sm:mb-3 shadow-lg">
                  <span className="text-gold-300 font-tamil font-bold text-base sm:text-lg">உ</span>
                </div>

                {/* Kula Deivam Blessing Badge */}
                <div className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3 tracking-widest">
                  {language === 'ta' ? invitationConfig.event.blessingTamil : invitationConfig.event.blessingEnglish}
                </div>

                {/* Ceremony Title */}
                <h2 className="font-tamil text-lg sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-1.5 sm:mb-2 leading-relaxed gold-text-glow break-words">
                  {language === 'ta' ? invitationConfig.event.titleTamil : invitationConfig.event.titleEnglish}
                </h2>

                {/* Child Name Highlight */}
                <div className="my-2 sm:my-3 py-1.5 px-3 sm:px-4 rounded-xl bg-maroon-950/70 border border-gold-400/30">
                  <span className="font-tamil text-sm sm:text-base md:text-lg font-bold text-gold-200 break-words">
                    {language === 'ta' ? invitationConfig.child.nameTamil : invitationConfig.child.nameEnglish}
                  </span>
                </div>

                {/* Date & Muhurtham Preview */}
                <p className="text-[10px] sm:text-xs text-gold-300/90 font-tamil mb-4 sm:mb-6">
                  {language === 'ta' ? invitationConfig.event.dateFormattedTamil : invitationConfig.event.dateFormattedEnglish} • {language === 'ta' ? invitationConfig.event.muhurthamTimeTamil : invitationConfig.event.muhurthamTimeEnglish}
                </p>

                {/* Prominent OPEN INVITATION Button */}
                <button
                  onClick={handleOpenDoors}
                  className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 hover:from-gold-500 hover:via-gold-300 hover:to-gold-500 text-maroon-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_8px_30px_rgba(212,175,55,0.45)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-maroon-950 group-hover:rotate-12 transition-transform shrink-0" />
                  <span className="tracking-widest">
                    {language === 'ta' ? 'அழைப்பிதழைத் திறக்க' : 'OPEN INVITATION'}
                  </span>
                </button>

                <p className="text-[10px] sm:text-[11px] text-ivory-200/70 mt-2.5 sm:mt-3 font-serif italic">
                  {language === 'ta'
                    ? 'மங்கள திருவிழா அழைப்பிதழைத் திறந்து ஆசீர்வதிக்கவும்'
                    : 'Tap to unseal the sacred temple invitation'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Reveal Content (Revealed after opening) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Ceremony Details & Invitation Column (7 cols on Desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* Sacred Pillaiyar Suzhi & Kula Deivam Blessing */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col items-center lg:items-start mb-4 sm:mb-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-400/40 flex items-center justify-center bg-gold-500/10 mb-2 sm:mb-3 shadow-lg shadow-gold-500/10">
                <span className="font-tamil font-bold text-lg sm:text-xl text-gold-300">உ</span>
              </div>
              <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full royal-glass border border-gold-400/30 text-gold-300 text-[11px] sm:text-sm font-semibold tracking-widest shadow-md">
                {invitationConfig.event.blessingTamil}
              </div>
              <p className="text-[10px] sm:text-xs text-gold-300/80 mt-1 font-serif italic">
                {invitationConfig.event.kulaDeivamTamil}
              </p>
            </motion.div>

            {/* Ceremony Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isOpened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 w-full"
            >
              <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold-400 font-semibold">
                {language === 'ta' ? 'மங்களகரமான சுபயோக நன்னாளில்' : 'In the Auspicious Presence of Divine Grace'}
              </span>
              <h1 className="font-tamil text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 leading-tight gold-text-glow break-words">
                {language === 'ta' ? invitationConfig.event.titleTamil : invitationConfig.event.titleEnglish}
              </h1>
              <p className="font-serif text-xs sm:text-base md:text-lg text-ivory-200/90 italic max-w-xl mx-auto lg:mx-0">
                {language === 'ta' ? invitationConfig.event.subtitleTamil : invitationConfig.event.subtitleEnglish}
              </p>
            </motion.div>

            {/* MOBILE ONLY: Baby Layer (public/layer.webp) Sliding in from side on screens < lg */}
            <motion.div
              initial={{ x: 80, opacity: 0, scale: 0.9 }}
              animate={isOpened ? { x: 0, opacity: 1, scale: 1 } : { x: 80, opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden relative my-3 sm:my-5 w-full flex justify-center"
            >
              <div className="relative max-w-[240px] xs:max-w-[280px] sm:max-w-[340px]">
                {/* Radiant Golden Backlight Halo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/35 via-turmeric-500/20 to-transparent rounded-full blur-2xl transform scale-95 pointer-events-none" />
                <img
                  src="/layer.webp"
                  alt={invitationConfig.child.nameEnglish}
                  className="relative z-10 w-full h-auto max-h-[260px] xs:max-h-[300px] sm:max-h-[380px] object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] animate-[floatSlow_7s_ease-in-out_infinite]"
                />
              </div>
            </motion.div>

            {/* Child Spotlight Name Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="relative my-2 sm:my-4 p-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 shadow-2xl shadow-gold-500/25 max-w-[92vw] sm:max-w-lg w-full"
            >
              <div className="royal-glass rounded-[20px] sm:rounded-[22px] px-4 py-4 sm:px-6 sm:py-7 border border-gold-300/40 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-24 h-24 bg-gold-400/10 rounded-full blur-xl pointer-events-none" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold-300 font-semibold block mb-1">
                  {language === 'ta' ? invitationConfig.child.titleTamil : invitationConfig.child.titleEnglish}
                </span>
                <h2 className="font-tamil text-xl sm:text-3xl md:text-4xl font-extrabold text-gold-100 gold-text-glow mb-2 break-words">
                  {language === 'ta' ? invitationConfig.child.nameTamil : invitationConfig.child.nameEnglish}
                </h2>
                <div className="flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-ivory-200/80">
                  <span className="w-6 sm:w-8 h-[1px] bg-gold-400/50" />
                  <span className="text-gold-300 font-medium">
                    {language === 'ta' ? invitationConfig.child.goldOrnamentTamil : invitationConfig.child.goldOrnamentEnglish}
                  </span>
                  <span className="w-6 sm:w-8 h-[1px] bg-gold-400/50" />
                </div>
              </div>
            </motion.div>

            {/* Quick Date, Muhurtham & Venue Highlights Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-[92vw] sm:max-w-2xl mt-4 sm:mt-6 text-left"
            >
              {/* Date Card */}
              <div className="royal-glass rounded-xl p-3 sm:p-3.5 border border-gold-500/25 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-ivory-200/60 uppercase tracking-wider">
                    {language === 'ta' ? 'சுப நாள்' : 'Date'}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gold-200">
                    {language === 'ta' ? invitationConfig.event.dateFormattedTamil : invitationConfig.event.dateFormattedEnglish}
                  </p>
                </div>
              </div>

              {/* Muhurtham Card */}
              <div className="royal-glass rounded-xl p-3 sm:p-3.5 border border-gold-500/25 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-ivory-200/60 uppercase tracking-wider">
                    {language === 'ta' ? 'முகூர்த்தம்' : 'Muhurtham'}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gold-200">
                    {language === 'ta' ? invitationConfig.event.muhurthamTimeTamil : invitationConfig.event.muhurthamTimeEnglish}
                  </p>
                </div>
              </div>

              {/* Venue Card */}
              <div className="royal-glass rounded-xl p-3 sm:p-3.5 border border-gold-500/25 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-ivory-200/60 uppercase tracking-wider">
                    {language === 'ta' ? 'இருப்பிடம்' : 'Venue'}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gold-200 truncate max-w-[150px]">
                    {language === 'ta' ? invitationConfig.venue.cityTamil : invitationConfig.venue.cityEnglish}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Animated Scroll Down Indicator */}
            <motion.a
              href="#baby"
              initial={{ opacity: 0 }}
              animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-8 sm:mt-10 flex flex-col items-center lg:items-start gap-1.5 sm:gap-2 group cursor-pointer"
            >
              <span className="text-[10px] sm:text-[11px] text-gold-300/80 tracking-widest uppercase group-hover:text-gold-200 transition-colors">
                {language === 'ta' ? 'தொடர்ந்து வாசிக்க கீழே செல்லவும்' : 'Scroll to Explore Celebration'}
              </span>
              <div className="w-7 h-11 sm:w-8 sm:h-12 rounded-full border-2 border-gold-400/40 flex items-start justify-center p-1 sm:p-1.5 shadow-lg group-hover:border-gold-300 transition-colors">
                <motion.div
                  animate={{ y: [0, 14, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  className="w-1.5 h-2.5 rounded-full bg-gold-300 shadow-sm"
                />
              </div>
              <ChevronDown className="w-4 h-4 text-gold-400 animate-bounce -mt-1" />
            </motion.a>
          </div>

          {/* DESKTOP ONLY: Baby Layer (public/layer.webp) Sliding in from side on screens >= lg (5 cols) */}
          <motion.div
            initial={{ x: 140, opacity: 0, scale: 0.9 }}
            animate={isOpened ? { x: 0, opacity: 1, scale: 1 } : { x: 140, opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end items-center relative"
          >
            <div className="relative max-w-[440px] xl:max-w-[500px] w-full">
              {/* Radiant Temple Golden Halo */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-gold-500/35 via-turmeric-500/20 to-transparent rounded-full blur-3xl transform scale-95 pointer-events-none" />
              <img
                src="/layer.webp"
                alt={invitationConfig.child.nameEnglish}
                className="relative z-10 w-full h-auto max-h-[540px] object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] animate-[floatSlow_8s_ease-in-out_infinite]"
              />

              {/* Floating Auspicious Badge at Baby's Base */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full royal-glass border border-gold-400 text-gold-200 text-xs font-bold whitespace-nowrap shadow-xl flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{language === 'ta' ? invitationConfig.child.goldOrnamentTamil : invitationConfig.child.goldOrnamentEnglish}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Traditional Brass Kuthuvilakku Lamps at Base */}
      <div className="absolute bottom-4 left-4 sm:left-6 hidden md:flex flex-col items-center pointer-events-none opacity-85">
        <div className="w-3.5 h-5 sm:w-4 sm:h-6 bg-gradient-to-t from-orange-500 to-yellow-200 rounded-full blur-[1px] animate-flame" />
        <div className="w-7 sm:w-8 h-2 bg-gold-500 rounded-full -mt-1" />
        <div className="w-2 h-16 sm:h-20 bg-gradient-to-b from-gold-400 to-gold-700" />
        <div className="w-10 sm:w-12 h-4 bg-gold-600 rounded-t-full" />
      </div>

      <div className="absolute bottom-4 right-4 sm:right-6 hidden md:flex flex-col items-center pointer-events-none opacity-85">
        <div className="w-3.5 h-5 sm:w-4 sm:h-6 bg-gradient-to-t from-orange-500 to-yellow-200 rounded-full blur-[1px] animate-flame" />
        <div className="w-7 sm:w-8 h-2 bg-gold-500 rounded-full -mt-1" />
        <div className="w-2 h-16 sm:h-20 bg-gradient-to-b from-gold-400 to-gold-700" />
        <div className="w-10 sm:w-12 h-4 bg-gold-600 rounded-t-full" />
      </div>
    </section>
  );
};

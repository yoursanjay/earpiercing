import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { CinematicOpening } from './components/CinematicOpening';
import { BabyIntroduction } from './components/BabyIntroduction';
import { FamilyStory } from './components/FamilyStory';
import { CeremonyDetails } from './components/CeremonyDetails';
import { TempleExperience } from './components/TempleExperience';
import { EventCountdown } from './components/EventCountdown';
import { VenueSection } from './components/VenueSection';
import { FamilyInvitation } from './components/FamilyInvitation';
import { FinalCelebration } from './components/FinalCelebration';
import { PetalShower } from './components/PetalShower';
import { MusicController } from './components/MusicController';

export function App() {
  const [language, setLanguage] = useState<'ta' | 'en'>('ta');
  const [isOpened, setIsOpened] = useState(false);

  // Strictly control body scroll: Not scrollable until "OPEN INVITATION" is clicked
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isOpened]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ta' ? 'en' : 'ta'));
  };

  return (
    <div
      className={`relative bg-[#1A0206] text-ivory-100 selection:bg-gold-500 selection:text-maroon-950 font-sans w-full max-w-full ${
        !isOpened ? 'h-screen overflow-hidden' : 'min-h-screen overflow-x-hidden'
      }`}
    >
      {/* Global Background: /mbg.webp on mobile, /mainbg.webp on desktop with Royal Velvet Scrim */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <picture>
          <source media="(max-width: 767px)" srcSet="/mbg.webp" />
          <source media="(min-width: 768px)" srcSet="/mainbg.webp" />
          <img
            src="/mbg.webp"
            alt="Temple Celebration Background"
            className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C0207]/90 via-[#220308]/85 to-[#150104]/95" />
      </div>

      {/* Interactive Celebratory Floating Petals Canvas */}
      <PetalShower interactive={true} />

      {/* Floating Traditional Temple Music & Bell Controller (Shown ONLY AFTER OPENING) */}
      <AnimatePresence>
        {isOpened && <MusicController language={language} />}
      </AnimatePresence>

      {/* Top Royal Navigation Bar (Shown ONLY AFTER OPENING) */}
      <AnimatePresence>
        {isOpened && <Navbar language={language} onToggleLanguage={toggleLanguage} />}
      </AnimatePresence>

      {/* Main Experiential Journey */}
      <main className="relative z-10 w-full max-w-full">
        {/* 1. Cinematic Opening (Temple Entrance, 3D Gate Open, Blessing Reveal) */}
        <CinematicOpening
          language={language}
          isOpened={isOpened}
          onOpen={() => setIsOpened(true)}
        />

        {/* Below Content & Scrollable Sections (Rendered ONLY AFTER OPENING) */}
        {isOpened && (
          <>
            {/* 2. Baby Introduction (Royal Portrait, Lineage & Quotes) */}
            <BabyIntroduction language={language} />

            {/* 3. Traditional Story & Cultural Significance (Karna Vedha, Thai Maaman Honor) */}
            <FamilyStory language={language} />

            {/* 4. Ceremony Details & Muhurtham Schedule (Muhurtham, Virundhu, Calendar) */}
            <CeremonyDetails language={language} />

            {/* 5. Temple Experience & Visual Gallery (Brass Lamps, Gold Ornaments, Sanctum) */}
            <TempleExperience language={language} />

            {/* 6. Live Event Countdown (Days, Hours, Minutes, Seconds) */}
            <EventCountdown language={language} />

            {/* 7. Venue & Google Maps Navigation */}
            <VenueSection language={language} />

            {/* 8. Family Invitation (Parents, Grandparents, Uncles, Elders) */}
            <FamilyInvitation language={language} />

            {/* 9. Final Celebration & RSVP (WhatsApp RSVP with Guest Count, Share, Nandri) */}
            <FinalCelebration language={language} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Utensils, Star, Share2, Play, Pause, Bell, Music } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';
import { templeAudio } from '../utils/audioSynth';

interface CeremonyDetailsProps {
  language: 'ta' | 'en';
}

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = ({ language }) => {
  const { event, venue } = invitationConfig;
  const [isMusicPlaying, setIsMusicPlaying] = useState(templeAudio.getIsPlaying());

  useEffect(() => {
    // Keep playback state synced with global audio manager
    const unsubscribe = templeAudio.subscribe((playing) => {
      setIsMusicPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  // Generate Google Calendar Link
  const startDate = new Date(event.dateISO);
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // 4 hours event

  const formatGoogleDate = (d: Date) => {
    return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.titleEnglish + ' - ' + invitationConfig.child.nameEnglish
  )}&dates=${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}&details=${encodeURIComponent(
    event.subtitleEnglish + '\nMuhurtham: ' + event.muhurthamTimeEnglish + '\nLunch: ' + event.lunchTimeEnglish
  )}&location=${encodeURIComponent(venue.mandapamEnglish + ', ' + venue.addressEnglish + ', ' + venue.cityEnglish)}`;

  // Download .ics file for Apple Calendar / Outlook
  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Tamil Traditional Invitation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${event.titleEnglish} - ${invitationConfig.child.nameEnglish}`,
      `DESCRIPTION:${event.subtitleEnglish}\\nMuhurtham: ${event.muhurthamTimeEnglish}\\nLunch: ${event.lunchTimeEnglish}`,
      `LOCATION:${venue.mandapamEnglish}, ${venue.addressEnglish}, ${venue.cityEnglish}`,
      `DTSTART:${formatGoogleDate(startDate)}`,
      `DTEND:${formatGoogleDate(endDate)}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'kadhukuthu-invitation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="ceremony" className="relative py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#25040B]/90 overflow-hidden w-full max-w-full">
      {/* Decorative Ornate Borders */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full royal-glass border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3">
            <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400/40 shrink-0" />
            <span>{language === 'ta' ? 'நிகழ்ச்சி நிரல்' : 'Ceremony Schedule'}</span>
          </div>
          <h2 className="font-tamil text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-2 sm:mb-3 break-words">
            {language === 'ta' ? 'சுப முகூர்த்த நிகழ்வுகள்' : 'Auspicious Muhurtham & Events'}
          </h2>
          <p className="text-xs sm:text-sm text-ivory-200/80 font-serif italic">
            {language === 'ta'
              ? 'சுபயோக சுபதினத்தில் நடைபெறும் மங்கள நிகழ்ச்சிகள்'
              : 'Detailed schedule of sacred rituals and the grand celebration feast'}
          </p>
        </div>

        {/* Grand Ceremonial Scroll Card */}
        <div className="relative p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-gold-400 via-gold-600 to-gold-800 shadow-2xl shadow-black/80 w-full">
          <div className="royal-glass rounded-[20px] sm:rounded-[22px] p-4 sm:p-8 md:p-12 border border-gold-300/40 relative overflow-hidden w-full">
            {/* Top Ornate Temple Arch Motif */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-8 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gold-400/50 flex items-center justify-center bg-gold-500/10 shadow-lg">
                  <span className="text-gold-300 font-tamil font-bold text-xs sm:text-sm">சுப</span>
                </div>
                <span className="w-8 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
              </div>
            </div>

            {/* Event Name & Tamil Year */}
            <div className="text-center mb-6 sm:mb-10 px-2">
              <span className="text-[11px] sm:text-xs font-semibold text-gold-400 tracking-widest uppercase block mb-1">
                {event.tamilYearMonth}
              </span>
              <h3 className="font-tamil text-xl sm:text-3xl md:text-4xl font-extrabold text-gold-100 gold-text-glow mb-1.5 sm:mb-2 break-words">
                {language === 'ta' ? event.titleTamil : event.titleEnglish}
              </h3>
              <p className="text-xs sm:text-sm text-gold-300/90 font-tamil">
                {event.nakshatramTamil} • {event.dayOfWeekTamil}
              </p>
            </div>

            {/* In-Section Music Player (Stop & Play below this section) */}
            <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-maroon-950 via-[#36050F] to-maroon-950 border-2 border-gold-400/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-200 p-0.5 shadow-lg shrink-0">
                  <div className="w-full h-full rounded-[10px] sm:rounded-2xl bg-maroon-950 flex items-center justify-center text-gold-300">
                    <Music className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400">
                      {language === 'ta' ? 'மங்கள இசைப் பெட்டி' : 'Ceremonial Music'}
                    </span>
                    {isMusicPlaying && (
                      <span className="flex items-center gap-1 text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        {language === 'ta' ? 'ஒலிக்கிறது' : 'Playing'}
                      </span>
                    )}
                  </div>
                  <h5 className="font-tamil font-bold text-xs sm:text-base text-gold-100 mt-0.5">
                    {language === 'ta' ? 'பாரம்பரிய நாதஸ்வர மங்கள இசை' : 'Traditional Nadaswaram & Thavil'}
                  </h5>
                  <p className="text-[10px] sm:text-[11px] text-ivory-200/70 font-mono">
                    path: /music.mpeg
                  </p>
                </div>
              </div>

              {/* Stop / Play Audio Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <button
                  onClick={() => templeAudio.toggle()}
                  className={`flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 ${
                    isMusicPlaying
                      ? 'bg-gradient-to-r from-red-700 to-maroon-800 text-gold-100 border border-gold-400/50 hover:bg-maroon-700'
                      : 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-maroon-950 hover:shadow-gold-500/40'
                  }`}
                >
                  {isMusicPlaying ? (
                    <>
                      <Pause className="w-4 h-4 shrink-0" />
                      <span>{language === 'ta' ? 'இசையை நிறுத்து (Pause)' : 'Pause Audio'}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current shrink-0" />
                      <span>{language === 'ta' ? 'இசையை இயக்கு (Play)' : 'Play Audio'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => templeAudio.playTempleBell(0.85)}
                  title={language === 'ta' ? 'கோயில் மணி ஒலிக்க' : 'Ring Auspicious Bell'}
                  className="p-2.5 rounded-xl royal-glass border border-gold-400/40 text-gold-300 hover:text-gold-100 hover:border-gold-300 transition-all flex items-center justify-center shrink-0"
                >
                  <Bell className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Events Timeline / Key Moments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8 w-full">
              {/* Card 1: Auspicious Muhurtham Time */}
              <div className="royal-card rounded-2xl p-4 sm:p-6 border border-gold-500/30 flex items-start gap-3 sm:gap-4 w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-300 shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider block">
                    {language === 'ta' ? 'சுப முகூர்த்த நேரம்' : 'Auspicious Muhurtham'}
                  </span>
                  <h4 className="font-tamil text-base sm:text-xl font-bold text-gold-100 mt-0.5 break-words">
                    {language === 'ta' ? event.muhurthamTimeTamil : event.muhurthamTimeEnglish}
                  </h4>
                  <p className="text-xs text-gold-300 font-semibold mt-1">
                    {language === 'ta' ? event.muhurthamLagnamTamil : event.muhurthamLagnamEnglish}
                  </p>
                  <p className="text-xs text-ivory-200/80 mt-2 font-serif leading-relaxed">
                    {language === 'ta'
                      ? 'தாய்மாமன் மடியில் அமர்ந்து மங்கள பொற்கடுக்கன் அணிவிக்கும் நன்னாழிகை.'
                      : "The sacred moment when pure gold earrings grace the child's ears on the maternal uncle's lap."}
                  </p>
                </div>
              </div>

              {/* Card 2: Festive Feast (Virundhu) */}
              <div className="royal-card rounded-2xl p-4 sm:p-6 border border-gold-500/30 flex items-start gap-3 sm:gap-4 w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-turmeric-500/20 border border-turmeric-400/50 flex items-center justify-center text-turmeric-300 shrink-0">
                  <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider block">
                    {language === 'ta' ? 'மங்கள விருந்து உபசரிப்பு' : 'Celebratory Feast (Virundhu)'}
                  </span>
                  <h4 className="font-tamil text-base sm:text-xl font-bold text-gold-100 mt-0.5 break-words">
                    {language === 'ta' ? event.lunchTimeTamil : event.lunchTimeEnglish}
                  </h4>
                  <p className="text-xs text-turmeric-300 font-semibold mt-1">
                    {language === 'ta' ? event.feastDetailsTamil : event.feastDetailsEnglish}
                  </p>
                  <p className="text-xs text-ivory-200/80 mt-2 font-serif leading-relaxed">
                    {language === 'ta'
                      ? 'பாயாசம், வடை, நெய் சாம்பார் உள்ளிட்ட அறுசுவை வாழை இலை விருந்து.'
                      : 'Traditional South Indian full-course banquet served on fresh plantain leaves.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Venue Location Banner */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-maroon-900/60 border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 w-full">
              <div className="flex items-center gap-3 text-center sm:text-left min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h5 className="font-tamil font-bold text-xs sm:text-base text-gold-100 truncate">
                    {language === 'ta' ? venue.mandapamTamil : venue.mandapamEnglish}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-ivory-200/75 truncate">
                    {language === 'ta' ? `${venue.nameTamil}, ${venue.cityTamil}` : `${venue.nameEnglish}, ${venue.cityEnglish}`}
                  </p>
                </div>
              </div>

              {/* Add to Calendar Action Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={googleCalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/40 text-gold-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all hover:scale-105"
                >
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>Google Cal</span>
                </a>
                <button
                  onClick={handleDownloadICS}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-xl bg-maroon-950 hover:bg-maroon-900 border border-gold-500/30 text-gold-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all hover:scale-105"
                  title="Download iCal for Apple Calendar / Outlook"
                >
                  <Share2 className="w-3.5 h-3.5 shrink-0" />
                  <span>iCal (.ics)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

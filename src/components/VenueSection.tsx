import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Compass, Building } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

interface VenueSectionProps {
  language: 'ta' | 'en';
}

export const VenueSection: React.FC<VenueSectionProps> = ({ language }) => {
  const { venue } = invitationConfig;

  return (
    <section id="venue" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#23040A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-glass border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'ta' ? 'விழா நடைபெறும் இடம்' : 'Ceremony Venue & Location'}</span>
          </div>
          <h2 className="font-tamil text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-3">
            {language === 'ta' ? 'இருப்பிடம் & வழித்தடம்' : 'Venue & Easy Directions'}
          </h2>
          <p className="text-xs sm:text-sm text-ivory-200/80 font-serif italic">
            {language === 'ta'
              ? 'எங்கள் இல்ல விழா நடைபெறும் திருக்கோயில் மண்டபத்திற்கு நல்வரவு'
              : 'Google Maps navigation and address details to help you reach comfortably'}
          </p>
        </div>

        {/* Venue Info & Maps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Venue Details Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between royal-card rounded-3xl p-6 sm:p-8 border border-gold-400/40 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-6">
              {/* Mandapam / Temple Title */}
              <div>
                <div className="flex items-center gap-2 text-gold-400 text-xs uppercase font-bold tracking-wider mb-2">
                  <Building className="w-4 h-4" />
                  <span>{language === 'ta' ? 'திருக்கோயில் வளாகம்' : 'Temple Mandapam'}</span>
                </div>
                <h3 className="font-tamil text-xl sm:text-2xl font-extrabold text-gold-100 gold-text-glow leading-snug">
                  {language === 'ta' ? venue.mandapamTamil : venue.mandapamEnglish}
                </h3>
                <p className="text-sm text-gold-300 font-tamil font-semibold mt-1">
                  {language === 'ta' ? venue.nameTamil : venue.nameEnglish}
                </p>
              </div>

              {/* Complete Address */}
              <div className="p-4 rounded-xl bg-maroon-950/70 border-l-2 border-gold-400 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-gold-400/80 font-semibold block">
                  {language === 'ta' ? 'முழு முகவரி:' : 'Complete Address:'}
                </span>
                <p className="font-tamil text-xs sm:text-sm text-ivory-100 font-medium leading-relaxed">
                  {language === 'ta' ? venue.addressTamil : venue.addressEnglish}
                </p>
                <p className="font-tamil text-xs sm:text-sm text-gold-200 font-bold">
                  {language === 'ta' ? venue.cityTamil : venue.cityEnglish} - {venue.pincode}
                </p>
              </div>

              {/* Landmark Guidance */}
              <div className="flex items-start gap-3 text-xs text-ivory-200/85">
                <Compass className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gold-300">
                    {language === 'ta' ? 'அடையாளம்: ' : 'Landmark: '}
                  </span>
                  <span>{language === 'ta' ? venue.landmarkTamil : venue.landmarkEnglish}</span>
                </div>
              </div>

              {/* Contact Assistance */}
              <div className="flex items-center gap-3 text-xs text-ivory-200/85 pt-1">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div>
                  <span className="text-gold-300 font-bold">
                    {language === 'ta' ? 'தொடர்புக்கு: ' : 'Contact: '}
                  </span>
                  <a
                    href={`tel:${venue.contactPhone}`}
                    className="text-gold-200 hover:text-gold-100 font-semibold underline ml-1"
                  >
                    {venue.contactPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* GET DIRECTIONS Button */}
            <div className="pt-8">
              <a
                href={venue.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-maroon-950 font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-gold-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 text-maroon-950 group-hover:scale-110 transition-transform" />
                <span>{language === 'ta' ? 'வழித்தடம் பெறுக (GET DIRECTIONS)' : 'GET DIRECTIONS ON GOOGLE MAPS'}</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Google Maps Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-gold-400/40 shadow-2xl relative min-h-[360px] lg:min-h-full"
          >
            <iframe
              src={venue.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ceremony Venue Location Map"
              className="w-full h-full filter saturate-125 contrast-105"
            />
            {/* Overlay hint */}
            <div className="absolute bottom-3 right-3 royal-glass px-3 py-1.5 rounded-lg border border-gold-400/30 text-[11px] text-gold-300 pointer-events-none hidden sm:block">
              📍 {language === 'ta' ? venue.cityTamil : venue.cityEnglish}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

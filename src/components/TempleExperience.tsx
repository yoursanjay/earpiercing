import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Image as ImageIcon } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

interface TempleExperienceProps {
  language: 'ta' | 'en';
}

export const TempleExperience: React.FC<TempleExperienceProps> = ({ language }) => {
  const { gallery } = invitationConfig;
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = ['All', 'Tradition', 'Jewellery', 'Sanctum', 'Feast'];

  const filteredGallery =
    activeFilter === 'All'
      ? gallery
      : gallery.filter((item) => item.tag.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1F0207] overflow-hidden">
      {/* Ambient Lighting & Temple Column Glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#25040B] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#1A0105] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-glass border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'ta' ? 'திருக்கோயில் சூழல் & மங்கள காட்சியகம்' : 'Temple Sanctum & Visual Journey'}</span>
          </div>
          <h2 className="font-tamil text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-3">
            {language === 'ta' ? 'மங்கல திருக்கோயில் அனுபவம்' : 'The Sacred Temple Experience'}
          </h2>
          <p className="text-xs sm:text-sm text-ivory-200/80 font-serif italic">
            {language === 'ta'
              ? 'சுடர்விடும் திருவிளக்குகள், நறுமண மல்லிகை மாலைகள் மற்றும் தூய பொன் நகைகளின் மங்கள தரிசனம்'
              : 'Glimpse the divine ambience of glowing brass lamps, fragrant jasmines, and consecrated gold adornments'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-maroon-950 shadow-lg shadow-gold-500/20 scale-105'
                  : 'royal-glass text-gold-300 hover:text-gold-100 hover:border-gold-400/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item.url)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border border-gold-500/30 bg-maroon-950 shadow-xl aspect-[4/3] hover:border-gold-400 transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={item.url}
                alt={item.captionEnglish}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag Pill */}
              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full royal-glass border border-gold-400/30 text-[10px] text-gold-300 uppercase font-bold tracking-wider">
                {item.tag}
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 inset-x-4">
                <p className="font-tamil font-bold text-sm text-gold-100 group-hover:text-gold-300 transition-colors">
                  {language === 'ta' ? item.captionTamil : item.captionEnglish}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-ivory-200/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-3.5 h-3.5 text-gold-400" />
                  <span>{language === 'ta' ? 'பெரிதாக்க கிளிக் செய்க' : 'Click to preview'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border-2 border-gold-400 shadow-2xl">
            <img src={selectedImage} alt="Preview" className="w-full h-full object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full royal-glass border border-gold-400 text-gold-200 flex items-center justify-center text-lg font-bold hover:scale-110"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

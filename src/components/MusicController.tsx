import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Bell } from 'lucide-react';
import { templeAudio } from '../utils/audioSynth';

interface MusicControllerProps {
  language: 'ta' | 'en';
}

export const MusicController: React.FC<MusicControllerProps> = ({ language }) => {
  const [isPlaying, setIsPlaying] = useState(templeAudio.getIsPlaying());
  const [volume, setVolume] = useState(templeAudio.getVolume());
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Subscribe to global audio playback state
    const unsubscribe = templeAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });

    // Brief welcoming tooltip after opening
    setShowTooltip(true);
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  const handleToggle = () => {
    setShowTooltip(false);
    templeAudio.toggle();
  };

  const handleRingBell = (e: React.MouseEvent) => {
    e.stopPropagation();
    templeAudio.playTempleBell(0.85);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    templeAudio.setVolume(val);
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0, opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 select-none"
    >
      {/* Floating Guidance Tooltip */}
      {showTooltip && (
        <div 
          onClick={handleToggle}
          className="cursor-pointer max-w-[200px] sm:max-w-[240px] px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl royal-glass border border-gold-400/50 shadow-2xl animate-bounce mb-1 flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-gold-200"
        >
          <span className="text-sm sm:text-base shrink-0">🪘</span>
          <div>
            <p className="font-semibold text-gold-300">
              {isPlaying
                ? (language === 'ta' ? 'மங்கள இசை ஒலிக்கிறது' : 'Ceremony Music Playing')
                : (language === 'ta' ? 'மங்கள இசை கேட்க' : 'Play Ceremony Music')}
            </p>
            <p className="text-[9px] sm:text-[10px] text-ivory-200/80">
              {language === 'ta' ? 'நிறுத்த அல்லது இசைக்க தட்டவும்' : 'Tap to pause or resume audio'}
            </p>
          </div>
        </div>
      )}

      {/* Main Music Control Pill */}
      <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full royal-glass border border-gold-500/40 shadow-2xl backdrop-blur-md">
        {/* Ring Temple Bell Action Button */}
        <button
          onClick={handleRingBell}
          title={language === 'ta' ? 'கோயில் மணி ஒலிக்க' : 'Ring Auspicious Temple Bell'}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold-500/15 hover:bg-gold-500/30 border border-gold-400/40 flex items-center justify-center text-gold-300 hover:text-gold-100 transition-all transform active:scale-90 shrink-0"
        >
          <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
        </button>

        {/* Volume slider (visible on desktop when playing) */}
        {isPlaying && (
          <div className="hidden sm:flex items-center px-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1.5 bg-maroon-900 rounded-lg appearance-none cursor-pointer accent-gold-500"
              title="Volume"
            />
          </div>
        )}

        {/* Play / Pause Toggle Button */}
        <button
          onClick={handleToggle}
          className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full font-medium text-xs tracking-wider transition-all duration-300 shadow-md ${
            isPlaying
              ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-maroon-950 font-bold shadow-gold-500/30'
              : 'bg-maroon-900/90 hover:bg-maroon-800 text-gold-300 hover:text-gold-100 border border-gold-500/30'
          }`}
        >
          {isPlaying ? (
            <>
              {/* Soundwave animation */}
              <div className="flex items-end gap-0.5 h-3 sm:h-3.5 shrink-0">
                <span className="w-0.5 sm:w-1 bg-maroon-950 rounded-full animate-[flameFlicker_1s_ease-in-out_infinite]" style={{ height: '70%' }}></span>
                <span className="w-0.5 sm:w-1 bg-maroon-950 rounded-full animate-[flameFlicker_1.3s_ease-in-out_infinite]" style={{ height: '100%' }}></span>
                <span className="w-0.5 sm:w-1 bg-maroon-950 rounded-full animate-[flameFlicker_0.8s_ease-in-out_infinite]" style={{ height: '50%' }}></span>
              </div>
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>
                {language === 'ta' ? 'இசை ஒலிக்கிறது' : 'Playing'}
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>
                {language === 'ta' ? 'மங்கள இசை' : 'Play Music'}
              </span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

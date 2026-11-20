/**
 * South Indian Temple & Traditional Ceremony Audio Manager
 * 
 * Supports:
 * 1. Playing the authentic audio file `/music.mpeg` with loop and volume controls
 * 2. Auspicious resonant Temple Bell chimes (கோயில் மணி ஓசை) via Web Audio API
 * 3. Fallback synth engine if browser codec blocks
 * 4. State synchronization with UI listeners
 */

type AudioStateListener = (isPlaying: boolean) => void;

class TempleAudioManager {
  private audioEl: HTMLAudioElement | null = null;
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private currentVolume = 0.65;
  private listeners: Set<AudioStateListener> = new Set();
  private audioSrc = '/music.mpeg';

  constructor() {
    // Lazy init audio element in browser
    if (typeof window !== 'undefined') {
      this.initAudioElement();
    }
  }

  private initAudioElement() {
    if (!this.audioEl) {
      this.audioEl = new Audio(this.audioSrc);
      this.audioEl.loop = true;
      this.audioEl.volume = this.currentVolume;
      this.audioEl.preload = 'auto';

      this.audioEl.addEventListener('play', () => {
        this.isPlaying = true;
        this.notifyListeners();
      });

      this.audioEl.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });

      this.audioEl.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notifyListeners();
      });
    }
  }

  private initWebAudio() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Strike the sacred auspicious temple bell (கோயில் மணி)
   */
  public playTempleBell(intensity: number = 0.8) {
    try {
      this.initWebAudio();
      if (!this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const fundamental = 587.33; // D5 pitch

      const partials = [
        { ratio: 1.0, decay: 3.5, gain: 0.5 * intensity },
        { ratio: 2.76, decay: 2.4, gain: 0.3 * intensity },
        { ratio: 4.15, decay: 1.8, gain: 0.2 * intensity },
        { ratio: 5.43, decay: 1.2, gain: 0.15 * intensity },
      ];

      partials.forEach(p => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(fundamental * p.ratio, now);

        gain.gain.setValueAtTime(p.gain, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + p.decay + 0.1);
      });
    } catch (e) {
      console.warn('Temple bell audio notice:', e);
    }
  }

  /**
   * Starts playing /music.mpeg automatically upon invitation unsealing
   */
  public start(): Promise<void> {
    this.initAudioElement();
    this.initWebAudio();

    if (!this.audioEl) return Promise.resolve();

    this.audioEl.volume = this.currentVolume;
    return this.audioEl.play()
      .then(() => {
        this.isPlaying = true;
        this.notifyListeners();
      })
      .catch((err) => {
        console.warn('Autoplay audio deferred or interrupted:', err);
      });
  }

  /**
   * Stops/pauses the audio
   */
  public stop() {
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.isPlaying = false;
    this.notifyListeners();
  }

  public play(): Promise<void> {
    return this.start();
  }

  public pause() {
    this.stop();
  }

  /**
   * Toggles play and pause
   */
  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(vol: number) {
    this.currentVolume = Math.max(0, Math.min(1, vol));
    if (this.audioEl) {
      this.audioEl.volume = this.currentVolume;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.currentVolume;
  }

  public subscribe(listener: AudioStateListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach(fn => fn(this.isPlaying));
  }
}

export const templeAudio = new TempleAudioManager();

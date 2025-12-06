// FIFA World Cup 2026 Simulator - Sound Effects System
// Uses Web Audio API for instant playback

class SoundManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.enabled = true;
        this.volume = 0.5;
        
        // Initialize on first user interaction
        this.initialized = false;
    }
    
    async init() {
        if (this.initialized) return;
        
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
            console.log('🔊 Sound system initialized');
        } catch (e) {
            console.warn('Audio not supported:', e);
        }
    }
    
    // Generate sounds using oscillators (no external files needed!)
    
    playGoal() {
        if (!this.enabled || !this.initialized) return;
        this.init();
        
        // Epic goal sound: rising tone + crowd roar
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        // Rising celebration tone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.3);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.5);
        
        gain.gain.setValueAtTime(this.volume * 0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
        
        osc.start(now);
        osc.stop(now + 0.8);
        
        // Crowd roar (white noise)
        this.playCrowdRoar(0.8);
    }
    
    playCrowdRoar(duration = 1) {
        if (!this.enabled || !this.initialized) return;
        
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        // Create noise buffer
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.5;
        }
        
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        
        // Filter to make it sound like crowd
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1000;
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(this.volume * 0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);
        
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        
        noise.start(now);
        noise.stop(now + duration);
    }
    
    playWhistle() {
        if (!this.enabled || !this.initialized) return;
        
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        // Referee whistle sound
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.setValueAtTime(2800, now);
        osc.frequency.setValueAtTime(2600, now + 0.1);
        osc.frequency.setValueAtTime(2800, now + 0.2);
        
        gain.gain.setValueAtTime(this.volume * 0.15, now);
        gain.gain.setValueAtTime(this.volume * 0.15, now + 0.25);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        
        osc.start(now);
        osc.stop(now + 0.4);
    }
    
    playFinalWhistle() {
        if (!this.enabled || !this.initialized) return;
        
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        // Three short whistles
        for (let i = 0; i < 3; i++) {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            const startTime = now + i * 0.25;
            osc.frequency.setValueAtTime(2800, startTime);
            
            gain.gain.setValueAtTime(this.volume * 0.15, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.15);
            
            osc.start(startTime);
            osc.stop(startTime + 0.15);
        }
    }
    
    playCard(isRed = false) {
        if (!this.enabled || !this.initialized) return;
        
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        // Dramatic descending tone for cards
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(isRed ? 600 : 400, now);
        osc.frequency.exponentialRampToValueAtTime(isRed ? 200 : 250, now + 0.4);
        
        gain.gain.setValueAtTime(this.volume * 0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        
        osc.start(now);
        osc.stop(now + 0.5);
    }
    
    playVictory() {
        if (!this.enabled || !this.initialized) return;
        
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        // Victory fanfare
        const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
        
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'triangle';
            const startTime = now + i * 0.15;
            osc.frequency.setValueAtTime(freq, startTime);
            
            gain.gain.setValueAtTime(this.volume * 0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
            
            osc.start(startTime);
            osc.stop(startTime + 0.3);
        });
        
        // Extended crowd roar
        setTimeout(() => this.playCrowdRoar(2), 600);
    }
    
    playDefeat() {
        if (!this.enabled || !this.initialized) return;
        
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        // Sad descending tone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.8);
        
        gain.gain.setValueAtTime(this.volume * 0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 1);
        
        osc.start(now);
        osc.stop(now + 1);
    }
    
    playClick() {
        if (!this.enabled || !this.initialized) return;
        
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(this.volume * 0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        
        osc.start(now);
        osc.stop(now + 0.05);
    }
    
    playAchievement() {
        if (!this.enabled || !this.initialized) return;
        
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        // Achievement unlock sound - magical ascending
        const notes = [523, 659, 784, 1047, 1319]; // C5 to E6
        
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sine';
            const startTime = now + i * 0.08;
            osc.frequency.setValueAtTime(freq, startTime);
            
            gain.gain.setValueAtTime(this.volume * 0.15, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);
            
            osc.start(startTime);
            osc.stop(startTime + 0.2);
        });
    }
    
    playDramaticMoment() {
        if (!this.enabled || !this.initialized) return;
        
        const ctx = this.audioContext;
        const now = ctx.currentTime;
        
        // Tension-building sound
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(100, now);
        osc.frequency.linearRampToValueAtTime(300, now + 1);
        
        gain.gain.setValueAtTime(this.volume * 0.1, now);
        gain.gain.linearRampToValueAtTime(this.volume * 0.25, now + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
        
        osc.start(now);
        osc.stop(now + 1.2);
    }
    
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
    
    setVolume(vol) {
        this.volume = Math.max(0, Math.min(1, vol));
    }
}

// Create global instance
window.soundManager = new SoundManager();

// Initialize on first click
document.addEventListener('click', () => {
    window.soundManager.init();
}, { once: true });

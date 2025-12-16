import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Mic, MicOff } from 'lucide-react';
import { Button } from './ui/button';
import { Toggle } from './ui/toggle';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface BinauralBeatProps {
  baseFreq?: number; // Base frequency (e.g., 200Hz)
  beatFreq?: number; // Beat frequency (e.g., 7.83Hz)
  autoPlay?: boolean;
  onPlayChange?: (isPlaying: boolean) => void;
}

export default function BinauralBeat({ 
  baseFreq = 200, 
  beatFreq = 7.83,
  autoPlay = false,
  onPlayChange
}: BinauralBeatProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGuided, setIsGuided] = useState(true);
  const [volume, setVolume] = useState(0.1);
  const audioContextRef = useRef<AudioContext | null>(null);
  const leftOscRef = useRef<OscillatorNode | null>(null);
  const rightOscRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const voiceAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    voiceAudioRef.current = new Audio('/audio/meditation-guide.wav');
    voiceAudioRef.current.loop = false;
    return () => stopAudio();
  }, []);

  useEffect(() => {
    if (autoPlay) startAudio();
  }, [autoPlay]);

  const startAudio = async () => {
    if (isPlaying) return;

    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      // Create oscillators
      // Left ear: Base frequency
      // Right ear: Base frequency + Beat frequency
      const leftOsc = ctx.createOscillator();
      const rightOsc = ctx.createOscillator();
      const merger = ctx.createChannelMerger(2);
      const gainNode = ctx.createGain();

      leftOsc.frequency.value = baseFreq;
      rightOsc.frequency.value = baseFreq + beatFreq;

      // Stereo separation
      const leftPanner = ctx.createStereoPanner();
      const rightPanner = ctx.createStereoPanner();
      leftPanner.pan.value = -1;
      rightPanner.pan.value = 1;

      // Connect graph
      leftOsc.connect(leftPanner).connect(merger, 0, 0);
      rightOsc.connect(rightPanner).connect(merger, 0, 1);
      
      merger.connect(gainNode).connect(ctx.destination);

      // Fade in
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 2);

      leftOsc.start();
      rightOsc.start();

      leftOscRef.current = leftOsc;
      rightOscRef.current = rightOsc;
      gainNodeRef.current = gainNode;
      
      if (isGuided && voiceAudioRef.current) {
        voiceAudioRef.current.volume = 0.8;
        voiceAudioRef.current.currentTime = 0;
        voiceAudioRef.current.play().catch(e => console.error("Voice playback failed:", e));
      }

      setIsPlaying(true);
      onPlayChange?.(true);
    } catch (error) {
      console.error("Failed to start audio:", error);
    }
  };

  const stopAudio = () => {
    if (!isPlaying || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const gainNode = gainNodeRef.current;

    if (voiceAudioRef.current) {
      // Fade out voice
      const fadeOutVoice = setInterval(() => {
        if (voiceAudioRef.current && voiceAudioRef.current.volume > 0.1) {
          voiceAudioRef.current.volume -= 0.1;
        } else {
          clearInterval(fadeOutVoice);
          voiceAudioRef.current?.pause();
        }
      }, 100);
    }

    if (gainNode) {
      // Fade out
      gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);

      setTimeout(() => {
        leftOscRef.current?.stop();
        rightOscRef.current?.stop();
        leftOscRef.current = null;
        rightOscRef.current = null;
        setIsPlaying(false);
        onPlayChange?.(false);
      }, 1000);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`w-8 h-8 rounded-full bg-background/50 backdrop-blur-sm border-primary/20 ${isGuided ? 'text-primary' : 'text-muted-foreground'}`}
            onClick={() => setIsGuided(!isGuided)}
          >
            {isGuided ? <Mic className="w-3 h-3" /> : <MicOff className="w-3 h-3" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isGuided ? "Voice Guide On" : "Voice Guide Off"}</p>
        </TooltipContent>
      </Tooltip>

      <Button
        variant="outline"
        size="sm"
        onClick={toggleAudio}
        className="gap-2 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all"
      >
        {isPlaying ? <Volume2 className="w-4 h-4 animate-pulse text-primary" /> : <VolumeX className="w-4 h-4 text-muted-foreground" />}
        <span className="text-xs font-medium tracking-wider">
          {isPlaying ? "7.83Hz Active" : "Play Resonance"}
        </span>
      </Button>
    </div>
  );
}

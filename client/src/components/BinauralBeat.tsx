import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

interface BinauralBeatProps {
  baseFreq?: number; // Base frequency (e.g., 200Hz)
  beatFreq?: number; // Beat frequency (e.g., 7.83Hz)
  autoPlay?: boolean;
}

export default function BinauralBeat({ 
  baseFreq = 200, 
  beatFreq = 7.83,
  autoPlay = false 
}: BinauralBeatProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const audioContextRef = useRef<AudioContext | null>(null);
  const leftOscRef = useRef<OscillatorNode | null>(null);
  const rightOscRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
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
      setIsPlaying(true);
    } catch (error) {
      console.error("Failed to start audio:", error);
    }
  };

  const stopAudio = () => {
    if (!isPlaying || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const gainNode = gainNodeRef.current;

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
  );
}

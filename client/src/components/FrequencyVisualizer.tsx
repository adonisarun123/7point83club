import { useEffect, useRef } from 'react';

interface FrequencyVisualizerProps {
  mode: 'chaos' | 'coherent';
}

export default function FrequencyVisualizer({ mode }: FrequencyVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = mode === 'chaos' ? 'rgba(255, 100, 100, 0.5)' : 'rgba(100, 255, 150, 0.8)';
      
      ctx.beginPath();
      
      for (let x = 0; x < width; x++) {
        let y = height / 2;
        
        if (mode === 'chaos') {
          // Chaotic waveform: multiple high frequencies + noise
          y += Math.sin(x * 0.05 + time * 5) * 20;
          y += Math.sin(x * 0.1 + time * 8) * 15;
          y += (Math.random() - 0.5) * 10;
        } else {
          // Coherent waveform: smooth 7.83Hz simulation
          // Using a slower, rhythmic wave to represent the "heartbeat"
          y += Math.sin(x * 0.02 + time * 2) * 40;
          // Add a subtle harmonic
          y += Math.sin(x * 0.04 + time * 2) * 10;
        }

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
      
      time += 0.05;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

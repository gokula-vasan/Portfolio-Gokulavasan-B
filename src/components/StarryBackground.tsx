import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  alphaSpeed: number;
  speedY: number;
}

export const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const count = 120; // Number of stars

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.5,
          alpha: Math.random(),
          alphaSpeed: 0.005 + Math.random() * 0.01,
          speedY: 0.05 + Math.random() * 0.1, // slow drift
        });
      }
    };

    initCanvas();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw starry canvas background
      ctx.fillStyle = '#020208';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star) => {
        // Twinkle effect (sine-wave-like pulsing)
        star.alpha += star.alphaSpeed;
        if (star.alpha > 1 || star.alpha < 0.1) {
          star.alphaSpeed = -star.alphaSpeed;
        }

        // Drifting effect (move downwards)
        star.y += star.speedY;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Custom glow gradient for a few larger stars
        if (star.size > 1.8 && star.alpha > 0.6) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00f2fe';
          ctx.fillStyle = `rgba(0, 242, 254, ${star.alpha})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        }
        
        ctx.fill();
      });

      // Draw subtle color gradients in background (nebula effect)
      ctx.shadowBlur = 0; // reset
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
};

export default StarryBackground;

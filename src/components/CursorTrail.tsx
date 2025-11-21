"use client";

import React, { useEffect, useRef } from 'react';

interface TrailParticle {
  x: number;
  y: number;
  opacity: number;
  size: number;
  life: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<TrailParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastEmitRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Emit particle every 20ms for smooth trail
      const now = Date.now();
      if (now - lastEmitRef.current > 20) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          size: Math.random() * 3 + 2,
          life: 1
        });
        lastEmitRef.current = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life -= 0.02;
        particle.opacity = particle.life;
        particle.size *= 0.98;

        if (particle.life <= 0) return false;

        // Create golden glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );

        gradient.addColorStop(0, `rgba(247, 211, 130, ${particle.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(227, 176, 75, ${particle.opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(168, 116, 26, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;

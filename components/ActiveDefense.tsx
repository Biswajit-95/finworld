import React, { useEffect, useRef } from 'react';

const ActiveDefense: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Center of the "Vault"
    const cx = width / 2;
    const cy = height / 2;
    const shieldRadius = 80;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      blocked: boolean;
      life: number;
    }

    let particles: Particle[] = [];

    const spawnParticle = () => {
      // Spawn from edges
      const side = Math.floor(Math.random() * 4);
      let x = 0, y = 0;
      switch(side) {
        case 0: x = Math.random() * width; y = 0; break; // Top
        case 1: x = width; y = Math.random() * height; break; // Right
        case 2: x = Math.random() * width; y = height; break; // Bottom
        case 3: x = 0; y = Math.random() * height; break; // Left
      }

      // Velocity towards center
      const angle = Math.atan2(cy - y, cx - x);
      const speed = 2 + Math.random() * 2;
      
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        blocked: false,
        life: 1.0
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.2)'; // Trail effect
      ctx.fillRect(0, 0, width, height);

      // Draw Shield
      ctx.beginPath();
      ctx.arc(cx, cy, shieldRadius, 0, Math.PI * 2);
      ctx.strokeStyle = '#3b82f6'; // Blue shield
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Shield Glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#3b82f6';
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw Center Core (The Asset)
      ctx.beginPath();
      ctx.arc(cx, cy, 20, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();

      // Spawn threats
      if (Math.random() < 0.1) spawnParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        if (!p.blocked) {
          p.x += p.vx;
          p.y += p.vy;

          // Check collision with shield
          const dist = Math.sqrt((p.x - cx) ** 2 + (p.y - cy) ** 2);
          if (dist < shieldRadius + 5) {
             p.blocked = true;
             // Bounce visual
             p.vx *= -0.5;
             p.vy *= -0.5;
          }
        } else {
           // Fade out if blocked
           p.life -= 0.05;
           p.x += p.vx;
           p.y += p.vy;
        }

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.blocked ? `rgba(239, 68, 68, ${p.life})` : `rgba(255, 255, 255, ${p.life})`; // Red if blocked, White if incoming
        ctx.fill();
        
        // Impact ripple on shield
        if (p.blocked && p.life > 0.8) {
           ctx.beginPath();
           ctx.arc(p.x, p.y, 10 * (1 - p.life), 0, Math.PI * 2);
           ctx.strokeStyle = `rgba(59, 130, 246, ${p.life})`;
           ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default ActiveDefense;
import React, { useEffect, useRef } from 'react';

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rotation = 0;
    let pulse = 0;
    let animationId: number;

    // --- CONFIGURATION ---
    const NODE_COUNT = 80; 
    const CONNECTION_DIST = 0.25; 

    interface Point {
      x: number;
      y: number;
      z: number;
      type: 'dot' | 'lock' | 'shield';
      phase: number;
    }

    const points: Point[] = [];

    // Initialize Fibonacci Sphere
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NODE_COUNT; i++) {
        const y = 1 - (i / (NODE_COUNT - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = phi * i;
        
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;

        let type: 'dot' | 'lock' | 'shield' = 'dot';
        if (i % 12 === 0) type = 'lock';
        else if (i % 18 === 0) type = 'shield';

        points.push({ x, y, z, type, phase: Math.random() * Math.PI * 2 });
    }

    // 3D Projection Helper
    const project = (x: number, y: number, z: number, r: number, cx: number, cy: number, rotX: number, rotY: number) => {
        // Rotate Y
        let px = x * Math.cos(rotY) - z * Math.sin(rotY);
        let pz = x * Math.sin(rotY) + z * Math.cos(rotY);
        
        // Rotate X (Tilt)
        let py = y * Math.cos(rotX) - pz * Math.sin(rotX);
        let pz2 = y * Math.sin(rotX) + pz * Math.cos(rotX);

        const depth = 2000; // Flatter field of view for cleaner look
        const scale = depth / (depth - pz2 * r);
        
        return {
            x: cx + px * r * scale,
            y: cy + py * r * scale,
            z: pz2,
            scale,
            alpha: (pz2 + 1.2) / 2.2 // Smoother fade
        }; 
    };

    const drawRing = (cx: number, cy: number, r: number, tilt: number, spin: number, color: string) => {
        ctx.beginPath();
        const segments = 90;
        for(let i=0; i<=segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            const x = Math.cos(theta);
            const z = Math.sin(theta);
            
            // 3D Rotation for ring
            let px = x * Math.cos(spin) - z * Math.sin(spin);
            let pz = x * Math.sin(spin) + z * Math.cos(spin);
            
            // Tilt
            let py = pz * Math.sin(tilt);
            pz = pz * Math.cos(tilt);

            // Project
            const depth = 2000;
            const scale = depth / (depth - pz * r);
            const x2d = cx + px * r * scale;
            const y2d = cy + py * r * scale;

            if (i===0) ctx.moveTo(x2d, y2d);
            else ctx.lineTo(x2d, y2d);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.stroke();
    };

    // Draw lines connecting the globe to the screen edges (Security Tethers)
    const drawTethers = (cx: number, cy: number, r: number, rotation: number) => {
        const count = 4;
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(0, 144, 212, 0.1)';
        
        for(let i=0; i<count; i++) {
            const angle = (i / count) * Math.PI * 2 + rotation * 0.5;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            
            ctx.beginPath();
            ctx.moveTo(cx + x, cy + y);
            // Draw to corner or edge
            const destX = width * (i % 2);
            const destY = height * (Math.floor(i/2));
            
            // Curved line
            const cpX = cx + x * 2;
            const cpY = cy + y * 2;
            
            ctx.quadraticCurveTo(cpX, cpY, destX, destY);
            ctx.stroke();
        }
    }

    const drawLock = (x: number, y: number, s: number, alpha: number) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(s * 1.3, s * 1.3);
        ctx.globalAlpha = alpha;
        
        // Shadow/Glow
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 5;

        // Body (Navy)
        ctx.fillStyle = '#002F55';
        ctx.beginPath();
        ctx.roundRect(-7, -6, 14, 12, 3);
        ctx.fill();
        
        // Outline (Cyan/Gold mix for classy feel)
        ctx.strokeStyle = '#0090D4'; 
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Shackle (Silver)
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, -6, 5, Math.PI, 0);
        ctx.stroke();
        
        // Keyhole
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        const isDesktop = width > 1024;
        
        // --- POSITIONING LOGIC ---
        // Desktop: Right side, vertically centered.
        // Mobile/Tablet: Top area (42% down), to ensure clearance from navbar.
        const cx = isDesktop ? width * 0.75 : width * 0.5;
        const cy = isDesktop ? height * 0.5 : height * 0.42; 
        
        // Radius logic
        // On mobile/tablet, use min(width, height) to ensure landscape tablets don't have massive globes overlapping the top.
        const minDim = Math.min(width, height);
        const r = isDesktop ? 280 : minDim * 0.28; 

        rotation += 0.0015; // Slow, classy spin
        pulse += 0.02;

        // Draw Tethers (Background)
        drawTethers(cx, cy, r, rotation);

        // Security Ring 1 (Orbit)
        drawRing(cx, cy, r * 1.4, 0.4, rotation * 0.5, 'rgba(0, 47, 85, 0.1)');
        
        const projPoints = points.map(p => ({
            ...p,
            proj: project(p.x, p.y, p.z, r, cx, cy, 0.1, rotation)
        }));

        projPoints.sort((a, b) => a.proj.z - b.proj.z);

        const back = projPoints.filter(p => p.proj.z < 0);
        const front = projPoints.filter(p => p.proj.z >= 0);

        // --- BACK HEMISPHERE ---
        back.forEach((p, i) => {
             points.forEach((p2, j) => {
                 if (i <= j) return; 
                 const dx = p.x - p2.x;
                 const dy = p.y - p2.y;
                 const dz = p.z - p2.z;
                 if (dx*dx + dy*dy + dz*dz < CONNECTION_DIST) {
                     const pp2 = project(p2.x, p2.y, p2.z, r, cx, cy, 0.1, rotation);
                     if (pp2.z < 0.2) { 
                         ctx.strokeStyle = 'rgba(0, 47, 85, 0.08)'; // Very subtle back lines
                         ctx.lineWidth = 0.5;
                         ctx.beginPath();
                         ctx.moveTo(p.proj.x, p.proj.y);
                         ctx.lineTo(pp2.x, pp2.y);
                         ctx.stroke();
                     }
                 }
             });
        });

        // --- CORE TEXT ---
        ctx.save();
        ctx.translate(cx, cy);
        
        // 1. Atmosphere Glow
        const glow = ctx.createRadialGradient(0,0,0,0,0,r*0.9);
        glow.addColorStop(0, 'rgba(255,255,255, 0.95)');
        glow.addColorStop(0.5, 'rgba(255,255,255, 0.7)');
        glow.addColorStop(1, 'rgba(255,255,255, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(0,0,r*0.9,0,Math.PI*2);
        ctx.fill();

        // 2. Text
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // "FINWORLD" - Classy Navy
        ctx.font = `900 ${isDesktop ? '40px' : '28px'} "Manrope", sans-serif`;
        ctx.fillStyle = '#002F55'; 
        ctx.fillText('FinWorld', 0, isDesktop ? -8 : -5);
        
        // "SECURE VAULT"
        ctx.font = `700 ${isDesktop ? '11px' : '9px'} "Inter", sans-serif`;
        ctx.letterSpacing = '0.35em';
        ctx.fillStyle = '#0090D4'; 
        ctx.fillText('Securing your world', 0, isDesktop ? 24 : 18);
        // ctx.fillText('SECURE VAULT', 0, isDesktop ? 24 : 18);
        ctx.restore();

        // --- FRONT HEMISPHERE ---
        // Security Ring 2 (Foreground Orbit)
        drawRing(cx, cy, r * 1.6, -0.3, -rotation * 0.3, 'rgba(0, 144, 212, 0.15)');

        front.forEach((p) => {
             points.forEach((p2) => {
                 const dx = p.x - p2.x;
                 const dy = p.y - p2.y;
                 const dz = p.z - p2.z;
                 if (dx*dx + dy*dy + dz*dz < CONNECTION_DIST) {
                     const pp2 = project(p2.x, p2.y, p2.z, r, cx, cy, 0.1, rotation);
                     if (pp2.z > -0.2) { 
                         // Dynamic Scan Line Effect
                         const distFromCenter = Math.abs(p.y); 
                         const scan = Math.sin(pulse - distFromCenter * 3) > 0.9;
                         
                         const alpha = Math.min(p.proj.alpha, (pp2.z + 1.2)/2.2);
                         
                         if (scan) {
                             ctx.strokeStyle = `rgba(0, 144, 212, ${alpha})`;
                             ctx.lineWidth = 1.5;
                         } else {
                             ctx.strokeStyle = `rgba(0, 144, 212, ${alpha * 0.15})`;
                             ctx.lineWidth = 1;
                         }
                         
                         ctx.beginPath();
                         ctx.moveTo(p.proj.x, p.proj.y);
                         ctx.lineTo(pp2.x, pp2.y);
                         ctx.stroke();
                     }
                 }
             });
        });

        front.forEach(p => {
             const alpha = p.proj.alpha;
             const s = p.proj.scale;
             
             if (p.type === 'lock') {
                 drawLock(p.proj.x, p.proj.y, s, alpha);
             } else if (p.type === 'shield') {
                 ctx.save();
                 ctx.translate(p.proj.x, p.proj.y);
                 ctx.scale(s*1.2, s*1.2);
                 ctx.fillStyle = '#0090D4';
                 ctx.beginPath();
                 ctx.arc(0, 0, 4, 0, Math.PI*2);
                 ctx.fill();
                 ctx.restore();
             } else {
                 // Standard Node
                 ctx.fillStyle = '#0090D4';
                 ctx.beginPath();
                 ctx.arc(p.proj.x, p.proj.y, 2 * s, 0, Math.PI*2);
                 ctx.fill();
                 
                 // White center for tech feel
                 ctx.fillStyle = '#fff';
                 ctx.beginPath();
                 ctx.arc(p.proj.x, p.proj.y, 1 * s, 0, Math.PI*2);
                 ctx.fill();
             }
        });

        animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />;
};

export default HeroCanvas;
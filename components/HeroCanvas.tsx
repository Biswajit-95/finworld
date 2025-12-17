import React, { useEffect, useRef } from 'react';

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    let rotation = 0;
    
    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;

    // CRITICAL: Cap DPR at 2 for performance/memory safety on Retina
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX = nx;
      mouseY = ny;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // --- CONFIGURATION ---
    const NODE_COUNT = 16;
    const ARC_COUNT = 5; // Simultaneous data beams
    
    // Background Particles (Stars)
    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5,
      alpha: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.2 + 0.1
    }));

    // Generate Nodes (Vaults/Relays)
    const nodes: {lat: number, lon: number, type: 'vault' | 'relay', phase: number}[] = [];
    for(let i=0; i<NODE_COUNT; i++) {
        nodes.push({
            lat: (Math.random() * 160) - 80, 
            lon: (i / NODE_COUNT) * 360 + Math.random() * 20,
            type: Math.random() > 0.6 ? 'vault' : 'relay',
            phase: Math.random() * Math.PI * 2
        });
    }

    // Active Data Arcs (Beams connecting nodes)
    interface Arc {
      startIdx: number;
      endIdx: number;
      progress: number;
      speed: number;
    }
    const arcs: Arc[] = [];

    // Helper: 3D Projection
    // Returns 3D coordinates and 2D projected screen coordinates
    const project3D = (lat: number, lon: number, radius: number, center: {x: number, y: number}, rot: number, tiltX: number, tiltY: number) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon * Math.PI / 180) + rot + tiltY;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        const y = radius * Math.cos(phi);

        // Tilt Axis
        const tilt = 0.3 + tiltX; 
        const yRot = y * Math.cos(tilt) - z * Math.sin(tilt);
        const zRot = y * Math.sin(tilt) + z * Math.cos(tilt);

        const perspective = 1000;
        const scale = perspective / (perspective + zRot); 
        
        return {
          x3: x, y3: yRot, z3: zRot, // 3D coords for math
          x: center.x + x * scale,   // 2D screen X
          y: center.y + yRot * scale,// 2D screen Y
          scale: scale,
          visible: true
        };
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, width, height);
      rotation += 0.0015; // Slow rotation

      // Smooth Tilt
      targetTiltX += (mouseY * 0.2 - targetTiltX) * 0.05;
      targetTiltY += (mouseX * 0.2 - targetTiltY) * 0.05;

      // Layout
      const isDesktop = width > 1024;
      // Increased size for "Flagship" look (30% larger)
      const GLOBE_RADIUS = Math.min(width, height) * (isDesktop ? 0.42 : 0.35); 
      const CENTER = {
          x: isDesktop ? width * 0.7 : width * 0.5,
          y: height * 0.5
      };

      // 1. Draw Starfield (Background Parallax)
      stars.forEach(star => {
          star.y -= star.speed;
          if (star.y < 0) star.y = height;
          
          const parallaxX = mouseX * 20 * star.speed;
          const parallaxY = mouseY * 20 * star.speed;
          
          ctx.beginPath();
          ctx.arc(star.x + parallaxX, star.y + parallaxY, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(161, 161, 170, ${star.alpha})`; // Zinc-400
          ctx.fill();
      });

      // 2. Atmosphere / Glow
      const glowRadius = GLOBE_RADIUS * 1.6;
      const glow = ctx.createRadialGradient(CENTER.x, CENTER.y, GLOBE_RADIUS * 0.8, CENTER.x, CENTER.y, glowRadius);
      glow.addColorStop(0, 'rgba(0, 144, 212, 0.12)'); // Inner Cyan
      glow.addColorStop(0.5, 'rgba(0, 47, 85, 0.05)'); // Mid Navy
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // --- RENDERING HELPERS ---
      
      // Calculate all node positions first
      const projectedNodes = nodes.map(n => ({
          ...n,
          pos: project3D(n.lat, n.lon, GLOBE_RADIUS, CENTER, rotation, targetTiltX, targetTiltY)
      }));

      // 3. Draw Grid (Meridians & Parallels)
      ctx.lineWidth = 1.5;
      
      // Meridians
      for (let i = 0; i < 24; i++) {
        const lon = (i / 24) * 360;
        ctx.beginPath();
        let isFrontLine = false;

        for (let lat = -90; lat <= 90; lat += 5) {
           const p = project3D(lat, lon, GLOBE_RADIUS, CENTER, rotation, targetTiltX, targetTiltY);
           if (lat === -90) {
               ctx.moveTo(p.x, p.y);
           } else {
               ctx.lineTo(p.x, p.y);
           }
           if (lat === 0) isFrontLine = p.z3 < 0;
        }

        if (isFrontLine) {
            ctx.strokeStyle = 'rgba(0, 144, 212, 0.15)'; // Cyan Front
            ctx.setLineDash([]);
        } else {
            ctx.strokeStyle = 'rgba(0, 47, 85, 0.08)'; // Navy Back (very dim)
            ctx.setLineDash([4, 8]);
        }
        ctx.stroke();
      }

      // Parallels
      for (let i = 1; i < 12; i++) {
        const lat = -90 + (i / 12) * 180;
        ctx.beginPath();
        for (let l = 0; l <= 360; l += 5) {
            const p = project3D(lat, l, GLOBE_RADIUS, CENTER, rotation, targetTiltX, targetTiltY);
            if (l === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = 'rgba(0, 144, 212, 0.06)';
        ctx.setLineDash([]);
        ctx.stroke();
      }

      // 4. Data Arcs (Beams) management
      // Spawn new arcs
      if (arcs.length < ARC_COUNT && Math.random() < 0.03) {
          const start = Math.floor(Math.random() * nodes.length);
          let end = Math.floor(Math.random() * nodes.length);
          if (start !== end) {
              arcs.push({ startIdx: start, endIdx: end, progress: 0, speed: 0.01 + Math.random() * 0.01 });
          }
      }

      // Draw Arcs
      arcs.forEach((arc, idx) => {
          arc.progress += arc.speed;
          if (arc.progress >= 1) {
              arcs.splice(idx, 1);
              return;
          }

          const startNode = projectedNodes[arc.startIdx];
          const endNode = projectedNodes[arc.endIdx];

          // Only draw if active (simple depth check could be added here)
          const midZ = (startNode.pos.z3 + endNode.pos.z3) / 2;
          
          if (midZ < GLOBE_RADIUS * 0.5) { 
              const p1 = startNode.pos;
              const p2 = endNode.pos;
              
              // Simple quadratic bezier for "loft" effect
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2;
              
              const dx = midX - CENTER.x;
              const dy = midY - CENTER.y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              
              const loft = 1.2 + Math.sin(arc.progress * Math.PI) * 0.4;
              const cpX = CENTER.x + (dx / dist) * (dist * loft);
              const cpY = CENTER.y + (dy / dist) * (dist * loft);

              // Draw the beam
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.quadraticCurveTo(cpX, cpY, p2.x, p2.y);
              
              const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
              grad.addColorStop(0, 'rgba(0,144,212,0)');
              grad.addColorStop(0.5, `rgba(0,144,212,${1 - Math.abs(0.5 - arc.progress)*2})`);
              grad.addColorStop(1, 'rgba(0,144,212,0)');
              
              ctx.strokeStyle = grad;
              ctx.lineWidth = 2 * p1.scale;
              ctx.setLineDash([]);
              ctx.stroke();

              // Draw traveling packet
              const t = arc.progress;
              const tx = (1-t)*(1-t)*p1.x + 2*(1-t)*t*cpX + t*t*p2.x;
              const ty = (1-t)*(1-t)*p1.y + 2*(1-t)*t*cpY + t*t*p2.y;
              
              ctx.beginPath();
              ctx.arc(tx, ty, 2 * p1.scale, 0, Math.PI*2);
              ctx.fillStyle = '#fff';
              ctx.fill();
          }
      });

      // 5. Draw Nodes
      projectedNodes.forEach(n => {
          if (n.pos.z3 < 0) { // Front side only
              const alpha = (1 - (n.pos.z3 / -GLOBE_RADIUS)) * 0.9;
              
              // Node Body
              ctx.beginPath();
              ctx.arc(n.pos.x, n.pos.y, (n.type === 'vault' ? 3 : 2) * n.pos.scale, 0, Math.PI * 2);
              ctx.fillStyle = n.type === 'vault' ? '#fff' : '#0090D4';
              ctx.fill();

              // Pulse Effect
              const pulse = (Math.sin(Date.now() * 0.003 + n.phase) + 1) * 0.5;
              if (n.type === 'vault') {
                  ctx.beginPath();
                  ctx.arc(n.pos.x, n.pos.y, (4 + pulse * 8) * n.pos.scale, 0, Math.PI * 2);
                  ctx.strokeStyle = `rgba(0, 144, 212, ${ (1-pulse) * alpha })`;
                  ctx.lineWidth = 1;
                  ctx.stroke();
              }
          }
      });

      // 6. Security Rings
      const drawRing = (rMult: number, rSpeed: number, tilt: number, color: string, width: number, dash: number[]) => {
          ctx.save();
          ctx.translate(CENTER.x, CENTER.y);
          ctx.rotate(rotation * rSpeed + targetTiltY * 0.3);
          ctx.scale(1, tilt + targetTiltX * 0.1);
          
          ctx.beginPath();
          ctx.arc(0, 0, GLOBE_RADIUS * rMult, 0, Math.PI * 2);
          ctx.strokeStyle = color;
          ctx.lineWidth = width;
          ctx.setLineDash(dash);
          ctx.stroke();

          // Scanner blip
          const angle = Date.now() * 0.001 * rSpeed;
          const bx = Math.cos(angle) * GLOBE_RADIUS * rMult;
          const by = Math.sin(angle) * GLOBE_RADIUS * rMult;
          
          ctx.beginPath();
          ctx.arc(bx, by, 3, 0, Math.PI*2);
          ctx.fillStyle = '#fff';
          ctx.shadowColor = '#0090D4';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.restore();
      };

      // Inner Ring (Fast)
      drawRing(1.2, 0.8, 0.3, 'rgba(0, 144, 212, 0.2)', 1.5, [10, 30]);
      // Outer Ring (Slow)
      drawRing(1.5, -0.4, 0.2, 'rgba(0, 47, 85, 0.3)', 1, [2, 10]);

      animationId = requestAnimationFrame(animate);
    };

    const animStart = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animStart);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />;
};

export default HeroCanvas;
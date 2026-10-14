import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive depth parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Node particle system for the cyber-leaf constellation
    interface Node {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      radius: number;
      color: string;
      glowColor: string;
      phase: number;
      speed: number;
      isGolden?: boolean;
    }

    const nodes: Node[] = [];
    const totalNodes = 60;

    // Golden ratio and leaf parametric curves
    for (let i = 0; i < totalNodes; i++) {
      const t = (i / totalNodes) * Math.PI * 2;
      // Parametric leaf-like coordinate distribution
      const r = (1 - Math.sin(t)) * 140 + 30;
      const bx = Math.cos(t) * r * 0.9;
      const by = (Math.sin(t) * r - 20) * 1.1;

      // Color scheme distribution matching Thenam brand
      let color = '#00B9C7'; // Teal
      let glowColor = 'rgba(0, 185, 199, 0.4)';
      const isGolden = i % 9 === 0;

      if (isGolden) {
        color = '#F2C94C'; // Golden Yellow
        glowColor = 'rgba(242, 201, 76, 0.6)';
      } else if (i % 3 === 0) {
        color = '#7CCB32'; // Leaf Green
        glowColor = 'rgba(124, 203, 50, 0.5)';
      } else if (i % 2 === 0) {
        color = '#00E5FF'; // Cyan
        glowColor = 'rgba(0, 229, 255, 0.5)';
      } else {
        color = '#2563EB'; // Royal Blue
        glowColor = 'rgba(37, 99, 235, 0.4)';
      }

      nodes.push({
        x: bx,
        y: by,
        z: (Math.random() - 0.5) * 100,
        baseX: bx,
        baseY: by,
        radius: isGolden ? 3.5 : Math.random() * 2 + 1.8,
        color,
        glowColor,
        phase: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.012,
        isGolden,
      });
    }

    // Floating data packets along network paths
    interface Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
    }

    const packets: Packet[] = [];
    for (let i = 0; i < 8; i++) {
      packets.push({
        fromIndex: Math.floor(Math.random() * totalNodes),
        toIndex: Math.floor(Math.random() * totalNodes),
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.008,
        color: i % 2 === 0 ? '#00E5FF' : '#F2C94C',
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth parallax easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5 + (mouseX - width * 0.5) * 0.06;
      const centerY = height * 0.48 + (mouseY - height * 0.5) * 0.06;

      // Soft ambient background aura
      const auraGradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 320);
      auraGradient.addColorStop(0, 'rgba(0, 185, 199, 0.12)');
      auraGradient.addColorStop(0.35, 'rgba(7, 22, 41, 0.08)');
      auraGradient.addColorStop(0.7, 'rgba(124, 203, 50, 0.04)');
      auraGradient.addColorStop(1, 'rgba(5, 8, 13, 0)');
      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 320, 0, Math.PI * 2);
      ctx.fill();

      // Update node positions with 3D rotation and breathing
      const angleY = prefersReducedMotion ? 0 : Math.sin(time * 0.3) * 0.15 + (mouseX / width - 0.5) * 0.4;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projected = nodes.map((node) => {
        const floatY = prefersReducedMotion ? 0 : Math.sin(time + node.phase) * 6;
        const curX = node.baseX;
        const curY = node.baseY + floatY;

        // Rotate Y
        const rotX = curX * cosY - node.z * sinY;
        const rotZ = curX * sinY + node.z * cosY;

        // Perspective projection
        const fov = 350;
        const scale = fov / (fov + rotZ + 100);
        const px = centerX + rotX * scale;
        const py = centerY + curY * scale;

        return { px, py, scale, node, rotZ };
      });

      // Draw connection lines between nearby nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 88) {
            const alpha = (1 - dist / 88) * 0.35;
            ctx.strokeStyle = `rgba(0, 185, 199, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw data packets
      packets.forEach((pkt) => {
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          pkt.progress = 0;
          pkt.fromIndex = Math.floor(Math.random() * totalNodes);
          pkt.toIndex = Math.floor(Math.random() * totalNodes);
        }

        const p1 = projected[pkt.fromIndex];
        const p2 = projected[pkt.toIndex];
        if (p1 && p2) {
          const px = p1.px + (p2.px - p1.px) * pkt.progress;
          const py = p1.py + (p2.py - p1.py) * pkt.progress;

          ctx.fillStyle = pkt.color;
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw nodes
      projected.sort((a, b) => a.rotZ - b.rotZ);

      projected.forEach(({ px, py, scale, node }) => {
        const radius = Math.max(1, node.radius * scale);

        // Outer glow
        ctx.fillStyle = node.glowColor;
        ctx.beginPath();
        ctx.arc(px, py, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();

        // White core highlight for golden or prominent nodes
        if (node.isGolden || node.radius > 2.5) {
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(px, py, radius * 0.35, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};

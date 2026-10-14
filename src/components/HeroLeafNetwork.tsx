import React, { useEffect, useRef } from 'react';

export const HeroLeafNetwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Floating background particles
    const particleCount = 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.4 ? 'rgba(0, 213, 232, ' : (Math.random() > 0.5 ? 'rgba(18, 214, 160, ' : 'rgba(242, 201, 76, '),
      alpha: Math.random() * 0.5 + 0.1,
      pulse: Math.random() * Math.PI,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;

      ctx.clearRect(0, 0, width, height);

      // 3. Floating Ambient Particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += 0.025;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const curAlpha = p.alpha + Math.sin(p.pulse) * 0.15;
        ctx.fillStyle = `${p.color}${Math.max(0.05, curAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className={`relative w-full flex items-center justify-center select-none ${className}`}
         style={{ minHeight: '480px' }}>
      {/* Background Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Ambient glow rings behind the leaf */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        {/* Outer glow */}
        <div className="absolute w-[480px] h-[480px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,213,232,0.18) 0%, rgba(11,34,56,0.35) 35%, rgba(18,214,160,0.08) 65%, transparent 100%)',
            filter: 'blur(20px)',
          }}
        />
        {/* Bottom orbit rings */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[420px] h-[60px]"
          style={{ perspective: '400px' }}>
          <div className="w-full h-full rounded-full border border-[#00D5E8]/20"
            style={{ transform: 'rotateX(75deg) translateY(-10px)' }} />
          <div className="absolute inset-0 w-[90%] mx-auto h-full rounded-full border border-[#12D6A0]/15"
            style={{ transform: 'rotateX(75deg) translateY(-5px) scale(0.85)' }} />
          <div className="absolute inset-0 w-[80%] mx-auto h-full rounded-full border border-[#00D5E8]/10"
            style={{ transform: 'rotateX(75deg) translateY(0px) scale(0.7)' }} />
        </div>
      </div>

      {/* The Hero Leaf Image */}
      <div className="relative z-10 w-full h-full flex items-center justify-center"
           style={{ filter: 'drop-shadow(0 0 80px rgba(0,213,232,0.45)) drop-shadow(0 20px 40px rgba(18,214,160,0.25))' }}>
        <img
          src="/assets/hero-leaf.jpg"
          alt="Technology Network Leaf - Thenam Software Solutions"
          className="w-full h-auto object-contain"
          style={{ maxWidth: '640px', maxHeight: '600px', borderRadius: '12px' }}
          onError={(e) => {
            // Fallback to SVG leaf rendering if image fails
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Additional glow overlays */}
      <div className="absolute top-[20%] right-[15%] w-16 h-16 rounded-full pointer-events-none z-[2]"
        style={{ background: 'radial-gradient(circle, rgba(18,214,160,0.5) 0%, transparent 70%)', filter: 'blur(8px)' }} />
      <div className="absolute bottom-[30%] left-[20%] w-10 h-10 rounded-full pointer-events-none z-[2]"
        style={{ background: 'radial-gradient(circle, rgba(0,213,232,0.5) 0%, transparent 70%)', filter: 'blur(6px)' }} />
    </div>
  );
};

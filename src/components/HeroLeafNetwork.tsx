import React, { useEffect, useRef, useState } from 'react';

export const HeroLeafNetwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // ── Particle Canvas Background ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 650);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Constellation / network particles
    const particleCount = 42;
    const colors = [
      'rgba(0, 213, 232, ',   // primary cyan
      'rgba(0, 205, 181, ',   // teal
      'rgba(99, 232, 107, ',  // leaf green
      'rgba(22, 139, 255, ',  // electric blue
      'rgba(242, 201, 76, ',  // golden yellow
    ];

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      radius: Math.random() * 1.8 + 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.015,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render floating particles and faint network connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += p.pulseSpeed;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const curAlpha = Math.max(0.08, p.alpha + Math.sin(p.pulse) * 0.18);

        // Particle circle with soft glow
        ctx.fillStyle = `${p.color}${curAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle holographic thread lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.14 * curAlpha;
            ctx.strokeStyle = `rgba(0, 213, 232, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // ── Subtle 3D Gyroscopic / Parallax Interaction on Mouse Move ──
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMouseOffset({ x: x * 5, y: -y * 5 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full flex items-center justify-center select-none overflow-visible ${className}`}
      style={{
        minHeight: '480px',
        perspective: '1200px',
      }}
    >
      {/* ── Ambient Particle Canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* ── Outer Atmospheric Holographic Glow ── */}
      <div
        className="absolute w-[560px] h-[560px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 213, 232, 0.16) 0%, rgba(0, 205, 181, 0.10) 35%, rgba(22, 139, 255, 0.08) 55%, transparent 75%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── HOLOGRAPHIC FLOATING RIG ── */}
      <div
        className="relative z-10 w-full flex flex-col items-center justify-center transition-transform duration-300 ease-out"
        style={{
          maxWidth: '640px',
          transform: `rotateY(${mouseOffset.x}deg) rotateX(${mouseOffset.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Floating animated wrapper (10-15px loop + subtle 3D tilt) */}
        <div className="hero-holo-float relative w-full flex flex-col items-center">
          
          {/* ── THE EXACT DIGITAL LEAF ARTWORK (SEAMLESSLY BLENDED) ── */}
          <div className="relative w-full flex items-center justify-center">
            {/* Seamless feathered base illustration */}
            <img
              src="/assets/main-leaf-hero-feathered.png"
              alt="Thenam Software Solutions - Futuristic Digital Leaf Network"
              className="w-full h-auto object-contain block"
              style={{
                maxHeight: '520px',
              }}
              onError={(e) => {
                // Fallback attempt to alternate asset path if needed
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('main-leaf-hero.jpg')) {
                  target.src = '/assets/main-leaf-hero.jpg';
                }
              }}
            />

            {/* ── LAYERED HOLOGRAPHIC LIGHT PULSES ── */}
            {/* 1. Left Blue Leaf Glow Pulse */}
            <div
              className="leaf-glow-pulse absolute pointer-events-none rounded-full"
              style={{
                left: '21%',
                top: '35%',
                width: '30%',
                height: '44%',
                background:
                  'radial-gradient(circle, rgba(0, 213, 232, 0.65) 0%, rgba(22, 139, 255, 0.35) 45%, transparent 75%)',
                mixBlendMode: 'screen',
              }}
            />

            {/* 2. Main Upright Green Leaf Glow Pulse */}
            <div
              className="leaf-glow-pulse-delay-1 absolute pointer-events-none rounded-full"
              style={{
                left: '43%',
                top: '14%',
                width: '36%',
                height: '52%',
                background:
                  'radial-gradient(circle, rgba(99, 232, 107, 0.60) 0%, rgba(0, 205, 181, 0.30) 45%, transparent 75%)',
                mixBlendMode: 'screen',
              }}
            />

            {/* 3. Right Golden/Yellow Leaf Glow Pulse */}
            <div
              className="leaf-glow-pulse-delay-2 absolute pointer-events-none rounded-full"
              style={{
                left: '53%',
                top: '45%',
                width: '30%',
                height: '36%',
                background:
                  'radial-gradient(circle, rgba(242, 201, 76, 0.55) 0%, rgba(99, 232, 107, 0.20) 50%, transparent 75%)',
                mixBlendMode: 'screen',
              }}
            />

            {/* 4. Subtle Diagonal Holographic Light Shimmer */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl"
              style={{
                WebkitMaskImage:
                  'radial-gradient(ellipse 80% 78% at 50% 50%, black 55%, transparent 90%)',
                maskImage:
                  'radial-gradient(ellipse 80% 78% at 50% 50%, black 55%, transparent 90%)',
              }}
            >
              <div
                className="holo-scan-sweep absolute w-[200%] h-32 -left-1/2"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 0%, rgba(0, 213, 232, 0.30) 50%, transparent 100%)',
                  mixBlendMode: 'screen',
                }}
              />
            </div>

            {/* 5. Interconnected Glowing Node Twinkles */}
            {/* Top Tip of Green Leaf */}
            <div
              className="leaf-node-twinkle absolute rounded-full pointer-events-none"
              style={{
                left: '72%',
                top: '10.5%',
                width: '7px',
                height: '7px',
                background: '#FFFFFF',
                boxShadow: '0 0 12px #63E86B, 0 0 24px #63E86B',
              }}
            />
            {/* Blue Leaf Apex Tip */}
            <div
              className="leaf-node-twinkle absolute rounded-full pointer-events-none"
              style={{
                left: '41.5%',
                top: '33%',
                width: '6px',
                height: '6px',
                background: '#FFFFFF',
                boxShadow: '0 0 12px #00D5E8, 0 0 22px #168BFF',
                animationDelay: '1s',
              }}
            />
            {/* Left Orbit Intersection Star */}
            <div
              className="leaf-node-twinkle absolute rounded-full pointer-events-none"
              style={{
                left: '17%',
                top: '48%',
                width: '6px',
                height: '6px',
                background: '#FFFFFF',
                boxShadow: '0 0 10px #F2C94C, 0 0 20px #F2C94C',
                animationDelay: '1.8s',
              }}
            />
            {/* Right Leaf Golden Tip */}
            <div
              className="leaf-node-twinkle absolute rounded-full pointer-events-none"
              style={{
                left: '73.5%',
                top: '43%',
                width: '6px',
                height: '6px',
                background: '#FFFFFF',
                boxShadow: '0 0 12px #F2C94C, 0 0 22px #F2C94C',
                animationDelay: '0.6s',
              }}
            />
            {/* Center Base Convergence Node */}
            <div
              className="leaf-node-twinkle absolute rounded-full pointer-events-none"
              style={{
                left: '48.5%',
                top: '81.5%',
                width: '8px',
                height: '8px',
                background: '#FFFFFF',
                boxShadow: '0 0 16px #00D5E8, 0 0 32px #00CDB5',
                animationDelay: '2.2s',
              }}
            />
          </div>

          {/* ── ROTATING HOLOGRAPHIC PLATFORM RINGS ── */}
          {/* Positioned directly at the bottom base of the floating leaf */}
          <div
            className="relative w-full -mt-10 sm:-mt-14 flex items-center justify-center pointer-events-none z-[12]"
            style={{
              height: '120px',
              perspective: '600px',
            }}
          >
            {/* 1. Ambient Floor Glow / Light Pool */}
            <div
              className="absolute w-[80%] max-w-[460px] h-20 rounded-full"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(0, 213, 232, 0.40) 0%, rgba(0, 205, 181, 0.22) 40%, rgba(4, 21, 34, 0.5) 65%, transparent 80%)',
                transform: 'rotateX(76deg) scale(1.1)',
                filter: 'blur(10px)',
              }}
            />

            {/* 2. Outer Segmented Dashed Ring (Clockwise Rotation) */}
            <div
              className="platform-rotate-cw absolute w-[86%] max-w-[500px] h-[86%] max-h-[500px] rounded-full border border-dashed border-[#00D5E8]/35"
              style={{
                borderWidth: '1.5px',
                boxShadow: '0 0 18px rgba(0, 213, 232, 0.20)',
              }}
            />

            {/* 3. Middle Precision Ring with 4 Accent Pips (Counter-Clockwise Rotation) */}
            <div
              className="platform-rotate-ccw absolute w-[72%] max-w-[420px] h-[72%] max-h-[420px] rounded-full border border-[#00CDB5]/50"
              style={{
                borderWidth: '1.5px',
                boxShadow: '0 0 15px rgba(0, 205, 181, 0.25)',
              }}
            >
              {/* North Pip */}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00D5E8] shadow-[0_0_8px_#00D5E8]" />
              {/* South Pip */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#63E86B] shadow-[0_0_8px_#63E86B]" />
              {/* East Pip */}
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F2C94C] shadow-[0_0_8px_#F2C94C]" />
              {/* West Pip */}
              <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#168BFF] shadow-[0_0_8px_#168BFF]" />
            </div>

            {/* 4. Inner Luminous Holographic Ring */}
            <div
              className="absolute w-[58%] max-w-[340px] h-[58%] max-h-[340px] rounded-full border-2 border-[#00D5E8]/80"
              style={{
                transform: 'rotateX(76deg)',
                boxShadow:
                  '0 0 25px rgba(0, 213, 232, 0.60), inset 0 0 15px rgba(0, 205, 181, 0.40)',
              }}
            />

            {/* 5. Expanding Holographic Pulse Wave */}
            <div
              className="platform-pulse-wave absolute w-[60%] max-w-[350px] h-[60%] max-h-[350px] rounded-full border border-[#00D5E8]/60"
            />

            {/* 6. Core Energy Convergence Point */}
            <div
              className="absolute w-12 h-12 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, #F4F8FC 0%, #00D5E8 40%, rgba(0, 205, 181, 0.5) 70%, transparent 100%)',
                transform: 'rotateX(76deg) scale(1.4)',
                boxShadow: '0 0 25px #00D5E8, 0 0 50px #00CDB5',
                filter: 'blur(2px)',
              }}
            />
          </div>

          {/* ── COUNTER-PHASE GROUND SHADOW ── */}
          {/* Contracts when leaf floats up, expands when leaf floats down */}
          <div
            className="hero-shadow-pulse pointer-events-none"
            style={{
              width: '60%',
              maxWidth: '360px',
              height: '24px',
              marginTop: '-35px',
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse at center, rgba(2, 11, 22, 0.95) 0%, rgba(2, 11, 22, 0.6) 50%, transparent 75%)',
              filter: 'blur(8px)',
            }}
          />

        </div>
      </div>
    </div>
  );
};

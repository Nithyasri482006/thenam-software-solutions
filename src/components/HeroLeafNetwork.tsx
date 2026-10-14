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

    // Mouse parallax tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Floating background particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(0, 229, 255, ' : (Math.random() > 0.5 ? 'rgba(124, 203, 50, ' : 'rgba(242, 201, 76, '),
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI,
    }));

    // Orbiting data arcs around the leaf
    const orbitalPoints = 28;
    const orbits = Array.from({ length: orbitalPoints }, (_, i) => ({
      angle: (i / orbitalPoints) * Math.PI * 2,
      radiusX: 180 + (i % 3) * 35,
      radiusY: 130 + (i % 3) * 25,
      speed: 0.005 + (i % 3) * 0.003,
      size: (i % 4 === 0) ? 3 : 1.5,
      color: i % 2 === 0 ? '#00E5FF' : '#7CCB32',
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2 + (mouseX - width / 2) * 0.04;
      const cy = height / 2 + (mouseY - height / 2) * 0.04;

      // 1. Ambient Background Glows
      const bgGlow = ctx.createRadialGradient(cx - 30, cy - 20, 10, cx - 30, cy - 20, 280);
      bgGlow.addColorStop(0, 'rgba(0, 185, 199, 0.22)');
      bgGlow.addColorStop(0.35, 'rgba(2, 132, 199, 0.12)');
      bgGlow.addColorStop(0.7, 'rgba(124, 203, 50, 0.06)');
      bgGlow.addColorStop(1, 'rgba(3, 7, 17, 0)');
      ctx.fillStyle = bgGlow;
      ctx.beginPath();
      ctx.arc(cx - 30, cy - 20, 280, 0, Math.PI * 2);
      ctx.fill();

      // Right warm golden glow
      const goldGlow = ctx.createRadialGradient(cx + 80, cy + 40, 5, cx + 80, cy + 40, 160);
      goldGlow.addColorStop(0, 'rgba(242, 201, 76, 0.18)');
      goldGlow.addColorStop(0.5, 'rgba(124, 203, 50, 0.08)');
      goldGlow.addColorStop(1, 'rgba(3, 7, 17, 0)');
      ctx.fillStyle = goldGlow;
      ctx.beginPath();
      ctx.arc(cx + 80, cy + 40, 160, 0, Math.PI * 2);
      ctx.fill();

      // 2. Orbital Constellation Lines & Radiating Filaments
      ctx.save();
      ctx.translate(cx, cy);
      const rot = prefersReducedMotion ? 0 : time * 0.2;
      ctx.rotate(rot * 0.2);

      // Outer ellipse constellation rings
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(-20, -10, 220, 160, -Math.PI / 6, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(124, 203, 50, 0.12)';
      ctx.beginPath();
      ctx.ellipse(10, 10, 240, 170, Math.PI / 4, 0, Math.PI * 2);
      ctx.stroke();

      // Draw orbital particles
      orbits.forEach((orb) => {
        if (!prefersReducedMotion) {
          orb.angle += orb.speed;
        }
        const ox = Math.cos(orb.angle) * orb.radiusX - 20;
        const oy = Math.sin(orb.angle) * orb.radiusY - 10;

        ctx.fillStyle = orb.color;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect to center if close
        const dist = Math.sqrt(ox * ox + oy * oy);
        if (dist < 210) {
          ctx.strokeStyle = 'rgba(0, 229, 255, 0.12)';
          ctx.beginPath();
          ctx.moveTo(ox, oy);
          ctx.lineTo(-40, 10);
          ctx.stroke();
        }
      });
      ctx.restore();

      // 3. Floating Ambient Particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += 0.03;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const curAlpha = p.alpha + Math.sin(p.pulse) * 0.2;
        ctx.fillStyle = `${p.color}${Math.max(0.1, curAlpha)})`;
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
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className={`relative w-full aspect-square max-w-[560px] flex items-center justify-center select-none ${className}`}>
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Foreground Illuminated 3D Cyber-Leaf Structure Matching Reference Image */}
      <div className="relative z-10 w-[84%] h-[84%] flex items-center justify-center filter drop-shadow-[0_0_45px_rgba(0,185,199,0.4)]">
        <svg
          viewBox="0 0 600 620"
          className="w-full h-full object-contain"
          aria-label="3D Connected Cyber-Leaf Network"
        >
          <defs>
            <filter id="leafGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="spineGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Chrome Metallic Spine */}
            <linearGradient id="heroSpine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="20%" stopColor="#E2E8F0" />
              <stop offset="45%" stopColor="#94A3B8" />
              <stop offset="70%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            {/* Left Leaf Cyber Deep Blue / Cyan */}
            <linearGradient id="heroCyberLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#0284C7" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#0369A1" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#042244" />
            </linearGradient>

            {/* Cyber Facet Shading */}
            <linearGradient id="facetShade1" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="facetShade2" x1="10%" y1="10%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#082F49" stopOpacity="0.85" />
            </linearGradient>

            {/* Right Leaf Organic Green to Golden-Yellow */}
            <linearGradient id="heroOrganicUpper" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#84CC16" />
              <stop offset="35%" stopColor="#65A30D" />
              <stop offset="70%" stopColor="#EAB308" />
              <stop offset="95%" stopColor="#CA8A04" />
              <stop offset="100%" stopColor="#A16207" />
            </linearGradient>
            <linearGradient id="heroOrganicUpperHighlight" x1="0%" y1="0%" x2="100%" y2="70%">
              <stop offset="0%" stopColor="#BEF264" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#84CC16" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#FDE047" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0.3" />
            </linearGradient>

            {/* Right Leaf Lower Overlap Amber */}
            <linearGradient id="heroOrganicLower" x1="10%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#84CC16" />
              <stop offset="40%" stopColor="#EAB308" />
              <stop offset="80%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            {/* Floor Horizon Glow */}
            <radialGradient id="heroFloorGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#84CC16" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Radiating Background Constellation Webbing from Cyber-Leaf */}
          <g stroke="#00E5FF" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="3 4">
            <line x1="220" y1="210" x2="80" y2="140" />
            <line x1="170" y1="280" x2="40" y2="260" />
            <line x1="170" y1="370" x2="60" y2="440" />
            <line x1="250" y1="440" x2="150" y2="520" />
            <line x1="310" y1="90" x2="220" y2="20" />
            <line x1="440" y1="220" x2="560" y2="160" stroke="#7CCB32" strokeOpacity="0.25" />
            <line x1="470" y1="360" x2="570" y2="420" stroke="#F2C94C" strokeOpacity="0.25" />
          </g>

          {/* Radiating Endpoint Star Nodes */}
          <circle cx="80" cy="140" r="3" fill="#00E5FF" filter="url(#nodeGlow)" />
          <circle cx="40" cy="260" r="3.5" fill="#38BDF8" filter="url(#nodeGlow)" />
          <circle cx="60" cy="440" r="3" fill="#00E5FF" filter="url(#nodeGlow)" />
          <circle cx="150" cy="520" r="2.5" fill="#38BDF8" />
          <circle cx="560" cy="160" r="3" fill="#84CC16" filter="url(#nodeGlow)" />
          <circle cx="570" cy="420" r="3" fill="#F2C94C" filter="url(#nodeGlow)" />

          {/* Base Horizon Glow Line */}
          <ellipse cx="310" cy="510" rx="210" ry="8" fill="url(#heroFloorGlow)" />
          <path d="M 180 510 Q 310 513 440 510" stroke="#FBBF24" strokeWidth="2" strokeOpacity="0.75" fill="none" />
          <path d="M 220 510 Q 310 512 400 510" stroke="#38BDF8" strokeWidth="2.5" strokeOpacity="0.9" fill="none" filter="url(#leafGlow)" />

          {/* ================= LEAF STRUCTURE ================= */}
          <g transform="translate(-50, 0)">
            {/* 1. RIGHT UPPER LEAF (Green to Golden-Yellow) */}
            <path
              d="M 410 95 C 448 115 536 178 578 260 C 606 318 600 362 562 398 C 508 434 438 438 370 430 C 406 384 448 322 454 238 C 456 176 432 125 410 95 Z"
              fill="url(#heroOrganicUpper)"
            />
            <path
              d="M 410 95 C 462 132 552 200 580 288 C 594 338 565 382 520 402 C 468 366 454 282 450 218 C 444 156 428 112 410 95 Z"
              fill="url(#heroOrganicUpperHighlight)"
              opacity="0.95"
            />

            {/* Glowing Organic Veins */}
            <g stroke="#FEF08A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9" filter="url(#leafGlow)">
              <path d="M 442 172 C 474 167 512 174 538 193" />
              <path d="M 448 214 C 488 212 532 225 560 251" />
              <path d="M 450 260 C 494 263 540 281 568 318" />
              <path d="M 444 308 C 484 318 526 344 550 370" />
              <path d="M 428 354 C 458 368 492 389 514 402" />
            </g>

            {/* 2. RIGHT LOWER LEAF (Amber Overlap) */}
            <path
              d="M 438 315 C 496 342 566 386 558 440 C 550 478 498 495 432 478 C 378 462 344 436 312 428 C 365 422 408 380 438 315 Z"
              fill="url(#heroOrganicLower)"
            />
            <g stroke="#FDE047" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.85">
              <path d="M 392 428 C 428 444 476 460 512 465" />
              <path d="M 418 406 C 460 422 500 430 532 433" />
            </g>

            {/* 3. LEFT CYBER LEAF (Digital Neural Lattice) */}
            <path
              d="M 410 95 C 350 100 260 158 210 248 C 174 316 178 384 224 432 C 274 480 342 485 406 442 C 360 372 355 256 410 95 Z"
              fill="url(#heroCyberLeaf)"
            />

            {/* 3D Glass Polyhedral Facets */}
            <polygon points="410,95 328,178 286,242 360,226" fill="url(#facetShade1)" opacity="0.75" />
            <polygon points="328,178 210,248 230,334 298,296" fill="url(#facetShade2)" opacity="0.85" />
            <polygon points="286,242 360,226 370,334 298,296" fill="url(#facetShade1)" opacity="0.65" />
            <polygon points="230,334 224,432 310,405 298,296" fill="url(#facetShade2)" opacity="0.9" />
            <polygon points="298,296 370,334 365,424 310,405" fill="url(#facetShade1)" opacity="0.75" />
            <polygon points="310,405 365,424 406,442 350,464" fill="url(#facetShade2)" opacity="0.8" />

            {/* Neural Constellation Connecting Lines */}
            <g stroke="#00E5FF" strokeWidth="2.6" strokeLinecap="round" filter="url(#nodeGlow)">
              <line x1="328" y1="178" x2="286" y2="242" />
              <line x1="286" y1="242" x2="230" y2="334" />
              <line x1="286" y1="242" x2="360" y2="226" />
              <line x1="360" y1="226" x2="370" y2="334" />
              <line x1="298" y1="296" x2="370" y2="334" />
              <line x1="298" y1="296" x2="310" y2="405" />
              <line x1="230" y1="334" x2="298" y2="296" />
              <line x1="230" y1="334" x2="246" y2="414" />
              <line x1="246" y1="414" x2="310" y2="405" />
              <line x1="370" y1="334" x2="350" y2="430" />
              <line x1="310" y1="405" x2="350" y2="430" />
            </g>

            {/* Neural Node Vertices with Luminous Halo & Deep Core */}
            <g filter="url(#nodeGlow)">
              {/* Node 1 */}
              <circle cx="328" cy="178" r="8" fill="#00E5FF" />
              <circle cx="328" cy="178" r="4" fill="#021B2F" />

              {/* Node 2 */}
              <circle cx="286" cy="242" r="9.5" fill="#38BDF8" />
              <circle cx="286" cy="242" r="4.8" fill="#021B2F" />

              {/* Node 3 */}
              <circle cx="360" cy="226" r="8" fill="#00E5FF" />
              <circle cx="360" cy="226" r="4" fill="#021B2F" />

              {/* Node 4 */}
              <circle cx="230" cy="334" r="9.5" fill="#00E5FF" />
              <circle cx="230" cy="334" r="4.8" fill="#021B2F" />

              {/* Node 5 */}
              <circle cx="298" cy="296" r="10" fill="#38BDF8" />
              <circle cx="298" cy="296" r="5.2" fill="#021B2F" />

              {/* Node 6 */}
              <circle cx="370" cy="334" r="9.5" fill="#00E5FF" />
              <circle cx="370" cy="334" r="4.8" fill="#021B2F" />

              {/* Node 7 */}
              <circle cx="310" cy="405" r="8" fill="#38BDF8" />
              <circle cx="310" cy="405" r="4" fill="#021B2F" />

              {/* Node 8 */}
              <circle cx="246" cy="414" r="7" fill="#00E5FF" />
              <circle cx="246" cy="414" r="3.5" fill="#021B2F" />
            </g>

            {/* 4. CENTRAL CHROME METALLIC SILVER SPINE */}
            <path
              d="M 410 95 C 416 142 412 195 406 248 C 398 312 384 376 344 448 C 318 482 282 510 236 524 C 278 514 334 488 376 452 C 418 406 438 328 444 248 C 446 184 428 132 410 95 Z"
              fill="url(#heroSpine)"
              filter="url(#spineGlow)"
            />
            {/* White Specular Core Light */}
            <path
              d="M 410 98 C 418 152 414 228 405 292 C 394 356 368 424 308 486"
              stroke="#FFFFFF"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

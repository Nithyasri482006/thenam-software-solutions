import React from 'react';

export interface ThenamLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'horizontal';
  showSubtitle?: boolean;
}

/* ─── SVG Leaf Emblem (matches Thenam brand: blue/cyan left leaf + green/yellow right leaf) ─── */
const LeafEmblem: React.FC<{ height: number }> = ({ height }) => (
  <svg
    width={height}
    height={height}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <defs>
      <linearGradient id="leftLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D5E8" />
        <stop offset="50%" stopColor="#168BFF" />
        <stop offset="100%" stopColor="#020B16" />
      </linearGradient>
      <linearGradient id="rightUpperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#63E86B" />
        <stop offset="60%" stopColor="#00CDB5" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
      <linearGradient id="rightLowerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#63E86B" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="spineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F4F8FC" />
        <stop offset="50%" stopColor="#A9BACB" />
        <stop offset="100%" stopColor="#0A2030" />
      </linearGradient>
      <filter id="leafGlowSm" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Right upper green leaf */}
    <path
      d="M 44 10 C 52 14 64 26 68 40 C 72 52 66 62 56 66 C 48 70 40 68 36 62 C 42 52 50 38 50 24 C 50 18 47 12 44 10 Z"
      fill="url(#rightUpperGrad)"
    />
    {/* Right lower amber leaf */}
    <path
      d="M 50 44 C 58 52 66 60 60 68 C 55 74 46 74 40 70 C 44 64 48 56 50 44 Z"
      fill="url(#rightLowerGrad)"
      opacity="0.9"
    />
    {/* Left cyan/blue leaf */}
    <path
      d="M 44 10 C 34 12 20 24 14 40 C 10 52 14 64 24 68 C 32 72 40 68 44 62 C 38 52 36 36 44 10 Z"
      fill="url(#leftLeafGrad)"
    />
    {/* Central spine */}
    <path
      d="M 44 10 C 46 20 46 32 44 44 C 42 56 36 66 28 74"
      stroke="url(#spineGrad)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      filter="url(#leafGlowSm)"
    />
    {/* Network nodes on left leaf */}
    <circle cx="26" cy="36" r="2" fill="#00D5E8" opacity="0.9" />
    <circle cx="20" cy="48" r="2" fill="#168BFF" opacity="0.8" />
    <circle cx="30" cy="58" r="1.5" fill="#00D5E8" opacity="0.7" />
    {/* Network lines */}
    <line x1="26" y1="36" x2="20" y2="48" stroke="#00D5E8" strokeWidth="0.8" strokeOpacity="0.5" />
    <line x1="20" y1="48" x2="30" y2="58" stroke="#00D5E8" strokeWidth="0.8" strokeOpacity="0.4" />
  </svg>
);

export const ThenamLogo: React.FC<ThenamLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  showSubtitle = true,
}) => {
  const config = {
    sm: { leafH: 28, titlePx: '15px', subtitlePx: '8px', gap: '6px' },
    md: { leafH: 36, titlePx: '19px', subtitlePx: '9px', gap: '8px' },
    lg: { leafH: 48, titlePx: '24px', subtitlePx: '11px', gap: '10px' },
    xl: { leafH: 64, titlePx: '32px', subtitlePx: '14px', gap: '12px' },
  }[size];

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}>
        <LeafEmblem height={config.leafH * 1.5} />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center group select-none ${className}`}>
        <LeafEmblem height={config.leafH * 2} />
        <div style={{ marginTop: '8px' }}>
          <div
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: config.titlePx,
              letterSpacing: '0.08em',
              background: 'linear-gradient(90deg, #168BFF 0%, #00D5E8 50%, #63E86B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
            }}
          >
            THENAM
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: config.subtitlePx,
              letterSpacing: '0.18em',
              color: '#A9BACB',
              marginTop: '3px',
            }}
          >
            SOFTWARE SOLUTIONS
          </div>
        </div>
      </div>
    );
  }

  // Horizontal lockup (default — navbar)
  return (
    <div className={`flex items-center shrink-0 select-none group ${className}`}
         style={{ gap: config.gap }}>
      <LeafEmblem height={config.leafH} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: config.titlePx,
            letterSpacing: '0.1em',
            background: 'linear-gradient(90deg, #168BFF 0%, #00D5E8 50%, #63E86B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.05,
          }}
        >
          THENAM
        </div>
        {showSubtitle && (
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: config.subtitlePx,
              letterSpacing: '0.16em',
              color: '#A9BACB',
              marginTop: '1px',
              lineHeight: 1,
            }}
          >
            SOFTWARE SOLUTIONS
          </div>
        )}
      </div>
    </div>
  );
};

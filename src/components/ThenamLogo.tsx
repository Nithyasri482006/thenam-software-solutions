import React from 'react';

export interface ThenamLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'horizontal';
  showSubtitle?: boolean;
}

/* ─── Leaf Emblem from uploaded official leaf artwork ─── */
const LeafEmblem: React.FC<{ height: number; className?: string }> = ({ height, className = '' }) => (
  <img
    src="/assets/thenam-leaf-original.png"
    alt="Thenam Software Solutions Leaf Emblem"
    style={{
      height: `${height}px`,
      width: 'auto',
      objectFit: 'contain',
      flexShrink: 0,
      filter: 'drop-shadow(0 0 10px rgba(0, 213, 232, 0.35))',
    }}
    className={className}
    loading="eager"
    decoding="async"
  />
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

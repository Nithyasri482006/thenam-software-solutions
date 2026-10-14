import React from 'react';

export interface ThenamLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'horizontal';
  showSubtitle?: boolean;
}

export const ThenamLogo: React.FC<ThenamLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
}) => {
  // Dimension maps tailored for responsive desktop & mobile presentation
  const sizes = {
    sm: {
      horizontalHeight: 'h-8 sm:h-9',
      horizontalPx: 34,
      fullWidth: 'w-36 sm:w-44',
      iconSize: 'w-8 h-8 sm:w-9 sm:h-9',
    },
    md: {
      horizontalHeight: 'h-10 sm:h-11',
      horizontalPx: 44,
      fullWidth: 'w-48 sm:w-56',
      iconSize: 'w-10 h-10 sm:w-12 sm:h-12',
    },
    lg: {
      horizontalHeight: 'h-14 sm:h-16',
      horizontalPx: 60,
      fullWidth: 'w-64 sm:w-72',
      iconSize: 'w-16 h-16 sm:w-20 sm:h-20',
    },
    xl: {
      horizontalHeight: 'h-20 sm:h-24',
      horizontalPx: 84,
      fullWidth: 'w-80 sm:w-96',
      iconSize: 'w-24 h-24 sm:w-28 sm:h-28',
    },
  }[size];

  // 1. Standalone Leaf Emblem Icon
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}>
        <img
          src="/assets/thenam-leaf-transparent.png"
          alt="Thenam Software Solutions Leaf Emblem"
          className={`${sizes.iconSize} object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(0,185,199,0.35)]`}
          loading="eager"
          decoding="async"
          onError={(e) => {
            // Fallback to leaf icon png if needed
            (e.currentTarget as HTMLImageElement).src = '/assets/thenam-leaf-icon.png';
          }}
        />
      </div>
    );
  }

  // 2. Full Stacked Logo (Emblem on top + Wordmark below) - Matches uploaded brand asset 1:1
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center group select-none ${className}`}>
        <img
          src="/assets/thenam-logo-transparent.png"
          alt="Thenam Software Solutions Official Logo"
          className={`${sizes.fullWidth} h-auto object-contain transition-transform duration-300 group-hover:scale-102 drop-shadow-[0_0_25px_rgba(0,185,199,0.25)]`}
          loading="eager"
          decoding="async"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/assets/thenam-logo.png';
          }}
        />
      </div>
    );
  }

  // 3. Horizontal Lockup (Optimal for Navbar, Header, and Footer)
  return (
    <div className={`flex items-center group shrink-0 select-none ${className}`}>
      <img
        src="/assets/thenam-horizontal-transparent.png"
        alt="Thenam Software Solutions"
        className={`${sizes.horizontalHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-102 drop-shadow-[0_0_15px_rgba(0,185,199,0.25)]`}
        loading="eager"
        decoding="async"
        onError={(e) => {
          // If composite fails, fallback to full logo transparent
          (e.currentTarget as HTMLImageElement).src = '/assets/thenam-logo-transparent.png';
        }}
      />
    </div>
  );
};

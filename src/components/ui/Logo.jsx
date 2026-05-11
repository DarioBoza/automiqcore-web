import React from 'react';

export function LogoIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} text-foreground`}>
      {/* Gear teeth */}
      <path d="M72 30 L82 26 L86 34 L76 38Z" fill="currentColor"/>
      <path d="M82 44 L92 42 L94 50 L84 50Z" fill="currentColor"/>
      <path d="M82 56 L92 58 L90 66 L80 62Z" fill="currentColor"/>
      <path d="M72 70 L80 76 L74 84 L66 76Z" fill="currentColor"/>
      <path d="M56 78 L58 88 L50 90 L48 80Z" fill="currentColor"/>
      <path d="M40 74 L36 84 L28 80 L34 70Z" fill="currentColor"/>
      
      {/* Gear body (half circle on right) */}
      <path d="M50 28 A32 32 0 0 1 50 92 L50 80 A20 20 0 0 0 50 40 Z" fill="currentColor" opacity="0.95"/>
      
      {/* Speed lines (horizontal bars extending left) */}
      <rect x="8" y="34" width="38" height="6" rx="3" fill="#3F16FD"/>
      <rect x="14" y="44" width="34" height="6" rx="3" fill="#3F16FD"/>
      <rect x="6" y="54" width="40" height="6" rx="3" fill="#3F16FD"/>
      <rect x="16" y="64" width="30" height="6" rx="3" fill="#3F16FD"/>
      
      {/* Inner gear cutout accent */}
      <circle cx="58" cy="60" r="12" fill="var(--background)"/>
      <circle cx="58" cy="60" r="6" stroke="#3F16FD" strokeWidth="2" fill="none"/>
    </svg>
  );
}

export function BrandName({ className = "text-xl" }) {
  return (
    <span className={`font-bold tracking-tight ${className}`}>
      <span className="text-brand">A</span>
      <span className="text-foreground">UTOM</span>
      <span className="text-brand">I</span>
      <span className="text-foreground">Q </span>
      <span className="text-brand">-CORE-</span>
    </span>
  );
}

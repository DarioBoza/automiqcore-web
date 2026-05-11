import React from 'react';

export function LogoIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} text-foreground`}>
      {/* Horizontal Bars (Speed lines) */}
      <rect x="25" y="22" width="28" height="7" rx="3.5" fill="#3F16FD" />
      <rect x="15" y="38" width="38" height="7" rx="3.5" fill="#3F16FD" />
      <rect x="5" y="54" width="48" height="7" rx="3.5" fill="#3F16FD" />
      <rect x="15" y="70" width="38" height="7" rx="3.5" fill="#3F16FD" />
      <rect x="25" y="86" width="28" height="7" rx="3.5" fill="#3F16FD" />

      {/* Gear (Right Half) */}
      <path 
        d="M53 25 A25 25 0 0 1 53 95 L53 82 A12 12 0 0 0 53 38 Z" 
        fill="currentColor" 
      />
      
      {/* Gear Teeth */}
      <path d="M72 35 L82 30 L86 38 L76 43Z" fill="currentColor"/>
      <path d="M78 55 L88 55 L88 65 L78 65Z" fill="currentColor"/>
      <path d="M72 75 L82 80 L78 88 L68 83Z" fill="currentColor"/>
      
      {/* Inner accent circle */}
      <circle cx="53" cy="60" r="6" stroke="#3F16FD" strokeWidth="2" fill="none" />
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

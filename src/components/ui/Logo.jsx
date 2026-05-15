'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function LogoIcon({ className = "w-10 h-10" }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR / before hydration, show dark logo (matches default)
  const logoSrc = mounted && resolvedTheme === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <Image
      src={logoSrc}
      alt="AUTOMIQ CORE Logo"
      width={40}
      height={40}
      className={className}
      priority
    />
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

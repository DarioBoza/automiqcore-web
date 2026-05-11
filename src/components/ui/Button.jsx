import React from 'react';
import Link from 'next/link';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-hover shadow-[0_0_20px_rgba(63,22,253,0.3)] hover:shadow-[0_0_25px_rgba(63,22,253,0.5)]",
    secondary: "bg-foreground text-background hover:opacity-90",
    outline: "border border-foreground/20 text-foreground hover:bg-foreground/5 backdrop-blur-sm",
    ghost: "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

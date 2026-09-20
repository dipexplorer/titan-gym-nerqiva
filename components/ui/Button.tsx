'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    'inline-flex items-center justify-center rounded-none uppercase font-extrabold tracking-[0.12em] whitespace-nowrap select-none transition-all duration-300 ease-out cursor-pointer shrink-0 skew-x-[-8deg]';

  const innerStyle = 'skew-x-[8deg] inline-flex items-center gap-2';

  const sizes = {
    sm: 'px-5 py-2.5 text-[11px]',
    md: 'px-8 py-3.5 text-xs sm:text-sm',
    lg: 'px-10 py-4 text-sm sm:text-base',
  };

  const variants = {
    primary:
      'bg-gold text-obsidian hover:bg-gold-hover shadow-[0_4px_20px_rgba(255,184,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,184,0,0.5)] hover:-translate-y-0.5',
    secondary:
      'bg-red-accent text-white hover:bg-red-600 shadow-[0_4px_20px_rgba(255,59,48,0.3)] hover:-translate-y-0.5',
    outline:
      'border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold',
    ghost:
      'text-white/80 hover:text-gold hover:bg-surface',
  };

  const combinedClasses = `${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        <span className={innerStyle}>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span className={innerStyle}>{children}</span>
    </button>
  );
}

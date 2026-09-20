import React from 'react';

interface SectionLabelProps {
  label?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ label, children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`label-micro inline-flex items-center gap-2.5 text-gold bg-surface px-4 py-1.5 rounded-none border border-gold/30 tracking-widest text-xs font-bold uppercase ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
      {label || children}
    </span>
  );
}

'use client';

import { useState } from 'react';

interface HeroFallbackProps {
  className?: string;
}

/**
 * HeroFallback — Mobile / low-power fallback for the liquid ripple shader.
 * Renders a static graded hero background image with a CSS radial pulse on tap/click.
 */
export default function HeroFallback({ className = '' }: HeroFallbackProps) {
  const [pulse, setPulse] = useState<{ x: number; y: number; id: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPulse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`relative overflow-hidden bg-sand bg-gradient-to-br from-sand via-sage-tint/40 to-clay-tint/30 ${className}`}
    >
      {/* Graded texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_40%,rgba(138,154,126,0.25)_0%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(192,133,82,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Radial pulse on tap */}
      {pulse && (
        <span
          key={pulse.id}
          className="absolute w-32 h-32 -ml-16 -mt-16 rounded-full bg-sage-base/30 animate-ping pointer-events-none"
          style={{ left: pulse.x, top: pulse.y }}
        />
      )}
    </div>
  );
}

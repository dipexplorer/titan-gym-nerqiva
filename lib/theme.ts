/**
 * Centralized Design System & Theme Tokens for TITAN GYM
 */

export const THEME_COLORS = {
  obsidian: '#0B0C0E',   // Deep matte black background
  charcoal: '#141619',   // Card container backdrop
  surface: '#1E2126',    // Input fields & elevated surface
  border: '#2A2E35',     // Subtle dark borders

  gold: '#FFB800',       // Primary electric gold accent
  goldHover: '#E5A600',
  red: '#FF3B30',        // High-intensity power red

  textWhite: '#FFFFFF',
  textMuted: '#9CA3AF',
} as const;

export const TYPOGRAPHY = {
  headline: 'font-display', // Bebas Neue / Oswald font
  body: 'font-sans',       // Inter font
  labelMicro: 'label-micro', // Uppercase tracking
} as const;

export const MOTION = {
  durationFast: 0.3,
  durationMedium: 0.6,
  durationSlow: 0.8,
  easePower: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeBreath: [0.16, 1, 0.3, 1] as [number, number, number, number],
} as const;

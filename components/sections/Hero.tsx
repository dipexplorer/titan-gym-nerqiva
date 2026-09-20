'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import RippleHero from '@/components/three/RippleHero';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  const textVar = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 1.2, ease: EASE },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full flex items-center overflow-hidden bg-sand pt-32 pb-20 lg:pt-40 lg:pb-32"
    >
      {/* ── Interactive Liquid Water Ripple Shader Layer ───────────────── */}
      <RippleHero />

      {/* ── Soft Ambient Lighting & Subtle Radial Gradient Overlays ──── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_40%,rgba(214,222,207,0.55)_0%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(233,210,187,0.40)_0%,transparent_70%)] pointer-events-none" />

      {/* ── Hero Content Container ───────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-8 max-w-2xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVar}
            >
              <SectionLabel>Movement & Mindful Sanctuary</SectionLabel>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVar}
              className="font-display text-charcoal leading-[1.08] tracking-tight font-light"
              style={{ fontSize: 'clamp(2.8rem, 5.8vw, 5.25rem)' }}
            >
              A Place to Breathe,<br />
              <em className="text-terracotta-shade font-serif italic font-normal">Move, and Belong.</em>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVar}
              className="text-charcoal-tone text-lg lg:text-xl leading-relaxed font-light max-w-xl"
            >
              Boutique wellness, reform pilates, breathwork, and mindful strength — set within a serene, light-filled studio crafted for quiet confidence.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVar}
              className="flex flex-wrap gap-4 pt-3"
            >
              <Button as="a" href="#schedule" variant="primary">
                Explore Schedule
              </Button>
              <Button as="a" href="#sanctuary" variant="outline">
                Our Philosophy
              </Button>
            </motion.div>

            {/* Key Micro Metrics */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVar}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-sand-tone/40 mt-4"
            >
              {[
                { value: '12 Max', label: 'Class Intimacy' },
                { value: '24+', label: 'Weekly Sessions' },
                { value: '100%', label: 'Natural Sunlight' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-serif text-2xl text-charcoal font-normal">{s.value}</span>
                  <span className="label-micro text-charcoal-tint text-[10px] mt-1 tracking-[0.2em]">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Tactile Studio Imagery Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-md aspect-3/4 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(46,44,41,0.08)] border border-sand-tone/40 bg-sand-tint group">
              {/* Soft studio scene SVG representation */}
              <div className="absolute inset-0 bg-linear-to-tr from-sage-tint/60 via-sand-tint to-terracotta-tint/40 flex items-center justify-center p-8">
                <div className="text-center flex flex-col items-center gap-6">
                  <div className="w-24 h-24 rounded-full border border-sage-base/30 bg-sand-tint/80 backdrop-blur-md flex items-center justify-center shadow-inner">
                    <span className="font-serif text-3xl text-sage-shade italic">aura</span>
                  </div>
                  <div className="space-y-2">
                    <span className="label-micro text-terracotta-shade block text-[10px]">Natural Light Studio</span>
                    <p className="font-serif text-charcoal text-2xl font-light italic">
                      &ldquo;Breath is the bridge between movement and mind.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle glass float badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-sand-tint/90 backdrop-blur-md border border-sand-tone/40 rounded-xl flex items-center justify-between shadow-sm">
                <div>
                  <span className="label-micro text-sage-shade text-[9px] block tracking-[0.2em]">Sanctuary Space</span>
                  <span className="font-serif text-charcoal text-base">Studio No. 01</span>
                </div>
                <span className="text-terracotta-shade text-xs font-serif italic">Pure Sunlight</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

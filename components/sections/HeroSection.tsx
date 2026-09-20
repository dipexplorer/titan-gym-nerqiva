'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HeroSection() {
  const scrollToPass = () => {
    const el = document.getElementById('claim-pass');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToZones = () => {
    const el = document.getElementById('zones');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-obsidian pt-32 pb-12 px-6 md:px-12 lg:px-20 border-b border-border-dark">
      {/* Dark High-Octane Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/titan_hero.png"
          alt="Titan Gym Heavy Powerlifting Rack"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/70 to-obsidian/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-obsidian/60 to-obsidian" />
      </div>

      <div className="z-10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center py-12 my-auto">
        <ScrollReveal delay={0.1} direction="down">
          <div className="inline-flex justify-center mb-6">
            <SectionLabel label="PREMIER ATHLETIC PERFORMANCE CENTER" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.92] mb-8">
            FORGE YOUR PEAK <br />
            <span className="text-gold font-extrabold">ATHLETIC PERFORMANCE</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.35} direction="up">
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Uncompromising strength, Olympic powerlifting, high-intensity turf conditioning, and advanced cryo recovery. No excuses. Pure results.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button variant="primary" size="lg" onClick={scrollToPass}>
              START FREE 7-DAY TRIAL
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToZones}>
              EXPLORE TRAINING ZONES
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Athletic Stats Banner */}
      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-border-dark/80 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <ScrollReveal delay={0.6} direction="up">
            <div className="p-4 bg-charcoal/60 border border-border-dark">
              <span className="font-display text-3xl sm:text-4xl text-gold font-extrabold block">25,000</span>
              <span className="label-micro text-[10px] text-gray-400">SQ FT FACILITY</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7} direction="up">
            <div className="p-4 bg-charcoal/60 border border-border-dark">
              <span className="font-display text-3xl sm:text-4xl text-white font-extrabold block">100+</span>
              <span className="label-micro text-[10px] text-gray-400">HAMMER STRENGTH RACKS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.8} direction="up">
            <div className="p-4 bg-charcoal/60 border border-border-dark">
              <span className="font-display text-3xl sm:text-4xl text-gold font-extrabold block">24/7</span>
              <span className="label-micro text-[10px] text-gray-400">UNRESTRICTED ACCESS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.9} direction="up">
            <div className="p-4 bg-charcoal/60 border border-border-dark">
              <span className="font-display text-3xl sm:text-4xl text-red-accent font-extrabold block">CRYO</span>
              <span className="label-micro text-[10px] text-gray-400">RECOVERY LAB</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

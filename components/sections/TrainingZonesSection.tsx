'use client';

import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';

const zones = [
  {
    title: 'The Iron Forge',
    subtitle: 'POWERLIFTING & OLYMPIC PLATFORMS',
    description: 'Calibrated Eleiko competition plates, Rogue Monster racks, specialty bars, and custom wooden deadlift platforms built for maximum poundage.',
    specs: ['24 Rogue Power Racks', 'Calibrated Steel Plates', 'Chalk Stations'],
    image: '/images/titan_hero.png',
  },
  {
    title: 'Sled & Conditioning Turf',
    subtitle: '30M SPRINT & METABOLIC TRACK',
    description: 'High-density indoor turf track with heavy sleds, Concept2 rowers, SkiErgs, assault air bikes, and kettlebell arrays for metabolic conditioning.',
    specs: ['30-Meter Turf Track', 'Heavy Sleds & Tanks', 'Assault Air Bikes'],
    image: '/images/turf_zone.png',
  },
  {
    title: 'Combat & Striking Arena',
    subtitle: 'BOXING RING & MMA TURF',
    description: 'Full-size regulation boxing ring, heavy leather bags, speed bags, double-end bags, and dedicated sparring turf for combat athletes.',
    specs: ['Regulation Boxing Ring', '12 Heavy Leather Bags', 'Sparring Turf'],
    image: '/images/combat_zone.png',
  },
  {
    title: 'Cryo & Bio-Recovery Lab',
    subtitle: 'COLD PLUNGE & INFRARED SAUNA',
    description: 'Scientific post-workout recovery featuring 40°F cold plunge tubs, full-spectrum infrared saunas, and NormaTec compression boots.',
    specs: ['40°F Cold Plunges', 'Infrared Saunas', 'NormaTec Compression'],
    image: '/images/recovery_zone.png',
  },
];

export default function TrainingZonesSection() {
  return (
    <section id="zones" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-obsidian border-b border-border-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <ScrollReveal delay={0.1} direction="down">
              <SectionLabel label="FACILITY ARCHITECTURE" />
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <h2 className="font-display text-4xl sm:text-6xl text-white mt-4 tracking-wide">
                4 SPECIALIZED <br />
                <span className="text-gold">ATHLETIC TRAINING ZONES</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} direction="fade">
            <p className="text-sm sm:text-base text-gray-400 font-sans font-light max-w-md leading-relaxed">
              Every inch engineered for peak output. State-of-the-art strength racks, sprint turf, combat striking, and medical-grade recovery.
            </p>
          </ScrollReveal>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {zones.map((zone, idx) => (
            <ScrollReveal key={zone.title} delay={0.1 + idx * 0.12} direction="up">
              <div className="h-full flex flex-col justify-between rounded-none bg-charcoal border border-border-dark hover:border-gold transition-all duration-400 hover:-translate-y-1.5 overflow-hidden group">
                {/* Zone Image Header */}
                <div className="relative w-full h-64 overflow-hidden bg-surface">
                  <Image
                    src={zone.image}
                    alt={zone.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t  from-charcoal via-charcoal/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-gold text-obsidian font-display text-sm font-extrabold px-3 py-1 skew-x-[-8deg]">
                    ZONE 0{idx + 1}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="label-micro text-xs text-gold font-bold tracking-widest block mb-2">
                      {zone.subtitle}
                    </span>
                    <h3 className="font-display text-3xl text-white mb-3 group-hover:text-gold transition-colors tracking-wide">
                      {zone.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-sans font-light leading-relaxed mb-6">
                      {zone.description}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="border-t border-border-dark pt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans text-gray-300">
                    {zone.specs.map((spec) => (
                      <span key={spec} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

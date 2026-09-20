'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const programs = [
  {
    title: 'Titan Power & Strength',
    category: 'BARBELL & POWERLIFTING',
    duration: '60 MINS',
    description: 'Periodized barbell strength programming focusing on deadlift, bench press, and squat mechanics. Built for raw power gain.',
    features: ['1RM Testing', 'Video Bar Speed Tracking', 'Custom Weight Belt Usage'],
  },
  {
    title: 'HIIT Sled & Turf Sprint',
    category: 'METABOLIC CONDITIONING',
    duration: '45 MINS',
    description: 'High-octane metabolic intervals combining heavy tank sled pushes, assault bikes, box jumps, and kettlebell swings.',
    features: ['Heart Rate Telemetry', 'High-Intensity Sprints', 'V02 Max Elevation'],
  },
  {
    title: 'Combat Boxing & Striking',
    category: 'FIGHT CONDITIONING',
    duration: '50 MINS',
    description: 'Authentic fight conditioning featuring heavy bag combinations, slip bag defense, jump rope endurance, and mitt work.',
    features: ['Heavy Bag Rounds', 'Hand Wrapping Station', 'Footwork Mechanics'],
  },
  {
    title: 'Pro Hypertrophy & Sculpting',
    category: 'BODYBUILDING & ISOLATION',
    duration: '60 MINS',
    description: 'High-volume hypertrophy workouts using Hammer Strength iso-lateral machines, cable towers, and dumbbells up to 150 lbs.',
    features: ['Time Under Tension', 'Dumbbells Up To 150 lbs', 'Targeted Pump Circuits'],
  },
];

export default function ProgramsSection() {
  const scrollToPass = () => {
    const el = document.getElementById('claim-pass');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-charcoal border-b border-border-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <ScrollReveal delay={0.1} direction="down">
              <SectionLabel label="PERFORMANCE PROGRAMMING" />
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <h2 className="font-display text-4xl sm:text-6xl text-white mt-4 tracking-wide">
                RESULTS-DRIVEN <br />
                <span className="text-gold">ATHLETIC PROGRAMS</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} direction="fade">
            <p className="text-sm sm:text-base text-gray-400 font-sans font-light max-w-md leading-relaxed">
              Designed by strength coaches and kinesiologists. Programs calibrated for raw power, lean muscle growth, and metabolic endurance.
            </p>
          </ScrollReveal>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((program, idx) => (
            <ScrollReveal key={program.title} delay={0.1 + idx * 0.12} direction="up">
              <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-none bg-obsidian border border-border-dark hover:border-gold transition-all duration-400 hover:-translate-y-1.5 group">
                <div>
                  {/* Category & Duration Tag */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="px-3 py-1 bg-surface text-gold label-micro text-[10px] border border-gold/30 font-bold">
                      {program.category}
                    </span>
                    <span className="label-micro text-xs text-gray-400 font-bold">
                      {program.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-3xl text-white mb-3 group-hover:text-gold transition-colors tracking-wide">
                    {program.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 font-sans font-light leading-relaxed mb-8">
                    {program.description}
                  </p>
                </div>

                {/* Features & Action */}
                <div>
                  <div className="border-t border-border-dark pt-6 mb-8 flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans text-gray-300">
                    {program.features.map((feat) => (
                      <span key={feat} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-accent" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" size="md" onClick={scrollToPass} className="w-full justify-center">
                    TEST THIS PROGRAM ON TRIAL PASS
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

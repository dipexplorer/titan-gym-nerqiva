'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';

const pillars = [
  {
    number: '01',
    title: 'Mindful Precision',
    description: 'Every movement is deliberate. We prioritize mechanical alignment and muscle engagement over chaotic exhaustion.',
  },
  {
    number: '02',
    title: 'Breath-Led Cadence',
    description: 'Breathing is not an afterthought — it is the foundation of energy, posture, and nervous system regulation.',
  },
  {
    number: '03',
    title: 'Acoustic Resonance',
    description: 'Our studios feature bespoke sound treatment, integrating 432Hz acoustic therapy into every restoration session.',
  },
  {
    number: '04',
    title: 'Unhurried Sanctuary',
    description: 'We limit class sizes to 8 practitioners to preserve room, personal feedback, and absolute tranquility.',
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-sand border-t border-sand-tone/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <ScrollReveal delay={0.1} direction="down">
            <SectionLabel label="Our Philosophy" />
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-ink-shade max-w-3xl mt-4 leading-[1.12]">
              Movement is not punishment. <br />
              <span className="italic font-light text-sage-shade">It is a conversation with the self.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Narrative Copy */}
          <div className="lg:col-span-5 space-y-6 text-ink-tone font-sans leading-relaxed text-base sm:text-lg font-light">
            <ScrollReveal delay={0.3} direction="up">
              <p>
                In a world obsessed with hyper-intensity, noise, and constant output, AURA was born as a quiet counterbalance. We believe true physical mastery stems from body intelligence, intentional resistance, and deep restoration.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="up">
              <p>
                Our curated reformer pilates machines, custom-tuned wooden apparatus, and sound baths are designed to quiet the mind while building resilience, posture, and graceful strength.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} direction="up">
              <div className="pt-4 p-6 rounded-2xl bg-sage-tint/30 border border-sage-tone/20">
                <blockquote className="font-display italic text-xl text-sage-shade leading-snug">
                  &ldquo;To move slowly is to hear what the body has been whispering all along.&rdquo;
                </blockquote>
                <cite className="block label-micro text-[10px] text-ink-tone mt-3 not-italic">
                  — Elena Vance, Founder & Lead Instructor
                </cite>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {pillars.map((pillar, idx) => (
              <ScrollReveal key={pillar.number} delay={0.2 + idx * 0.1} direction="up">
                <div className="p-8 rounded-2xl bg-sand-tint border border-sand-tone/40 hover:border-sage-tone/40 transition-all duration-500 hover:-translate-y-1 group">
                  <span className="label-micro text-xs text-sage-shade font-medium tracking-widest block mb-4">
                    {pillar.number}
                  </span>
                  <h3 className="font-display text-2xl text-ink-shade mb-3 group-hover:text-sage-shade transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-ink-tone font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

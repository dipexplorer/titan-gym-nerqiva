'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

const programs = [
  {
    title: 'Reform Pilates & Alignment',
    category: 'Core & Posture',
    duration: '50 Min',
    level: 'All Levels',
    description: 'Precision spring-resistance training designed to lengthen muscles, align the spine, and build deep abdominal stability.',
    accent: 'bg-sage-tint/40 border-sage-base/30 text-sage-shade',
    tag: 'Popular',
  },
  {
    title: 'Breathwork & Sound Sanctuary',
    category: 'Restorative & Vagus Reset',
    duration: '45 Min',
    level: 'Gentle',
    description: 'Guided Pranayama breath patterns paired with acoustic Tibetan sound bath vibrations to release physical stress and quiet the mind.',
    accent: 'bg-terracotta-tint/40 border-terracotta-base/30 text-terracotta-shade',
    tag: 'Restorative',
  },
  {
    title: 'Vinyasa & Fluid Movement',
    category: 'Flexibility & Flow',
    duration: '60 Min',
    level: 'Open Level',
    description: 'A rhythmic flow linking movement with continuous breath. Expands hip mobility, opens the chest, and builds graceful strength.',
    accent: 'bg-sand-tint border-sand-tone/40 text-charcoal',
    tag: 'Signature',
  },
  {
    title: 'Functional Strength & Longevity',
    category: 'Joint Health & Resistance',
    duration: '55 Min',
    level: 'Progressive',
    description: 'Mindful kettlebell work, landmine rotations, and bodyweight conditioning built for joint longevity and functional energy.',
    accent: 'bg-sage-tint/40 border-sage-base/30 text-sage-shade',
    tag: 'Strength',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-32 lg:py-40 bg-sand relative overflow-hidden border-t border-sand-tone/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="flex flex-col gap-4 max-w-xl">
            <SectionLabel>Movement Disciplines</SectionLabel>
            <h2
              className="font-display text-charcoal font-light leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Classes Crafted for<br />
              <em className="text-terracotta-shade font-serif italic font-normal">Intentional Movement.</em>
            </h2>
          </div>
          <p className="text-charcoal-tone text-base leading-relaxed max-w-md font-light">
            Every session is capped at 12 participants to ensure hands-on cueing, space to breathe, and personalized attention from master instructors.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="bg-sand-tint rounded-2xl p-8 lg:p-10 border border-sand-tone/30 shadow-[0_10px_30px_rgba(46,44,41,0.03)] hover:shadow-[0_20px_45px_rgba(46,44,41,0.07)] transition-all duration-400 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`label-micro text-[9px] px-3 py-1 rounded-full border ${prog.accent}`}>
                    {prog.category}
                  </span>
                  <span className="label-micro text-charcoal-tint text-[10px] tracking-widest">
                    {prog.duration} • {prog.level}
                  </span>
                </div>

                <h3 className="font-serif text-2xl lg:text-3xl text-charcoal font-light mb-4 group-hover:text-terracotta-shade transition-colors duration-300">
                  {prog.title}
                </h3>

                <p className="text-charcoal-tone text-sm lg:text-base leading-relaxed font-light mb-8">
                  {prog.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-sand-tone/30">
                <span className="text-xs text-sage-shade font-medium tracking-wide">12 Participants Max</span>
                <a
                  href="#schedule"
                  className="label-micro text-terracotta-shade hover:text-charcoal transition-colors tracking-[0.2em] flex items-center gap-2 group/btn"
                >
                  View Schedule <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-8 rounded-2xl bg-sage-tint/30 border border-sage-base/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-serif text-xl text-charcoal font-light">New to AURA?</span>
            <p className="text-xs text-charcoal-tone font-light">Experience 3 days of unlimited classes with our Complimentary Sanctuary Trial Pass.</p>
          </div>
          <Button as="a" href="#contact" variant="primary" className="flex-shrink-0">
            Claim Free Trial Pass
          </Button>
        </div>

      </div>
    </section>
  );
}

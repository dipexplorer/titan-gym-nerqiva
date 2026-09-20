'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';

const instructors = [
  {
    name: 'Elena Rostova',
    role: 'Lead Reform & Alignment',
    bio: 'Former classical dancer with 12 years in biomechanics & Pilates. Focuses on lumbar decompression and graceful core stability.',
    specialties: 'Reform Pilates · Spine Alignment',
  },
  {
    name: 'Marcus Vance',
    role: 'Pranayama & Sound Master',
    bio: 'Trained in Rishikesh and Kyoto. Combines acoustic sound bath frequencies with deep diaphragmatic breath conditioning.',
    specialties: 'Sound Bath · Vagus Reset',
  },
  {
    name: 'Sophia Lin',
    role: 'Vinyasa & Mobility Lead',
    bio: 'Dedicated to fluid somatic movement and spinal longevity. Creates luminous, breath-guided flows for all experience levels.',
    specialties: 'Vinyasa Flow · Hip Mobility',
  },
];

export default function Instructors() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Soft parallax translation (~10px travel max for quiet elegance)
  const yOffset = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section
      ref={sectionRef}
      id="instructors"
      className="py-32 lg:py-40 bg-sand-tint border-t border-sand-tone/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-20">
          <SectionLabel className="mb-4">Master Teachers</SectionLabel>
          <h2
            className="font-display text-charcoal font-light leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
          >
            Guided by Wisdom,<br />
            <em className="text-sage-shade font-serif italic font-normal">Grounded in Practice.</em>
          </h2>
          <p className="text-charcoal-tone text-base leading-relaxed mt-6 font-light">
            Our instructors bring decades of specialized study across anatomy, somatic movement, and traditional breathwork.
          </p>
        </div>

        {/* Instructor Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {instructors.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-sand rounded-2xl border border-sand-tone/40 overflow-hidden shadow-[0_10px_35px_rgba(46,44,41,0.04)] flex flex-col justify-between p-8"
            >
              <div>
                {/* Soft Parallax Portrait Box */}
                <motion.div
                  style={{ y: yOffset }}
                  className="w-full aspect-[4/5] rounded-xl bg-gradient-to-br from-sage-tint via-sand-tone/30 to-terracotta-tint/40 mb-6 flex flex-col items-center justify-center p-6 border border-sand-tone/40 relative overflow-hidden"
                >
                  <div className="w-20 h-20 rounded-full border border-sage-base/40 bg-sand/80 flex items-center justify-center shadow-inner mb-4">
                    <span className="font-serif text-2xl text-sage-shade">{inst.name[0]}</span>
                  </div>
                  <span className="label-micro text-terracotta-shade text-[9px] tracking-[0.2em]">{inst.specialties}</span>
                </motion.div>

                <h3 className="font-serif text-2xl text-charcoal font-light mb-1">{inst.name}</h3>
                <span className="label-micro text-sage-shade text-[10px] block mb-4 tracking-[0.2em]">{inst.role}</span>
                <p className="text-charcoal-tone text-sm leading-relaxed font-light">{inst.bio}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-sand-tone/30 flex items-center justify-between">
                <span className="label-micro text-charcoal-tint text-[9px]">Private Consult Available</span>
                <a href="#schedule" className="text-xs text-charcoal font-medium hover:text-terracotta-shade transition-colors">
                  Book Session →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

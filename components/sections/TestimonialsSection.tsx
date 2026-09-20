'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';

const testimonials = [
  {
    id: 1,
    quote:
      "AURA completely shifted how I view movement. I used to dread workout classes because of the chaotic noise; here, I leave every session feeling centered, grounded, and graceful.",
    author: "Sophia Chen",
    role: "Architect & Practitioner",
    practice: "Reformer Precision Member",
  },
  {
    id: 2,
    quote:
      "The 432Hz sound baths combined with reformer pilates relieved my chronic lower back tightness in 6 weeks. The space feels like a quiet sanctuary, not a commercial gym.",
    author: "David Miller",
    role: "Design Director",
    practice: "Sanctuary Unlimited Member",
  },
  {
    id: 3,
    quote:
      "Small class sizes mean Elena and Marcus actually correct your mechanical alignment. It feels like private personal instruction in a stunning peaceful setting.",
    author: "Amara Okafor",
    role: "Orthopedic Surgeon",
    practice: "Rhythm Practice Member",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000); // 7s generous pause
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-clay-tint/30 border-t border-sand-tone/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1} direction="down">
            <div className="inline-flex justify-center">
              <SectionLabel label="Practitioner Reflections" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h2 className="font-display text-3xl sm:text-5xl text-ink-shade mt-4 leading-tight">
              Words From Our <br />
              <span className="italic font-light text-clay-shade">Quiet Community</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[260px] sm:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-3xl mx-auto px-4"
            >
              <blockquote className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-ink-shade leading-snug mb-8">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>

              <div>
                <cite className="block font-sans font-medium text-base text-clay-shade not-italic">
                  {testimonials[active].author}
                </cite>
                <span className="block text-xs font-sans text-ink-tone font-light mt-1">
                  {testimonials[active].role} • {testimonials[active].practice}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Controls */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                active === i ? 'w-8 bg-clay-shade' : 'w-2.5 bg-clay-tone/40 hover:bg-clay-tone'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

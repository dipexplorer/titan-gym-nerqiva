'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const reviews = [
  {
    quote: "AURA completely transformed how I view movement. It’s the first space where I never felt rushed or compared — just pure, restorative breath and strength.",
    author: "Claire D.",
    detail: "Member for 2 Years • Reform Pilates",
  },
  {
    quote: "The acoustic sound baths on Wednesday evenings are sacred to me. My stress levels drop the moment I step through the natural light studio doors.",
    author: "Julien M.",
    detail: "Member for 1 Year • Breathwork & Sound",
  },
  {
    quote: "Small class sizes mean the instructors actually correct your alignment. My chronic lower back pain vanished within 6 weeks of Reform practice.",
    author: "Ananya R.",
    detail: "Member for 3 Years • Vinyasa & Alignment",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Slow auto-advancing carousel (~6.5s pause)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 lg:py-40 bg-sand border-t border-sand-tone/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">

        <SectionLabel className="mb-6">Member Reflections</SectionLabel>

        <div className="min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-6"
            >
              <span className="font-serif text-6xl text-terracotta-tint leading-none select-none">&ldquo;</span>
              <p className="font-serif text-2xl lg:text-3xl text-charcoal font-light leading-relaxed italic max-w-2xl">
                {reviews[index].quote}
              </p>
              <div className="mt-2">
                <div className="font-medium text-charcoal text-base tracking-wide">{reviews[index].author}</div>
                <div className="label-micro text-charcoal-tint text-[10px] tracking-[0.2em] mt-1">{reviews[index].detail}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Progress Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                index === i ? 'w-8 bg-terracotta-shade' : 'w-2 bg-sand-tone/50 hover:bg-sand-tone'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

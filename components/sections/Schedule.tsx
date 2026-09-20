'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const scheduleData: Record<string, Array<{ time: string; title: string; instructor: string; duration: string; spots: number; studio: string }>> = {
  Monday: [
    { time: '07:30 AM', title: 'Morning Reform Pilates', instructor: 'Elena Rostova', duration: '50 Min', spots: 3, studio: 'Studio 01' },
    { time: '09:00 AM', title: 'Vinyasa Flow & Breath', instructor: 'Sophia Lin', duration: '60 Min', spots: 5, studio: 'Studio 02' },
    { time: '05:30 PM', title: 'Sound Bath Sanctuary', instructor: 'Marcus Vance', duration: '45 Min', spots: 2, studio: 'Sanctuary Room' },
  ],
  Tuesday: [
    { time: '08:00 AM', title: 'Spine Alignment & Reform', instructor: 'Elena Rostova', duration: '50 Min', spots: 4, studio: 'Studio 01' },
    { time: '10:00 AM', title: 'Functional Strength & Longevity', instructor: 'Marcus Vance', duration: '55 Min', spots: 6, studio: 'Movement Hall' },
    { time: '06:00 PM', title: 'Gentle Restorative Flow', instructor: 'Sophia Lin', duration: '60 Min', spots: 1, studio: 'Studio 02' },
  ],
  Wednesday: [
    { time: '07:30 AM', title: 'Pranayama & Meditation', instructor: 'Marcus Vance', duration: '45 Min', spots: 4, studio: 'Sanctuary Room' },
    { time: '09:30 AM', title: 'Reform Pilates Intermediate', instructor: 'Elena Rostova', duration: '50 Min', spots: 2, studio: 'Studio 01' },
    { time: '05:00 PM', title: 'Sunset Vinyasa Flow', instructor: 'Sophia Lin', duration: '60 Min', spots: 5, studio: 'Studio 02' },
  ],
  Thursday: [
    { time: '08:00 AM', title: 'Core Alignment Reform', instructor: 'Elena Rostova', duration: '50 Min', spots: 3, studio: 'Studio 01' },
    { time: '11:00 AM', title: 'Breathwork & Sound Bath', instructor: 'Marcus Vance', duration: '45 Min', spots: 6, studio: 'Sanctuary Room' },
    { time: '06:30 PM', title: 'Mindful Mobility & Kettlebell', instructor: 'Marcus Vance', duration: '55 Min', spots: 4, studio: 'Movement Hall' },
  ],
  Friday: [
    { time: '07:30 AM', title: 'Sunrise Fluid Movement', instructor: 'Sophia Lin', duration: '60 Min', spots: 5, studio: 'Studio 02' },
    { time: '09:00 AM', title: 'Reform & Stretch', instructor: 'Elena Rostova', duration: '50 Min', spots: 2, studio: 'Studio 01' },
    { time: '05:30 PM', title: 'Friday Evening Sound Reset', instructor: 'Marcus Vance', duration: '45 Min', spots: 1, studio: 'Sanctuary Room' },
  ],
  Saturday: [
    { time: '09:00 AM', title: 'Weekend Full Reform', instructor: 'Elena Rostova', duration: '50 Min', spots: 4, studio: 'Studio 01' },
    { time: '10:30 AM', title: 'Mindful Strength & Balance', instructor: 'Marcus Vance', duration: '55 Min', spots: 3, studio: 'Movement Hall' },
  ],
  Sunday: [
    { time: '10:00 AM', title: 'Sunday Restorative Yoga', instructor: 'Sophia Lin', duration: '75 Min', spots: 6, studio: 'Studio 02' },
    { time: '04:00 PM', title: 'Deep Sound Bath & Breath', instructor: 'Marcus Vance', duration: '60 Min', spots: 2, studio: 'Sanctuary Room' },
  ],
};

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [reservedClass, setReservedClass] = useState<string | null>(null);

  return (
    <section id="schedule" className="py-32 lg:py-40 bg-sand border-t border-sand-tone/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4 max-w-xl">
            <SectionLabel>Class Schedule</SectionLabel>
            <h2
              className="font-display text-charcoal font-light leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
            >
              Reserve Your Space in the<br />
              <em className="text-terracotta-shade font-serif italic font-normal">Sanctuary.</em>
            </h2>
          </div>
          <p className="text-charcoal-tone text-sm leading-relaxed max-w-xs font-light">
            Select a day to view upcoming sessions. All equipment, mats, and organic teas are provided upon arrival.
          </p>
        </div>

        {/* Days Selector Tabs */}
        <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-full label-micro text-[10px] transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedDay === day
                  ? 'bg-charcoal-shade text-sand-tint shadow-md'
                  : 'bg-sand-tint text-charcoal-tone hover:text-charcoal border border-sand-tone/40'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Class List */}
        <div className="flex flex-col gap-4">
          {scheduleData[selectedDay]?.map((item, i) => (
            <motion.div
              key={`${item.time}-${item.title}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-sand-tint p-6 lg:p-8 rounded-xl border border-sand-tone/30 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-sage-base/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <span className="font-serif text-2xl text-terracotta-shade font-light min-w-[110px]">
                  {item.time}
                </span>

                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-xl lg:text-2xl text-charcoal font-light">{item.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-charcoal-tone font-light">
                    <span>Inst: {item.instructor}</span>
                    <span>•</span>
                    <span>{item.studio}</span>
                    <span>•</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-sand-tone/20">
                <span className="label-micro text-[10px] text-sage-shade bg-sage-tint/50 px-3 py-1 rounded-full border border-sage-base/20">
                  {item.spots} {item.spots === 1 ? 'Spot' : 'Spots'} Left
                </span>

                <Button
                  onClick={() => setReservedClass(item.title)}
                  variant="outline"
                  className="py-2 px-5 text-[10px]"
                >
                  Reserve Spot
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Reservation Confirmation Modal */}
      <AnimatePresence>
        {reservedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-shade/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setReservedClass(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-sand p-8 lg:p-10 rounded-2xl max-w-md w-full border border-sand-tone/40 shadow-2xl text-center flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 h-14 rounded-full bg-sage-tint border border-sage-base/30 flex items-center justify-center text-sage-shade text-2xl font-serif">
                ✦
              </div>
              <div className="space-y-2">
                <span className="label-micro text-terracotta-shade text-[9px] block">SPOT RESERVED</span>
                <h3 className="font-serif text-2xl text-charcoal font-light">{reservedClass}</h3>
                <p className="text-charcoal-tone text-xs font-light leading-relaxed">
                  Your spot is held for 15 minutes. Please arrive 10 minutes prior to class start time. Organic tea and mats are prepared for you.
                </p>
              </div>
              <Button onClick={() => setReservedClass(null)} variant="primary" className="w-full justify-center">
                Close & Return
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

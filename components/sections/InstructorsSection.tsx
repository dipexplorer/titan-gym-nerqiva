'use client';

import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';

const instructors = [
  {
    name: 'Elena Vance',
    role: 'Founder & Master Reformer Lead',
    credentials: '12+ Years • Classical & Contemporary Reformer',
    bio: 'Former professional dancer dedicated to refined posture, spinal decompression, and effortless grace.',
    quote: 'True strength comes from moving with gravity, not fighting it.',
    image: '/images/elena_vance.png',
  },
  {
    name: 'Marcus Thorne',
    role: 'Sound Healer & Somatic Lead',
    credentials: 'Kinesiologist • 432Hz Sound Practitioner',
    bio: 'Integrates biomechanics with acoustic sound baths to create deep parasympathetic nervous system recovery.',
    quote: 'Sound is tactile vibration; it relaxes muscles deeper than touch alone.',
    image: '/images/marcus_thorne.png',
  },
  {
    name: 'Maya Lin',
    role: 'Postural Alignment & Mobility',
    credentials: 'M.Sc. Biomechanics • Injury Rehabilitation',
    bio: 'Specializes in joint longevity, core stabilization, and restoring natural movement mechanics after strain.',
    quote: 'When the spine is in harmony, energy flows uninterrupted.',
    image: '/images/maya_lin.png',
  },
];

export default function InstructorsSection() {
  return (
    <section id="instructors" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-sand border-t border-sand-tone/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <ScrollReveal delay={0.1} direction="down">
            <div className="inline-flex justify-center">
              <SectionLabel label="Master Teachers" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h2 className="font-display text-3xl sm:text-5xl text-ink-shade mt-4 leading-tight">
              Guided by Experienced <br />
              <span className="italic font-light text-sage-shade">Movement Mentors</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <p className="text-sm sm:text-base text-ink-tone font-sans font-light mt-4 leading-relaxed">
              Our resident instructors hold advanced degrees in biomechanics, classical pilates certifications, and acoustic sound healing.
            </p>
          </ScrollReveal>
        </div>

        {/* Roster Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {instructors.map((instructor, idx) => (
            <ScrollReveal key={instructor.name} delay={0.15 + idx * 0.15} direction="up">
              <div className="h-full flex flex-col justify-between rounded-3xl bg-sand-tint border border-sand-tone/50 overflow-hidden shadow-xs hover:shadow-md transition-all duration-500 hover:-translate-y-2 group">
                {/* Editorial Instructor Photo Header */}
                <div className="relative w-full h-80 overflow-hidden bg-sand-tone/20">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sand-tint via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="label-micro text-[10px] text-sage-shade font-medium tracking-widest block mb-2">
                      {instructor.role}
                    </span>
                    <h3 className="font-display text-2xl text-ink-shade mb-1 group-hover:text-sage-shade transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="text-xs text-ink-tone/70 font-sans mb-4">
                      {instructor.credentials}
                    </p>
                    <p className="text-sm text-ink-tone font-light leading-relaxed mb-6">
                      {instructor.bio}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="border-t border-sand-tone/30 pt-4">
                    <p className="font-display italic text-xs text-sage-shade leading-snug">
                      &ldquo;{instructor.quote}&rdquo;
                    </p>
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

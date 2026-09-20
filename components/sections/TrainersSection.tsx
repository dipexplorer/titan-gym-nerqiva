'use client';

import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';

const coaches = [
  {
    name: 'Jaxson Vance',
    role: 'Head Strength & Powerlifting Coach',
    credentials: 'M.Sc. Kinesiology • CSCS Certified • 10+ Yrs Pro Coaching',
    bio: 'Former national powerlifting champion specializing in raw squat/deadlift mechanics, nervous system adaptation, and maximum strength output.',
    image: '/images/coach_jaxson.png',
  },
  {
    name: 'Marcus Thorne',
    role: 'Combat & High-Intensity Conditioning Lead',
    credentials: 'Pro Fighter • USA Boxing Coach • Metabolic Specialist',
    bio: 'Pushes athletes beyond mental limits through authentic striking mechanics, footwork agility, and high-intensity sled conditioning.',
    image: '/images/marcus_thorne.png',
  },
  {
    name: 'Maya Lin',
    role: 'Biomechanics & Recovery Specialist',
    credentials: 'Doctor of Physical Therapy • Cryo Protocol Director',
    bio: 'Specializes in joint longevity, athletic recovery protocols, cold plunge therapy, and structural alignment for heavy lifters.',
    image: '/images/maya_lin.png',
  },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-obsidian border-b border-border-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <ScrollReveal delay={0.1} direction="down">
            <div className="inline-flex justify-center">
              <SectionLabel label="ELITE ATHLETIC COACHES" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h2 className="font-display text-4xl sm:text-6xl text-white mt-4 tracking-wide">
              COACHED BY <br />
              <span className="text-gold">WORLD-CLASS ATHLETIC MENTORS</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <p className="text-sm sm:text-base text-gray-400 font-sans font-light mt-4 leading-relaxed">
              Our coaching staff holds CSCS certifications, physical therapy doctorates, and championship fight credentials.
            </p>
          </ScrollReveal>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {coaches.map((coach, idx) => (
            <ScrollReveal key={coach.name} delay={0.15 + idx * 0.15} direction="up">
              <div className="h-full flex flex-col justify-between rounded-none bg-charcoal border border-border-dark hover:border-gold transition-all duration-400 hover:-translate-y-2 group overflow-hidden">
                {/* Photo Header */}
                <div className="relative w-full h-80 overflow-hidden bg-surface">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent opacity-80" />
                </div>

                {/* Info */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="label-micro text-[11px] text-gold font-bold tracking-widest block mb-1">
                      {coach.role}
                    </span>
                    <h3 className="font-display text-3xl text-white mb-2 group-hover:text-gold transition-colors tracking-wide">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans mb-4">
                      {coach.credentials}
                    </p>
                    <p className="text-sm text-gray-300 font-sans font-light leading-relaxed">
                      {coach.bio}
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

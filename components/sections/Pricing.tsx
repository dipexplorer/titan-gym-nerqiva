'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

const tiers = [
  {
    name: 'Single Session Pass',
    priceMonthly: '$35',
    priceAnnual: '$35',
    period: 'per class',
    description: 'Ideal for visitors or drop-ins seeking a single movement, reform, or breathwork session.',
    features: [
      'Access to any 1 class of your choice',
      'Mat & towel service included',
      'Infrared sauna access post-class',
      'Complimentary herbal tea lounge',
    ],
    featured: false,
    cta: 'outline' as const,
  },
  {
    name: 'Sanctuary Monthly',
    priceMonthly: '$240',
    priceAnnual: '$195',
    period: 'per month',
    description: 'Our core membership for consistent practice. Unlimited movement, reform, and sound bath sessions.',
    features: [
      'Unlimited Reform, Yoga & Sound classes',
      'Priority 14-day advance class booking',
      '1 Complimentary guest pass per month',
      'Full infrared sauna & cold plunge access',
      '15% discount on private 1-on-1 sessions',
    ],
    featured: true,
    cta: 'primary' as const,
  },
  {
    name: 'Private Atelier VIP',
    priceMonthly: '$420',
    priceAnnual: '$350',
    period: 'per month',
    description: 'The complete private sanctuary experience with dedicated 1-on-1 instructor sessions and VIP perks.',
    features: [
      'Everything in Sanctuary Monthly',
      '4 Private 1-on-1 instructor sessions/mo',
      'Permanent personal locker & gear storage',
      'Unlimited guest passes',
      'Personalized somatic alignment plan',
    ],
    featured: false,
    cta: 'outline' as const,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-32 lg:py-40 bg-sand-tint border-t border-sand-tone/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="mb-4">Membership & Access</SectionLabel>
          <h2
            className="font-display text-charcoal font-light leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
          >
            Invest in Your Quiet<br />
            <em className="text-terracotta-shade font-serif italic font-normal">Strength and Wellbeing.</em>
          </h2>
          <p className="text-charcoal-tone text-base leading-relaxed mt-6 font-light">
            No long-term lock-in contracts. Simple, transparent sanctuary access designed around your rhythm.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-xs font-medium tracking-wide ${!annual ? 'text-charcoal' : 'text-charcoal-tint'}`}>
              Monthly Rhythm
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-14 h-7 bg-sand-tone/40 rounded-full p-1 transition-colors cursor-pointer relative"
              aria-label="Toggle annual billing"
            >
              <motion.div
                animate={{ x: annual ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="w-5 h-5 bg-charcoal-shade rounded-full shadow-sm"
              />
            </button>
            <span className={`text-xs font-medium tracking-wide flex items-center gap-2 ${annual ? 'text-charcoal' : 'text-charcoal-tint'}`}>
              Annual Practice
              <span className="label-micro text-[9px] text-terracotta-shade bg-terracotta-tint/50 px-2 py-0.5 rounded-full border border-terracotta-base/20">
                Save ~20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl p-8 lg:p-10 flex flex-col justify-between transition-all duration-400 border ${
                tier.featured
                  ? 'bg-sand border-sage-base/40 shadow-[0_20px_50px_rgba(69,78,61,0.08)] scale-[1.03] md:scale-[1.05] z-10'
                  : 'bg-sand/60 border-sand-tone/40 hover:border-sand-tone/80'
              }`}
            >
              <div>
                {tier.featured && (
                  <div className="mb-4 inline-block bg-sage-tint text-sage-shade px-3.5 py-1 rounded-full border border-sage-base/30">
                    <span className="label-micro text-[9px] tracking-[0.2em] font-medium">Most Popular</span>
                  </div>
                )}
                <div className="label-micro text-charcoal-tint text-[10px] tracking-[0.2em] uppercase mb-2">{tier.name}</div>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-serif text-5xl text-charcoal font-light">
                    {annual ? tier.priceAnnual : tier.priceMonthly}
                  </span>
                  <span className="text-xs text-charcoal-tone font-light">{tier.period}</span>
                </div>

                <p className="text-charcoal-tone text-xs leading-relaxed font-light mb-8 pb-6 border-b border-sand-tone/30">
                  {tier.description}
                </p>

                <ul className="flex flex-col gap-3.5 mb-8">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-xs text-charcoal font-light">
                      <span className="text-sage-shade mt-0.5 text-[10px]">✦</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <Button as="a" href="#contact" variant={tier.cta} className="w-full justify-center">
                Select Option
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

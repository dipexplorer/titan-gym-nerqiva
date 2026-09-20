'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Day Pass',
    badge: 'SINGLE VISIT',
    price: '$25',
    period: 'per day',
    description: 'Full single-day access to all 4 training zones, strength racks, and turf track.',
    features: [
      'Full facility 24-hr access',
      'All 4 specialized training zones',
      'Locker room & shower access',
      'Day guest intake consultation',
    ],
    buttonVariant: 'outline' as const,
    featured: false,
  },
  {
    name: 'Titan Core Access',
    badge: 'MOST POPULAR',
    price: '$89',
    period: 'per month',
    description: 'Unrestricted 24/7 access for dedicated powerlifters, athletes, and fitness enthusiasts.',
    features: [
      'Unrestricted 24/7 Facility Access',
      'All 4 specialized training zones',
      '2 Monthly VIP guest passes',
      '15% Off cryo lab & recovery sessions',
      'Free Titan Gym performance shirt',
    ],
    buttonVariant: 'primary' as const,
    featured: true,
  },
  {
    name: 'VIP Elite Athletic Pass',
    badge: 'FULL IMMERSION',
    price: '$149',
    period: 'per month',
    description: 'Complete athletic performance access including unlimited cryo cold plunge lab and personal coaching.',
    features: [
      'Unrestricted 24/7 All-Zone Access',
      'UNLIMITED Cryo Lab & Cold Plunge',
      'Unlimited Athletic Classes included',
      '1 Monthly 1-on-1 Personal Training session',
      'Permanent executive locker & garment service',
    ],
    buttonVariant: 'secondary' as const,
    featured: false,
  },
];

export default function PricingSection() {
  const scrollToPass = () => {
    const el = document.getElementById('claim-pass');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-charcoal border-b border-border-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <ScrollReveal delay={0.1} direction="down">
            <div className="inline-flex justify-center">
              <SectionLabel label="TRANSPARENT ATHLETIC TIERS" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h2 className="font-display text-4xl sm:text-6xl text-white mt-4 tracking-wide">
              INVEST IN YOUR <br />
              <span className="text-gold">ATHLETIC POTENTIAL</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <p className="text-sm sm:text-base text-gray-400 font-sans font-light mt-4 leading-relaxed">
              No hidden maintenance fees. No lock-in annual contracts. Cancel or freeze anytime.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} delay={0.15 + idx * 0.15} direction="up">
              <div
                className={`h-full flex flex-col justify-between p-8 sm:p-10 rounded-none transition-all duration-400 hover:-translate-y-2 ${
                  plan.featured
                    ? 'bg-obsidian border-2 border-gold shadow-[0_0_30px_rgba(255,184,0,0.15)] relative'
                    : 'bg-obsidian/70 border border-border-dark hover:border-gold/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span
                      className={`px-3 py-1 label-micro text-[10px] font-bold ${
                        plan.featured
                          ? 'bg-gold text-obsidian'
                          : 'bg-surface text-gray-400 border border-border-dark'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl text-white mb-2 tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans font-light leading-relaxed mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-8 border-b border-border-dark pb-6">
                    <span className="font-display text-5xl sm:text-6xl text-gold font-extrabold">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-400 font-sans uppercase tracking-wider font-bold">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 text-xs sm:text-sm font-sans text-gray-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gold mt-1.5 shrink-0" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="pt-4">
                  <Button
                    variant={plan.buttonVariant}
                    size="md"
                    onClick={scrollToPass}
                    className="w-full justify-center"
                  >
                    SELECT {plan.name}
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

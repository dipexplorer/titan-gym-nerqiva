'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Trial Experience',
    badge: 'Single Visit',
    price: '$45',
    period: 'per class',
    description: 'An unhurried introduction to our studio, reformer apparatus, and acoustic sound baths.',
    features: [
      'Access to any 1 class',
      'Complimentary organic tea',
      'Mat & prop usage included',
      'Postural intake assessment',
    ],
    buttonVariant: 'outline' as const,
    featured: false,
  },
  {
    name: 'Rhythm Practice',
    badge: 'Most Popular',
    price: '$280',
    period: 'per month',
    description: 'For committed practitioners seeking consistent weekly movement and restorative sound.',
    features: [
      '8 Reformer or Sound classes/month',
      '14-day advance priority booking',
      '2 Guest passes per month',
      '15% off workshops & sound baths',
      'Complimentary eco locker',
    ],
    buttonVariant: 'primary' as const,
    featured: true,
  },
  {
    name: 'Sanctuary Unlimited',
    badge: 'Full Access',
    price: '$480',
    period: 'per month',
    description: 'Complete immersion into all studio practices, private sound sessions, and concierge perks.',
    features: [
      'Unlimited Reformer & Sound classes',
      '30-day advance booking window',
      '1 Monthly private 432Hz sound bath',
      'Unlimited guest privileges',
      'Dedicated permanent locker & garment service',
    ],
    buttonVariant: 'secondary' as const,
    featured: false,
  },
];

export default function MembershipSection() {
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="membership" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-sage-tint/20 border-t border-sand-tone/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <ScrollReveal delay={0.1} direction="down">
            <div className="inline-flex justify-center">
              <SectionLabel label="Membership & Passes" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h2 className="font-display text-3xl sm:text-5xl text-ink-shade mt-4 leading-tight">
              Invest in Your <br />
              <span className="italic font-light text-sage-shade">Daily Equilibrium</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <p className="text-sm sm:text-base text-ink-tone font-sans font-light mt-4 leading-relaxed">
              Transparent, unhurried memberships with zero lock-in contracts. Cancel or pause anytime with 7 days notice.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} delay={0.15 + idx * 0.15} direction="up">
              <div
                className={`h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  plan.featured
                    ? 'bg-sand-tint border-2 border-sage-shade shadow-md relative'
                    : 'bg-sand-tint/80 border border-sand-tone/50 hover:border-sage-tone/50'
                }`}
              >
                {/* Header Tag */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span
                      className={`px-3.5 py-1 rounded-full label-micro text-[10px] ${
                        plan.featured
                          ? 'bg-sage-shade text-sand-tint font-medium'
                          : 'bg-sand-tone/40 text-ink-tone'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-ink-shade mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-ink-tone font-light leading-relaxed mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-8 border-b border-sand-tone/30 pb-6">
                    <span className="font-display text-4xl sm:text-5xl text-ink-shade">
                      {plan.price}
                    </span>
                    <span className="text-xs text-ink-tone font-sans uppercase tracking-wider">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-4 mb-8 text-xs sm:text-sm font-sans text-ink-tone">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-shade mt-1.5 shrink-0" />
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
                    onClick={scrollToBooking}
                    className="w-full justify-center"
                  >
                    Select Membership
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

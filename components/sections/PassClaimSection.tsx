'use client';

import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const goalOptions = [
  'Strength & Powerlifting',
  'HIIT Athletic Conditioning',
  'Combat & Boxing Striking',
  'Bodybuilding & Sculpting',
];

export default function PassClaimSection() {
  const [selectedGoal, setSelectedGoal] = useState(goalOptions[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <section id="claim-pass" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-obsidian border-b border-border-dark">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1} direction="down">
            <div className="inline-flex justify-center">
              <SectionLabel label="FREE 7-DAY VIP ACCESS" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h2 className="font-display text-4xl sm:text-6xl text-white mt-4 tracking-wide">
              CLAIM YOUR FREE <br />
              <span className="text-gold">7-DAY ATHLETIC TRIAL PASS</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <p className="text-sm sm:text-base text-gray-400 font-sans font-light mt-4 max-w-lg mx-auto leading-relaxed">
              Test our 25,000 sq ft facility, 100+ Hammer Strength racks, sprint turf, and cryo recovery lab with zero credit card required.
            </p>
          </ScrollReveal>
        </div>

        {/* Form Card */}
        <ScrollReveal delay={0.4} direction="up">
          <div className="p-8 sm:p-12 rounded-none bg-charcoal border border-border-dark shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-gold text-obsidian flex items-center justify-center mx-auto text-3xl font-extrabold skew-x-[-8deg]">
                  ✓
                </div>
                <h3 className="font-display text-4xl text-white tracking-wide">
                  7-DAY PASS ACTIVATED!
                </h3>
                <p className="text-sm text-gray-300 font-sans max-w-md mx-auto leading-relaxed">
                  Welcome to Titan Gym, <span className="font-bold text-gold">{name}</span>. Your 7-Day All-Access Pass has been generated. Show your confirmation email ({email}) at the front desk (100 Iron Forge Way) to receive your magnetic key fob.
                </p>
                <div className="p-6 bg-obsidian border border-gold/40 inline-block max-w-sm mx-auto text-left">
                  <span className="label-micro text-gold text-[10px] block mb-1">DIGITAL PASS ID</span>
                  <span className="font-display text-2xl text-white block">TG-2026-VIP-{Math.floor(1000 + Math.random() * 9000)}</span>
                  <span className="text-xs text-gray-400 block mt-1">Goal Focus: {selectedGoal}</span>
                </div>
                <div className="pt-4">
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    REGISTER ANOTHER ATHLETE
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Select Primary Goal */}
                <div>
                  <label className="block label-micro text-xs text-gold mb-3">
                    1. SELECT YOUR PRIMARY ATHLETIC GOAL
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {goalOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedGoal(item)}
                        className={`p-4 text-left font-sans text-xs sm:text-sm font-bold uppercase transition-all duration-300 cursor-pointer ${
                          selectedGoal === item
                            ? 'bg-gold text-obsidian shadow-sm'
                            : 'bg-surface border border-border-dark text-gray-300 hover:border-gold'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Athlete Information */}
                <div className="space-y-4 border-t border-border-dark pt-6">
                  <label className="block label-micro text-xs text-gold">
                    2. ATHLETE CONTACT DETAILS
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 bg-surface titan-input text-white text-sm transition-colors font-sans"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 bg-surface titan-input text-white text-sm transition-colors font-sans"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (For Access Code SMS)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3.5 bg-surface titan-input text-white text-sm transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" size="lg" className="w-full justify-center py-4 text-sm tracking-widest">
                  CLAIM FREE 7-DAY VIP PASS NOW
                </Button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

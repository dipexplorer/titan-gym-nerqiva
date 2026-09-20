'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-sand-tint border border-sand-tone/40 rounded-xl px-4 py-3.5 text-charcoal text-sm placeholder:text-charcoal-tint focus:outline-none focus:border-sage-shade transition-colors font-light';

  return (
    <section id="contact" className="py-32 lg:py-40 bg-sand-tint border-t border-sand-tone/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Intro */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <SectionLabel>Complimentary Access</SectionLabel>
            <h2
              className="font-display text-charcoal font-light leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
            >
              Begin Your Journey to<br />
              <em className="text-sage-shade font-serif italic font-normal">Quiet Strength.</em>
            </h2>
            <p className="text-charcoal-tone text-base leading-relaxed font-light">
              Claim your Complimentary 3-Day Sanctuary Pass. Experience any of our Reform Pilates, Yoga Flow, or Sound Bath sessions with zero obligation.
            </p>

            <div className="pt-6 border-t border-sand-tone/30 space-y-4 text-xs text-charcoal-tone font-light">
              <div>
                <span className="label-micro text-charcoal text-[9px] block mb-1">SANCTUARY LOCATION</span>
                <span>442 Botanical Way, Suite 100 • Green District</span>
              </div>
              <div>
                <span className="label-micro text-charcoal text-[9px] block mb-1">HOURS OF CALM</span>
                <span>Monday – Sunday: 06:30 AM – 09:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sand p-10 lg:p-12 rounded-2xl border border-sage-base/30 shadow-md text-center flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-sage-tint border border-sage-base/40 text-sage-shade flex items-center justify-center text-3xl font-serif">
                  ✦
                </div>
                <div className="space-y-2">
                  <span className="label-micro text-sage-shade text-[9px]">PASS RESERVED</span>
                  <h3 className="font-serif text-3xl text-charcoal font-light">Welcome to AURA</h3>
                  <p className="text-charcoal-tone text-sm font-light leading-relaxed max-w-md mx-auto">
                    Your 3-Day Sanctuary Pass has been dispatched to your email. We look forward to welcoming you into the space.
                  </p>
                </div>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Submit Another Pass Request
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-sand p-8 lg:p-10 rounded-2xl border border-sand-tone/40 shadow-sm flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="label-micro text-charcoal-tint text-[9px]">Full Name</label>
                    <input
                      required
                      placeholder="Evelyn Sinclair"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="label-micro text-charcoal-tint text-[9px]">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="evelyn@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="label-micro text-charcoal-tint text-[9px]">Phone / WhatsApp</label>
                    <input
                      placeholder="+1 (555) 234-5678"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="label-micro text-charcoal-tint text-[9px]">Preferred Discipline</label>
                    <select
                      value={form.discipline}
                      onChange={(e) => setForm({ ...form, discipline: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Select a focus...</option>
                      <option value="reform">Reform Pilates & Alignment</option>
                      <option value="breath">Breathwork & Sound Sanctuary</option>
                      <option value="vinyasa">Vinyasa & Fluid Yoga</option>
                      <option value="strength">Functional Strength & Longevity</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="label-micro text-charcoal-tint text-[9px]">Personal Vision or Note (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your movement goals or any injuries..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button type="submit" variant="primary" className="mt-2 justify-center">
                  Claim 3-Day Trial Pass
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

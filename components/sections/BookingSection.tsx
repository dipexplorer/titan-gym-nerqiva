'use client';

import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

const classOptions = [
  'Reformer Precision',
  'Acoustic Sound Bath',
  'Mindful Strength & Mobility',
  'Somatic Breath & Flow',
];

const timeSlots = ['07:30 AM', '09:00 AM', '12:00 PM', '05:30 PM', '07:00 PM'];

const daysOfWeek = [
  { day: 'Mon', date: 'Sep 07' },
  { day: 'Tue', date: 'Sep 08' },
  { day: 'Wed', date: 'Sep 09' },
  { day: 'Thu', date: 'Sep 10' },
  { day: 'Fri', date: 'Sep 11' },
  { day: 'Sat', date: 'Sep 12' },
];

export default function BookingSection() {
  const [selectedClass, setSelectedClass] = useState(classOptions[0]);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(timeSlots[1]);
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
    <section id="booking" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-sand border-t border-sand-tone/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1} direction="down">
            <div className="inline-flex justify-center">
              <SectionLabel label="Reserve Your Practice" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h2 className="font-display text-3xl sm:text-5xl text-ink-shade mt-4 leading-tight">
              Begin Your Trial Class <br />
              <span className="italic font-light text-sage-shade">Reserve in Seconds</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <p className="text-sm sm:text-base text-ink-tone font-sans font-light mt-4 max-w-lg mx-auto leading-relaxed">
              Select your practice, date, and preferred time slot. Class size is capped at 8 practitioners.
            </p>
          </ScrollReveal>
        </div>

        {/* Booking Card UI */}
        <ScrollReveal delay={0.4} direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-sand-tint border border-sand-tone/50 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-sage-tint/60 text-sage-shade flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-display text-3xl text-ink-shade">
                  Reservation Confirmed
                </h3>
                <p className="text-sm text-ink-tone font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-medium text-ink-shade">{name}</span>. We have saved your spot for <span className="font-medium text-ink-shade">{selectedClass}</span> on <span className="font-medium text-ink-shade">{daysOfWeek[selectedDay].day}, {daysOfWeek[selectedDay].date}</span> at <span className="font-medium text-ink-shade">{selectedTime}</span>. A confirmation details email has been sent to {email}.
                </p>
                <div className="pt-6">
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    Book Another Class
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Select Practice */}
                <div>
                  <label className="block label-micro text-xs text-sage-shade mb-3">
                    1. Choose Practice Offering
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {classOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedClass(item)}
                        className={`p-4 rounded-xl text-left font-sans text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                          selectedClass === item
                            ? 'bg-sage-shade text-sand-tint font-medium shadow-xs'
                            : 'bg-sand border border-sand-tone/40 text-ink-tone hover:border-sage-tone'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Date Selector */}
                <div>
                  <label className="block label-micro text-xs text-sage-shade mb-3">
                    2. Select Date
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                    {daysOfWeek.map((item, idx) => (
                      <button
                        key={item.date}
                        type="button"
                        onClick={() => setSelectedDay(idx)}
                        className={`p-3 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                          selectedDay === idx
                            ? 'bg-sage-shade text-sand-tint font-medium shadow-xs'
                            : 'bg-sand border border-sand-tone/40 text-ink-tone hover:border-sage-tone'
                        }`}
                      >
                        <span className="label-micro text-[10px] opacity-80">{item.day}</span>
                        <span className="font-display text-sm font-medium mt-1">{item.date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Time Slot Selector */}
                <div>
                  <label className="block label-micro text-xs text-sage-shade mb-3">
                    3. Select Time Slot
                  </label>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`px-4 py-2.5 rounded-xl font-sans text-xs transition-all duration-300 cursor-pointer ${
                          selectedTime === slot
                            ? 'bg-sage-shade text-sand-tint font-medium shadow-xs'
                            : 'bg-sand border border-sand-tone/40 text-ink-tone hover:border-sage-tone'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Contact Details */}
                <div className="space-y-4 border-t border-sand-tone/30 pt-6">
                  <label className="block label-micro text-xs text-sage-shade">
                    4. Practitioner Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-sand border border-sand-tone/50 text-ink-shade text-sm focus:outline-none focus:border-sage-shade transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-sand border border-sand-tone/50 text-ink-shade text-sm focus:outline-none focus:border-sage-shade transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-sand border border-sand-tone/50 text-ink-shade text-sm focus:outline-none focus:border-sage-shade transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" size="lg" className="w-full justify-center py-4 text-xs tracking-widest">
                  Confirm Trial Reservation ($45)
                </Button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

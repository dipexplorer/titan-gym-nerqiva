'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Training Zones', href: '#zones' },
  { label: 'Programs', href: '#programs' },
  { label: 'Head Coaches', href: '#trainers' },
  { label: 'Membership', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-md py-3.5 border-b border-border-dark shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-linear-to-b from-obsidian/90 via-obsidian/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gold flex items-center justify-center font-display text-2xl text-obsidian font-extrabold skew-x-[-10deg] group-hover:bg-white transition-colors">
              T
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl tracking-wider text-white font-extrabold group-hover:text-gold transition-colors">
                TITAN <span className="text-gold">GYM</span>
              </span>
              <span className="label-micro text-[9px] tracking-[0.25em] text-gray-400 mt-0.5">
                ATHLETIC PERFORMANCE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="label-micro text-xs text-gray-300 hover:text-gold transition-colors font-bold tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              as="a"
              href="#claim-pass"
              variant="primary"
              size="sm"
            >
              Claim 7-Day Pass
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full bg-gold"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-full bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full bg-gold"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-display text-4xl text-white hover:text-gold transition-colors tracking-widest"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button as="a" href="#claim-pass" variant="primary" size="md" onClick={() => setMenuOpen(false)}>
                Claim 7-Day Pass
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

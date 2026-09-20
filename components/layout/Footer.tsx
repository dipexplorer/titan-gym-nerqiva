export default function Footer() {
  return (
    <footer className="bg-obsidian text-white py-20 px-6 md:px-12 lg:px-20 border-t border-border-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gold flex items-center justify-center font-display text-xl text-obsidian font-extrabold skew-x-[-10deg]">
              T
            </div>
            <span className="font-display text-3xl text-white tracking-wider font-extrabold">
              TITAN <span className="text-gold">GYM</span>
            </span>
          </div>
          <span className="label-micro text-gold text-[10px] tracking-[0.25em]">
            HIGH-PERFORMANCE ATHLETIC & STRENGTH CENTER
          </span>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-sans font-light mt-2">
            Forge your peak athletic potential. 25,000 sq ft premier training facility equipped with Hammer Strength racks, sled turf track, combat boxing ring, and cryo recovery lab.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <span className="label-micro text-gold text-[10px] tracking-[0.22em]">
            Navigation
          </span>
          <ul className="space-y-3 text-xs text-gray-400 font-sans tracking-wide">
            <li><a href="#zones" className="hover:text-gold transition-colors">Training Zones</a></li>
            <li><a href="#programs" className="hover:text-gold transition-colors">Athletic Programs</a></li>
            <li><a href="#trainers" className="hover:text-gold transition-colors">Head Coaches</a></li>
            <li><a href="#pricing" className="hover:text-gold transition-colors">Membership Tiers</a></li>
            <li><a href="#claim-pass" className="hover:text-gold transition-colors">Claim Free Pass</a></li>
          </ul>
        </div>

        {/* Facility Info */}
        <div className="flex flex-col gap-4">
          <span className="label-micro text-gold text-[10px] tracking-[0.22em]">
            Facility Location
          </span>
          <ul className="space-y-3 text-xs text-gray-400 font-sans">
            <li>100 Iron Forge Way, Facility 01</li>
            <li>Austin, TX 78701</li>
            <li className="pt-2 text-gold font-bold">Access: 24 Hours / 7 Days a Week</li>
            <li>contact@titangym.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border-dark flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 text-xs text-gray-500 font-sans">
        <p>© {new Date().getFullYear()} TITAN GYM Athletic Performance Center. All rights reserved.</p>
        <p className="label-micro text-gold/80 text-[10px] tracking-widest">
          FORGE YOUR PEAK POTENTIAL
        </p>
      </div>
    </footer>
  );
}

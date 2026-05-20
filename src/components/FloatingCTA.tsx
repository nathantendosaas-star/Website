import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Bed } from 'lucide-react';

export function FloatingCTA() {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-40 pointer-events-none flex justify-center px-4">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="pointer-events-auto flex gap-3"
      >
        <Link
          to="/reserve"
          className="glass-panel relative overflow-hidden bg-white/70 hover:bg-white/90 text-charcoal px-5 py-3.5 md:px-7 md:py-4 rounded-full flex items-center space-x-2 md:space-x-3 font-medium shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all active:scale-95 group border border-white/60"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]" />
          <Bed size={18} className="text-accent" />
          <span className="relative z-10 tracking-wide text-[10px] md:text-xs font-bold uppercase">Book a Room</span>
        </Link>
        <Link
          to="/reserve"
          className="glass-panel relative overflow-hidden bg-white/70 hover:bg-white/90 text-charcoal px-5 py-3.5 md:px-7 md:py-4 rounded-full flex items-center space-x-2 md:space-x-3 font-medium shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all active:scale-95 group border border-white/60"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]" />
          <Calendar size={18} className="text-accent" />
          <span className="relative z-10 tracking-wide text-[10px] md:text-xs font-bold uppercase">Book a Table</span>
        </Link>
      </motion.div>
    </div>
  );
}

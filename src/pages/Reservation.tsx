import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { restaurant } from '../data/restaurantInfo';

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Decorative background motion element */}
      <motion.div 
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-accent-light/30 blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 text-accent mb-4 font-bold tracking-widest uppercase text-sm">
              <Star size={16} fill="currentColor" />
              <span>Reservations</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal mb-6 leading-tight">
              A Seat at <br />
              <span className="text-accent italic">Our Table</span>
            </h1>
            <p className="text-lg text-charcoal/70 mb-10 leading-relaxed max-w-md">
              Secure your place for an evening of culinary discovery. 
              Whether it's an intimate dinner or a grand celebration, 
              we ensure every moment is perfectly orchestrated.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Service Hours</h3>
                  <p className="text-charcoal/70 whitespace-pre-line">{restaurant.hours}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 overflow-hidden rounded-[2rem] shadow-glass h-64 relative">
              <motion.img 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                src={restaurant.interiorImage} 
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-10 md:p-14 rounded-[2rem] bg-white/60 h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-serif text-charcoal">Reservation Confirmed!</h2>
                <p className="text-charcoal/70">
                  Thank you for booking with {restaurant.name}. We have sent the confirmation details to your email. We look forward to hosting you!
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-accent font-medium hover:opacity-80 transition-opacity underline underline-offset-4"
                >
                  Make another reservation
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-[2rem] bg-white/60 space-y-6 backdrop-blur-xl border border-white/60 shadow-glass relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <Calendar size={120} />
                </div>

                <h2 className="text-3xl font-serif text-charcoal mb-8 relative z-10">Booking Details</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2">Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        required
                        className="w-full bg-white/80 border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2">Time</label>
                    <input 
                      type="time" 
                      required
                      className="w-full bg-white/80 border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <label className="block text-sm font-bold text-charcoal/80 mb-2">Party Size</label>
                  <div className="relative flex items-center">
                    <Users className="absolute left-5 text-charcoal/40" size={20} />
                    <select required className="w-full bg-white/80 border border-charcoal/10 rounded-[0.875rem] pl-12 pr-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal appearance-none">
                      {[1,2,3,4,5,6,7,8,"9+"].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/80 border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-white/80 border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal"
                      placeholder="Contact number"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <label className="block text-sm font-bold text-charcoal/80 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/80 border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="relative z-10">
                  <label className="block text-sm font-bold text-charcoal/80 mb-2">Special Requests (Optional)</label>
                  <textarea 
                    rows={2}
                    className="w-full bg-white/80 border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal resize-none"
                    placeholder="Dietary requirements, preferred seating, occasion..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-charcoal hover:bg-warm-black text-white font-bold px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-md mt-8 group"
                >
                  <span>Confirm Booking</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

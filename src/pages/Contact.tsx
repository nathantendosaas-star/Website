import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { restaurant } from '../data/restaurantInfo';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional as per instructions
    alert("Thanks for your message! (This is a UI demo)");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10"
        />

        <div className="text-center mb-12 sm:mb-16 overflow-hidden">
          <motion.h1 
            initial={{ y: "110%", rotate: -2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-charcoal mb-4 sm:mb-6 leading-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-charcoal/60 max-w-2xl mx-auto"
          >
            Whether you're booking a luxury suite, planning a dining event, or just have a question—we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-accent flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-charcoal">Address</h3>
                  <p className="text-charcoal/70 text-sm">{restaurant.address}</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-accent flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-charcoal">Hours</h3>
                  <p className="text-charcoal/70 text-sm whitespace-pre-wrap">{restaurant.hours}</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-accent flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-charcoal">Phone</h3>
                  <p className="text-charcoal/70 text-sm">{restaurant.phone}</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-accent flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-charcoal">Email</h3>
                  <p className="text-charcoal/70 text-sm">{restaurant.email}</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full h-72 lg:h-96 rounded-[2rem] overflow-hidden shadow-soft bg-gray-200">
              <iframe 
                src={restaurant.mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 contrast-125"
              ></iframe>
            </div>

            {/* WhatsApp Button */}
            <a 
              href={`https://api.whatsapp.com/send?phone=${restaurant.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer" 
              className="w-full flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20BE5C] text-white px-8 py-4 rounded-[1.5rem] font-bold transition-transform active:scale-95 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.004-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              <span>Message us on WhatsApp</span>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-[2rem] bg-white/50 space-y-6">
              <h2 className="text-3xl font-serif text-charcoal mb-8">Send a Message</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-charcoal/80 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-white border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-charcoal/80 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-white border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-charcoal/80 mb-2">Subject (Optional)</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-white border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal"
                  placeholder="Reservation, Event Inquiry, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-charcoal/80 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-white border border-charcoal/10 rounded-[0.875rem] px-5 py-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-charcoal resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-accent hover:bg-accent-light hover:text-accent font-bold text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-md group mt-4 border border-transparent hover:border-accent"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:-hidden hidden" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

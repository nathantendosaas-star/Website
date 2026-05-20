import { motion } from 'motion/react';
import { Leaf, Heart, ChefHat, Award, Wine, Users } from 'lucide-react';
import { restaurant } from '../data/restaurantInfo';

export function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Header */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto text-center mb-24 relative">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[20%] w-[60vw] h-[60vw] rounded-[100px] border-[1px] border-charcoal/5 pointer-events-none -z-10 bg-accent/5 backdrop-blur-3xl"
        />

        <div className="overflow-hidden mb-6 sm:mb-8">
          <motion.h1 
            initial={{ y: "100%", rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-tight"
          >
            A Passion for <br/>
            <span className="text-accent italic">The Extraordinary</span>
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.p 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-charcoal/70 leading-relaxed text-left md:text-center"
          >
          At {restaurant.name}, we believe that dining is an art form. 
          Founded on the principles of culinary excellence and impeccable service, 
          our mission is to provide an immersive gastronomic journey that engages all the senses. 
          From the careful selection of seasonal ingredients to the precise execution of every dish, 
          we are dedicated to the craft of fine dining.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Leaf, title: "Seasonal Purity", desc: "We source our ingredients from local farms at their peak of freshness." },
              { icon: ChefHat, title: "Culinary Artistry", desc: "Our chefs blend traditional techniques with modern innovation." },
              { icon: Wine, title: "Curated Selection", desc: "A world-class cellar featuring both rare vintages and modern classics." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-charcoal">{value.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Philosophy */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-charcoal tracking-tight">Philosophy of Excellence</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-charcoal text-white flex items-center justify-center shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-charcoal">Award-Winning Standard</h4>
                  <p className="text-charcoal/70 leading-relaxed">Recognized for our commitment to quality, we maintain the highest standards in everything we do.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-charcoal text-white flex items-center justify-center shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-charcoal">Community First</h4>
                  <p className="text-charcoal/70 leading-relaxed">We are proud to support local artisans and producers, fostering a sustainable culinary ecosystem.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1550966841-3ee32287974b?q=80&w=1200&auto=format&fit=crop" 
              alt="Culinary Team" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 text-center mb-24">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-panel bg-accent text-white rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden"
        >
          <div className="relative z-10">
            <ChefHat className="mx-auto mb-8 text-white/40" size={48} />
            <p className="text-2xl md:text-4xl font-serif italic mb-8 leading-tight">
              "Every plate is a canvas, and every ingredient is a note in a symphony of flavors."
            </p>
            <p className="font-medium tracking-wide uppercase text-sm text-white/80">— Julian Vane, Executive Chef</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { Leaf, Heart, ChefHat } from 'lucide-react';
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
            Serenity Atop <br/>
            <span className="text-accent italic">Naguru Hill</span>
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.p 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-charcoal/70 leading-relaxed text-left md:text-center"
          >
          {restaurant.name} is a sanctuary of peace and comfort, offering unparalleled hospitality and breathtaking panoramic views of Kampala. 
          We pride ourselves on providing a home away from home, where every detail is designed for your relaxation and well-being.
          Whether you're here for a quiet retreat or a business stay, our hilltop location provides the perfect backdrop for a memorable experience.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily from Nakasero market to ensure peak flavor and quality." },
              { icon: Heart, title: "Made with Love", desc: "No shortcuts. Just slow-cooked perfection and authentic recipes." },
              { icon: ChefHat, title: "Locally Sourced", desc: "We partner directly with farmers to bring you the best from our soil." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent-light/50 text-accent flex items-center justify-center mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-charcoal">{value.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
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
              "We don't just cook food. We preserve memories and serve them on a plate for everyone to enjoy."
            </p>
            <p className="font-medium tracking-wide uppercase text-sm text-white/80">— Solomon Kintu, Head Chef</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

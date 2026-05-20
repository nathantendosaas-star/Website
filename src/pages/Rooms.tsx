import { motion } from 'motion/react';
import { Utensils, Wine, Star, Camera, Music, MapPin } from 'lucide-react';
import { experiences, formatExperiencePrice } from '../data/roomData';
import { Link } from 'react-router-dom';

const featureIcons: Record<string, any> = {
  "Private Chef": Utensils,
  "Wine Pairing": Wine,
  "Custom Menu": Star,
  "Kitchen Tour": Camera,
  "Sommelier Guided": Wine,
  "Rare Vintages": Wine,
  "Pairing Plate": Utensils,
  "Cellar Tour": MapPin,
  "Panoramic Views": MapPin,
  "Signature Cocktails": Wine,
  "Small Plates": Utensils,
  "Live Music": Music
};

export function Rooms() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <section className="px-4 md:px-8 max-w-7xl mx-auto text-center mb-16 overflow-hidden">
        <motion.h1 
          initial={{ y: "110%", rotate: -2 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-serif text-charcoal mb-6"
        >
          Curated <span className="text-accent italic">Experiences</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-charcoal/70 max-w-2xl mx-auto"
        >
          Elevate your visit with our exclusive dining events and private showcases.
        </motion.p>
      </section>

      <section className="px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel group rounded-[2.5rem] overflow-hidden bg-white/60 hover:bg-white/80 transition-all flex flex-col h-full shadow-soft"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={exp.image} 
                alt={exp.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                <p className="text-sm font-bold text-accent">{formatExperiencePrice(exp.price)}</p>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">{exp.name}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed mb-6 flex-grow">{exp.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {exp.features.map(feature => {
                  const Icon = featureIcons[feature] || Star;
                  return (
                    <div key={feature} className="flex items-center gap-1.5 bg-accent/5 px-3 py-1.5 rounded-full">
                      <Icon size={14} className="text-accent" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent/80">{feature}</span>
                    </div>
                  );
                })}
              </div>

              <Link to="/reserve" className="w-full py-4 bg-charcoal text-white rounded-full font-bold text-center hover:bg-accent transition-colors active:scale-95 shadow-md">
                Inquire Now
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

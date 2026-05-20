import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, ArrowRight, Star } from 'lucide-react';
import { restaurant } from '../data/restaurantInfo';
import { menuItems, formatPrice } from '../data/menuItems';

export function Home() {
  const featuredDishes = menuItems.filter(item => item.featured).slice(0, 3);
  
  // Advanced Scroll Parallax
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="pb-24" ref={containerRef}>
      {/* Dynamic Floating Element */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          y: [0, -40, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="fixed top-[30%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent-light/10 blur-[100px] pointer-events-none -z-10"
      />

      {/* Hero Section */}
      <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yBg, scale: scaleHero }}
          className="absolute inset-0 z-0 origin-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src={restaurant.heroImage} 
              alt="Gourmet Dining" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black/95 via-warm-black/50 to-transparent" />
        </motion.div>
        
        <motion.div 
          style={{ opacity: opacityText }}
          className="relative z-10 text-center px-6 max-w-4xl sm:mt-10"
        >
          <div className="overflow-hidden mb-8 sm:mb-12">
            <motion.h1 
              initial={{ y: "110%", rotate: 2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1]"
            >
              {restaurant.tagline.split(' ').slice(0, 2).join(' ')} <br/>
              <span className="text-accent italic">{restaurant.tagline.split(' ').slice(2).join(' ')}</span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-xs sm:max-w-none mx-auto"
          >
            <Link to="/reserve" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium transition-all shadow-xl active:scale-95 text-base sm:text-lg border border-accent/20">
              Reserve a Table
            </Link>
            <Link to="/menu" className="w-full sm:w-auto glass-panel hover:bg-white/30 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium transition-all active:scale-95 text-base sm:text-lg">
              Explore the Menu
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ y: 80, opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-4 text-charcoal tracking-tight">Chef's Signatures</h2>
          <p className="text-charcoal/60 text-lg">A selection of our most celebrated creations.</p>
        </motion.div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
          {featuredDishes.map((dish, i) => (
            <Link to="/menu" state={{ selectedItemId: dish.id }} key={dish.id} className="block group w-[75vw] md:w-auto shrink-0 snap-center">
              <motion.div 
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
                className="glass-panel rounded-3xl p-3 md:p-4 flex flex-col h-full bg-white/60 relative cursor-pointer group shadow-sm md:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-4 md:mb-6 shadow-sm">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-2 md:px-4 pb-2 md:pb-4 flex flex-col flex-grow relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-3">
                    <h3 className="font-serif text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">{dish.name}</h3>
                    <span className="font-mono text-sm md:text-base text-accent font-medium mt-1 whitespace-nowrap">{formatPrice(dish.price)}</span>
                  </div>
                  <p className="text-charcoal/70 text-xs md:text-sm flex-grow line-clamp-2 md:line-clamp-none">{dish.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/menu" className="inline-flex items-center space-x-2 text-accent font-medium hover:opacity-80 transition-all hover:gap-4 p-4">
            <span>Explore the full menu</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* The Experience */}
      <section className="py-24 bg-accent/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2 text-accent mb-4 font-bold tracking-widest uppercase text-sm">
                  <Star size={16} fill="currentColor" />
                  <span>Exceptional Dining</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif mb-6 text-charcoal tracking-tight">The Experience</h2>
                <p className="text-lg text-charcoal/70 mb-10 leading-relaxed max-w-lg">
                  Beyond the plate, we offer a sanctuary of taste and atmosphere. 
                  From intimate candlelight dinners to grand celebrations, 
                  every detail is curated to provide an unforgettable evening.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/rooms" className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-accent/90 active:scale-95 shadow-lg">
                    Private Dining
                  </Link>
                  <Link to="/reserve" className="inline-flex items-center justify-center glass-panel border border-accent/20 text-accent px-8 py-4 rounded-full font-bold transition-all hover:bg-accent/5 active:scale-95">
                    Reserve a Table
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop" 
                  alt="Fine Dining Atmosphere" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-32 bg-white relative overflow-hidden">
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full border-[1px] border-accent/5 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -60, opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ x: 0, opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={restaurant.interiorImage} 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-cream p-8 rounded-3xl shadow-glass hidden md:block max-w-xs group-hover:-translate-y-2 transition-transform duration-500"
              >
                <p className="font-serif text-2xl text-accent leading-snug">"Every ingredient has a purpose, every dish a soul."</p>
              </motion.div>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                viewport={{ once: true }}
                className="h-1 bg-accent mb-8"
              />
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-serif mb-6 text-charcoal tracking-tight leading-tight">Crafted with Passion, <br />Served with Grace</h2>
                <p className="text-lg text-charcoal/70 mb-10 leading-relaxed max-w-lg">
                  We believe that fine dining should be an approachable luxury. 
                  Our kitchen balances classical techniques with modern innovation, 
                  sourcing only the finest seasonal ingredients from local artisans.
                </p>
                <Link to="/about" className="group inline-flex items-center gap-4 bg-transparent border border-charcoal/20 hover:border-accent hover:text-accent px-8 py-4 rounded-full transition-all font-medium overflow-hidden relative">
                  <span className="relative z-10 transition-colors">Our Story</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location teaser */}
      <section className="pt-32 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="bg-accent-light/40 border border-white/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-soft"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <MapPin size={300} />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-10 text-charcoal tracking-tight">Join Us at the Table</h2>
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-5 transition-transform"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold mb-1 text-charcoal">Address</h4>
                    <p className="text-charcoal/70 leading-relaxed text-sm">{restaurant.address}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-5 transition-transform"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-accent shrink-0">
                    <Clock size={20} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold mb-1 text-charcoal">Dinner Service</h4>
                    <p className="text-charcoal/70 leading-relaxed text-sm whitespace-pre-line">{restaurant.hours}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-5 transition-transform"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-accent shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold mb-1 text-charcoal">Reservations</h4>
                    <p className="text-charcoal/70 leading-relaxed text-sm">{restaurant.phone}</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center md:items-end space-y-4">
              <Link to="/reserve" className="w-full md:w-auto bg-charcoal text-white hover:bg-warm-black px-10 py-5 rounded-full text-lg font-medium transition-transform active:scale-95 text-center shadow-xl flex items-center justify-center gap-3 group">
                <span className="relative">Reserve Now</span>
              </Link>
              <Link to="/contact" className="text-sm font-medium text-charcoal/60 hover:text-accent transition-colors underline underline-offset-4">
                View map and contact form
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

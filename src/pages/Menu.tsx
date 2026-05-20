import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Search, ArrowRight, ChefHat, Utensils, Star } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuCategories, menuItems, formatPrice } from '../data/menuItems';
import { restaurant } from '../data/restaurantInfo';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<typeof menuItems[0] | null>(null);
  const [showFullMenu, setShowFullMenu] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Watch for location state
  useEffect(() => {
    if (location.state?.selectedItemId) {
      const item = menuItems.find(i => i.id === location.state.selectedItemId);
      if (item) {
        setSelectedItem(item);
        setShowFullMenu(true);
        // Clear state so it doesn't reopen on refresh
        navigate('.', { replace: true, state: {} });
      }
    }
  }, [location.state, navigate]);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!showFullMenu) {
    return (
      <div className="pt-32 pb-24 min-h-screen">
        <section className="px-4 md:px-8 max-w-7xl mx-auto text-center mb-16 overflow-hidden">
          <motion.h1 
            initial={{ y: "110%", rotate: -2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif text-charcoal mb-6"
          >
            Hilltop <span className="text-accent italic">Dining</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-charcoal/60 max-w-2xl mx-auto"
          >
            Experience exquisite flavors with a view. Our restaurant offers a curated selection of local and international dishes, prepared with the freshest ingredients and served in a serene hilltop setting.
          </motion.p>
        </section>

        {/* Restaurant Highlights */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: ChefHat, title: "Scenic Views", desc: "Enjoy your meal while overlooking the stunning landscape of Kampala city." },
            { icon: Utensils, title: "Fresh & Local", desc: "We source our ingredients from local markets to ensure peak flavor and quality." },
            { icon: Star, title: "Intimate Setting", desc: "Our dining area is designed for comfort and privacy, perfect for quiet meals or special gatherings." }
          ].map((feature, i) => (
            <motion.div 
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-[2rem] bg-white/60 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 mx-auto">
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-charcoal">{feature.title}</h3>
              <p className="text-charcoal/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* CTA to Menu */}
        <section className="px-4 md:px-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel bg-charcoal text-white rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Explore Our Culinary Offerings</h2>
              <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                From hilltop breakfasts to elegant dinners, discover the full range of dishes our kitchen has to offer.
              </p>
              <button 
                onClick={() => setShowFullMenu(true)}
                className="group inline-flex items-center gap-4 bg-accent text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-accent/90 active:scale-95 shadow-xl"
              >
                <span>View Full Menu</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
              <ChefHat size={300} />
            </div>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen relative">
      {/* Decorative background element */}
      <motion.div 
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full border-[1px] border-charcoal/5 pointer-events-none -z-10"
      />

      <div className="flex items-center gap-4 mb-10 overflow-hidden">
        <button 
          onClick={() => setShowFullMenu(false)}
          className="w-12 h-12 rounded-full bg-white/60 border border-charcoal/10 flex items-center justify-center text-charcoal hover:bg-white transition-colors shrink-0"
        >
          <ChevronLeft size={24} />
        </button>
        <div>
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-serif text-charcoal"
          >
            Our Menu
          </motion.h1>
        </div>
      </div>

      {/* Categories and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 mb-10 sm:mb-16">
        <div className="w-full md:w-auto overflow-x-auto hide-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex items-center gap-2 sm:gap-3 w-max">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category 
                    ? 'bg-charcoal text-white shadow-md' 
                    : 'bg-white/60 text-charcoal/70 hover:bg-white border border-charcoal/10 hover:border-charcoal/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative w-full md:w-72 shrink-0">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-charcoal/40" />
          </div>
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/60 focus:bg-white border border-charcoal/10 focus:border-charcoal/30 rounded-full text-sm font-medium text-charcoal placeholder-charcoal/40 transition-all focus:outline-none shadow-sm focus:shadow-md"
          />
        </div>
      </div>

      {/* Menu Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 pb-16 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((dish) => (
            <motion.div
              layoutId={`card-${dish.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              key={dish.id}
              onClick={() => setSelectedItem(dish)}
              className="glass-panel bg-white/70 rounded-[1.25rem] md:rounded-[1.5rem] p-3 md:p-5 flex flex-col cursor-pointer group"
            >
              <motion.div layoutId={`image-container-${dish.id}`} className="relative h-32 md:h-56 rounded-[1rem] md:rounded-[1.25rem] overflow-hidden mb-3 md:mb-5 shrink-0">
                <motion.img 
                  layoutId={`image-${dish.id}`}
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1 md:mb-2 gap-1 md:gap-0">
                <motion.h3 layoutId={`title-${dish.id}`} className="font-serif text-base md:text-xl font-bold pr-2">{dish.name}</motion.h3>
                <motion.span layoutId={`price-${dish.id}`} className="font-mono text-sm md:text-base text-accent font-medium whitespace-nowrap">{formatPrice(dish.price)}</motion.span>
              </div>
              <motion.p layoutId={`desc-${dish.id}`} className="text-charcoal/70 text-xs md:text-sm pb-1 md:pb-2 leading-snug md:leading-relaxed flex-grow line-clamp-3 md:line-clamp-none">
                {dish.description}
              </motion.p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-warm-black/60 backdrop-blur-sm z-[60]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[60] p-4 md:p-8 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedItem.id}`}
                className="bg-cream w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row relative"
              >
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-charcoal hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>
                
                {/* Image Carousel */}
                <div className="w-full md:w-1/2 h-64 md:h-[450px] relative shrink-0">
                  <ImageCarousel images={selectedItem.images || [selectedItem.image]} id={selectedItem.id} />
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-center max-h-[60vh] md:max-h-[450px] overflow-y-auto w-full md:w-1/2 custom-scrollbar">
                  <motion.div layoutId={`title-container-${selectedItem.id}`} className="mb-4 shrink-0">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">{selectedItem.category}</span>
                    <motion.h3 layoutId={`title-${selectedItem.id}`} className="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                      {selectedItem.name}
                    </motion.h3>
                  </motion.div>
                  
                  <motion.p layoutId={`desc-${selectedItem.id}`} className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-8">
                    {selectedItem.description}
                  </motion.p>
                  
                  <div className="mt-auto flex items-center justify-between shrink-0">
                    <motion.span layoutId={`price-${selectedItem.id}`} className="font-mono text-2xl text-accent font-medium">
                      {formatPrice(selectedItem.price)}
                    </motion.span>
                    <button className="bg-charcoal text-white hover:bg-warm-black px-6 py-3 rounded-full font-medium transition-transform active:scale-95 shadow-md">
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ImageCarousel({ images, id }: { images: string[], id: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div layoutId={`image-container-${id}`} className="w-full h-full relative group overflow-hidden bg-white/50">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          layoutId={currentIndex === 0 ? `image-${id}` : undefined}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.3 }}
          src={images[currentIndex]}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md border-2 border-charcoal rounded-full flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 transition-all hover:bg-white z-10 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md border-2 border-charcoal rounded-full flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 transition-all hover:bg-white z-10 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4 shadow-sm' : 'bg-white/50 border border-white/20'}`}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

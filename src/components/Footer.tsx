import { restaurant } from '../data/restaurantInfo';

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 py-12 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="space-y-4">
          {restaurant.logo && (
            <img src={restaurant.logo} alt={restaurant.name} className="h-12 w-auto object-contain mx-auto md:mx-0 mb-4 brightness-0 invert" />
          )}
          <h3 className="font-serif text-2xl text-white">{restaurant.name}</h3>
          <p className="text-sm max-w-sm mx-auto md:mx-0">{restaurant.tagline}</p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Visit Us</h4>
          <p className="text-sm">{restaurant.address}</p>
          <p className="text-sm">{restaurant.hours}</p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs">Reach Out</h4>
          <p className="text-sm">{restaurant.phone}</p>
          <p className="text-sm">{restaurant.email}</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs text-cream/50">
        <p>© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

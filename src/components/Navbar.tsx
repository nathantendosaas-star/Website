import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { restaurant } from '../data/restaurantInfo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Reserve', path: '/reserve' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {restaurant.logo ? (
              <img src={restaurant.logo} alt={restaurant.name} className="h-8 md:h-10 w-auto object-contain rounded-sm" />
            ) : (
              <span className="text-xl md:text-2xl font-serif font-bold text-charcoal tracking-tight">
                {restaurant.name}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-charcoal/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/reserve"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-md active:scale-95"
            >
              Book Table
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-charcoal p-2 focus:outline-none bg-white/50 backdrop-blur-md rounded-full shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-[88px] left-4 right-4 z-40 bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-glass border border-white/40 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive ? 'bg-accent/10 text-accent font-bold' : 'text-charcoal hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-2">
                <Link
                  to="/reserve"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center bg-charcoal text-white px-4 py-3.5 rounded-xl text-lg font-medium shadow-md w-full"
                >
                  Book Table
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

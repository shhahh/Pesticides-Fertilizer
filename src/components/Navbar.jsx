import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Leaf, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Raw Honey', path: '/honey', icon: <Droplets className="w-4 h-4 mr-1 text-brand-amber-400" /> },
    { name: 'Farmer\'s Corner', path: '/farmers', icon: <Leaf className="w-4 h-4 mr-1 text-brand-green-400" /> },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Raza Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold bg-gradient-to-r from-brand-amber-400 to-brand-green-500 bg-clip-text text-transparent leading-none">
                RAZA
              </span>
              <span className="hidden sm:inline-block text-stone-500 font-bold tracking-[0.1em] text-[8px] uppercase mt-1">
                Pesticides & Fertilizer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center text-sm font-medium transition-colors hover:text-brand-amber-400 ${location.pathname === link.path ? 'text-brand-amber-400' : 'text-stone-300'
                  }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <button className="bg-brand-amber-500 hover:bg-brand-amber-600 text-stone-900 px-5 py-2 rounded-full text-sm font-bold transition-transform active:scale-95 shadow-lg shadow-brand-amber-500/20">
              Inquiry
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-3 py-4 text-base font-medium border-b border-white/5 ${location.pathname === link.path ? 'text-brand-amber-400' : 'text-stone-300'
                    }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full bg-brand-amber-500 text-stone-900 py-3 rounded-xl font-bold">
                  Send Inquiry
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

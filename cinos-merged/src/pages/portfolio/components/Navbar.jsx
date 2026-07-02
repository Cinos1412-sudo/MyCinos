import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'ABOUT', id: 'about' },
    { label: 'WORK', id: 'work' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 left-0 w-full h-24 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 transition-all duration-500 ${
        scrolled ? 'bg-[#0f1115]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-display font-bold text-2xl tracking-tight text-white hover:opacity-80 transition-opacity"
      >
        TOTO<span className="text-accent">.</span>
      </button>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-sm font-semibold text-gray-300 uppercase tracking-widest hover:text-accent transition-colors duration-300 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </div>

      {/* Action Button */}
      <button
        onClick={() => scrollTo('contact')}
        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:glow-green transition-all duration-300"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      </button>
    </motion.nav>
  );
};

export default Navbar;

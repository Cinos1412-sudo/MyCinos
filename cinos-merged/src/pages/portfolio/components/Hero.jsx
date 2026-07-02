import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

const Hero = () => {
  const [dockedSide, setDockedSide] = useState(null); // null | 'left' | 'right'
  const heroRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDragEnd = (_, info) => {
    const edgeThreshold = 140;
    const vw = window.innerWidth;
    if (info.point.x < edgeThreshold) {
      setDockedSide('left');
    } else if (info.point.x > vw - edgeThreshold) {
      setDockedSide('right');
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg grid-bg">
      {/* Background "DESIGN" text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display font-bold text-[20vw] opacity-[0.02] text-white tracking-tighter">
          DESIGN
        </span>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-[1400px] mx-auto">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Subheading */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Développeur Web &amp; App
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tighter">
              <span className="text-white block">DIGITAL</span>
              <span className="block">
                <span className="text-stroke">PRODUCTS</span>
                <span className="text-accent">.</span>
              </span>
            </h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg"
            >
              Je conçois et développe des sites web et des applications mobiles,
              du prototype jusqu'à la mise en production. Frontend, backend,
              intégration API — je construis des produits rapides, fiables et
              agréables à utiliser, en gardant toujours un œil sur le détail
              qui fait la différence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 mt-4"
            >
              <button
                onClick={() => scrollTo('work')}
                className="group flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-accent text-white font-semibold text-sm hover:scale-105 hover:glow-green-strong transition-all duration-300"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="group flex items-center gap-3 px-7 py-4 rounded-full bg-dark-surface border border-white/20 text-white font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-accent" />
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - ID Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <AnimatePresence mode="wait">
              {dockedSide ? (
                /* Docked compact badge — fixed to the screen edge, persists across scroll */
                <motion.button
                  key="docked"
                  type="button"
                  onClick={() => setDockedSide(null)}
                  initial={{ opacity: 0, x: dockedSide === 'left' ? -60 : 60, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: dockedSide === 'left' ? -60 : 60, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  whileHover={{ scale: 1.03 }}
                  className={`group fixed top-1/2 z-40 flex -translate-y-1/2 items-center gap-3 glass rounded-full py-3 pl-3 pr-5 hover:glow-green transition-shadow cursor-pointer ${
                    dockedSide === 'left'
                      ? 'left-3 sm:left-4 flex-row'
                      : 'right-3 sm:right-4 flex-row-reverse'
                  }`}
                  aria-label="Rouvrir la carte de profil"
                >
                  <img
                    src="/IMG_20260701_162300.jpg"
                    alt="Toto Christian Marcel"
                    className="h-10 w-10 flex-shrink-0 rounded-full border border-white/20 object-cover"
                  />
                  <div
                    className={`hidden sm:flex flex-col ${
                      dockedSide === 'left' ? 'items-start text-left' : 'items-end text-right'
                    }`}
                  >
                    <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      Disponible
                    </span>
                    <span className="font-display text-sm font-bold tracking-tight text-white">
                      Toto Christian Marcel
                    </span>
                  </div>
                </motion.button>
              ) : (
                /* Free-floating draggable ID card */
                <motion.div
                  key="card"
                  drag
                  dragConstraints={heroRef}
                  dragElastic={0.15}
                  dragMomentum={false}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -15, 0],
                    rotateZ: [-1, 1, -1],
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                    y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    rotateZ: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileDrag={{ scale: 1.05, rotateZ: 0 }}
                  className="relative w-[280px] cursor-grab touch-none active:cursor-grabbing sm:w-[320px] md:w-[360px]"
                >
                  {/* Lanyard Strip */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-3 h-20 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] z-0" />
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#2a2a2a] border border-white/10 z-0" />

                  {/* Card */}
                  <div className="relative bg-dark-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                    {/* Inner border */}
                    <div className="absolute inset-[6px] rounded-xl border border-white/5 pointer-events-none" />

                    {/* Photo */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <img
                        src="/IMG_20260701_162300.jpg"
                        alt="Toto Christian Marcel"
                        draggable={false}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                    </div>

                    {/* Card Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                          Available for work
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                        Toto Christian Marcel
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Développeur Web &amp; Mobile
                      </p>
                    </div>

                    {/* Decorative corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-accent/30 rounded-tl-sm" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-accent/30 rounded-tr-sm" />
                  </div>

                  {/* Drag hint */}
                  <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-gray-600">
                    Glisse-moi vers un bord pour m'accrocher
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

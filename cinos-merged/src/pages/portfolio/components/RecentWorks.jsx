import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'Web Design',
    title: 'Neon Horizon',
    description: 'A futuristic e-commerce platform blending cyberpunk aesthetics with seamless shopping experiences. Features real-time inventory, AI-powered recommendations, and immersive product visualizations.',
    tags: ['React', 'Three.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Mobile App',
    title: 'Pulse Fitness',
    description: 'A health and wellness app with personalized workout plans, nutrition tracking, and community challenges. Gamified experience with real-time progress analytics.',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Dashboard',
    title: 'DataFlow Analytics',
    description: 'Enterprise-grade analytics dashboard with real-time data visualization, custom report builders, and collaborative workspace features for data-driven teams.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Brand Identity',
    title: 'Aether Studios',
    description: 'Complete brand identity system for a creative agency, including logo design, typography system, color palette, and comprehensive brand guidelines.',
    tags: ['Figma', 'Illustrator', 'Motion'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
];

const RecentWorks = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleCardClick = (index) => {
    if (index === activeIdx) {
      // Cycle to next
      setActiveIdx((prev) => (prev + 1) % projects.length);
    } else {
      setActiveIdx(index);
    }
  };

  const activeProject = projects[activeIdx];

  return (
    <section id="work" className="relative py-32 bg-dark-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Portfolio
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tighter text-white">
              RECENT
              <br />
              <span className="text-stroke">WORKS</span>
              <span className="text-accent">.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-accent hover:text-accent transition-all duration-300">
            View All Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left - Card Stack */}
          <div className="lg:col-span-7">
            <div className="relative h-[340px] sm:h-[450px] md:h-[480px] perspective-[1200px]">
              {projects.map((project, index) => {
                const diff = (index - activeIdx + projects.length) % projects.length;
                const isActive = diff === 0;

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => handleCardClick(index)}
                    animate={{
                      y: diff * 35,
                      scale: 1 - diff * 0.05,
                      rotateX: diff * 2,
                      zIndex: projects.length - diff,
                      opacity: diff > 2 ? 0 : 1 - diff * 0.15,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                    style={{
                      transformOrigin: 'center top',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />

                    {/* Card Label */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                          {project.category}
                        </span>
                        <h3 className="font-display font-bold text-xl text-white mt-1">
                          {project.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIdx(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === activeIdx
                      ? 'w-8 h-3 bg-accent'
                      : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Description Panel */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                    {activeProject.category}
                  </span>
                  <span className="w-8 h-[1px] bg-white/20" />
                  <span className="text-xs text-gray-500">
                    0{activeProject.id} / 0{projects.length}
                  </span>
                </div>

                <h3 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                  {activeProject.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-white/[0.02]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="group flex items-center gap-3 mt-4 text-accent font-semibold text-sm hover:underline underline-offset-4 transition-all">
                  Explore Project
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;

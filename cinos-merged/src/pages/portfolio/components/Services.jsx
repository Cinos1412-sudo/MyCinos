import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'BRIEFING',
    description: 'Every great project starts with understanding. I dive deep into your business goals, target audience, and competitive landscape to establish a solid foundation. Through collaborative workshops and detailed questionnaires, we align on vision, scope, and success metrics before a single pixel is placed.',
  },
  {
    number: '02',
    title: 'ANALYTICS',
    description: 'Data-driven decisions power exceptional design. I analyze user behavior, conversion funnels, and engagement metrics to identify opportunities and pain points. This phase ensures every design choice is backed by evidence, not assumptions.',
  },
  {
    number: '03',
    title: 'PROTOTYPING',
    description: 'Rapid iteration is the key to innovation. I build interactive wireframes and low-fidelity prototypes to test concepts early and often. This collaborative process allows us to validate ideas, gather feedback, and refine the user journey before committing to high-fidelity design.',
  },
  {
    number: '04',
    title: 'DESIGN',
    description: 'This is where vision becomes reality. I craft pixel-perfect interfaces with meticulous attention to typography, color, spacing, and motion. Every element is designed to serve the user while reinforcing your brand identity. The result is a visual system that feels both fresh and timeless.',
  },
  {
    number: '05',
    title: 'ADAPTIVE',
    description: 'Great design works everywhere. I ensure your product delivers a flawless experience across all devices and screen sizes. From mobile-first responsive layouts to adaptive interactions, every breakpoint is carefully considered to maintain usability and visual impact.',
  },
  {
    number: '06',
    title: 'THE FINAL',
    description: 'Launch is just the beginning. I provide comprehensive handoff documentation, design system guidelines, and ongoing support to ensure smooth implementation. Post-launch, I monitor performance and iterate based on real user data to continuously improve the experience.',
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-32 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Process
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tighter text-white">
            STAGES OF WEBSITE
            <br />
            <span className="text-stroke">DEVELOPMENT</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-6 flex items-center justify-between group text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="font-display font-bold text-sm text-accent/60">
                    {service.number}
                  </span>
                  <span className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-accent" />
                  ) : (
                    <Plus className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-12 sm:pl-16 pr-14">
                      <p className="text-gray-400 leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

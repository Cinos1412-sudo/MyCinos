import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'UI/UX Design',
    'Figma',
    'React.js',
    'Framer Motion',
    'Tailwind CSS',
    'Prototyping',
    'Design Systems',
    'User Research',
    'Wireframing',
    'Visual Design',
    'Interaction Design',
    'Accessibility',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section id="about" className="relative py-32 bg-dark-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                About Me
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tighter text-white mb-8">
              DESIGNING WITH
              <br />
              <span className="text-stroke">PURPOSE</span>
              <span className="text-accent">.</span>
            </h2>

            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                With a multidisciplinary background spanning design, technology, and human psychology, 
                I approach every project with a holistic perspective. My work bridges the gap between 
                aesthetic beauty and functional excellence, creating digital experiences that resonate 
                deeply with users.
              </p>
              <p>
                I believe great design is invisible — it guides, delights, and empowers without demanding 
                attention. Every interface I craft is built on a foundation of rigorous user research, 
                iterative prototyping, and an unwavering commitment to accessibility.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <span className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">
                  20<span className="text-accent">+</span>
                </span>
                <p className="text-sm text-gray-400 mt-2 uppercase tracking-wider">Awards Won</p>
              </div>
              <div className="border-l border-white/10 pl-8">
                <span className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">
                  100<span className="text-accent">%</span>
                </span>
                <p className="text-sm text-gray-400 mt-2 uppercase tracking-wider">Commitment</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Toolkit */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                My Toolkit
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={chipVariants}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: '#00df8f',
                    color: '#00df8f',
                    boxShadow: '0 0 15px rgba(0, 223, 143, 0.3)',
                  }}
                  className="px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-gray-300 bg-white/[0.02] cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Decorative element */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xl">⚡</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Always Learning</p>
                  <p className="text-sm text-gray-500">Exploring new tools & techniques daily</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

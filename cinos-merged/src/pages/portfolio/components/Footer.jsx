import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const menuLinks = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { label: 'Dribbble', icon: Dribbble, href: '#' },
    { label: 'LinkedIn', icon: Linkedin, href: '#' },
    { label: 'Twitter', icon: Twitter, href: '#' },
    { label: 'GitHub', icon: Github, href: '#' },
  ];

  return (
    <footer id="contact" className="relative pt-32 pb-10 bg-dark-bg border-t border-white/10 overflow-hidden">
      {/* Background "CONTACT" text */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-bold text-[25vw] opacity-[0.05] text-white tracking-tighter leading-none whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tighter text-white mb-6">
              HOW CAN I
              <br />
              <span className="text-stroke">HELP</span>
              <span className="text-accent">?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              I am currently available for freelance projects and full-time positions. 
              If you have a project that needs some creative love, I would love to hear about it.
            </p>
            <a
              href="mailto:totochristianmarcel@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-dark-bg font-bold text-sm hover:bg-accent hover:text-white transition-all duration-300 group"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-12"
          >
            {/* Menu */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                Menu
              </h4>
              <ul className="space-y-4">
                {menuLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm font-medium"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                Socials
              </h4>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors duration-300 text-sm font-medium group"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            © 2026 Toto Christian Marcel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

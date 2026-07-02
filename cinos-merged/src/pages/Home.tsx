import { useState, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Accueil", to: "/", active: true },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Univers", to: "#univers" },
  { label: "Journal", to: "#journal" },
  { label: "Contact", to: "#contact" },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked interaction: the hero text reacts to how far the page has scrolled
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const heroY = useTransform(scrollY, [0, 320], [0, -80]);
  const heroScale = useTransform(scrollY, [0, 320], [1, 0.96]);
  const videoScale = useTransform(scrollY, [0, 320], [1, 1.08]);
  const navBg = useTransform(scrollY, [0, 80], [0, 1]);

  // Environment interaction: subtle parallax tilt following the pointer
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px, y: py });
  };
  const handlePointerLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative min-h-[160vh] w-full overflow-hidden bg-background"
    >
      {/* Fullscreen looping background video, subtly zooms in as you scroll */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{ scale: videoScale }}
        className="fixed inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Glassmorphic navigation — background intensifies once you start scrolling */}
      <motion.nav
        style={{
          backgroundColor: useTransform(navBg, (v) => `rgba(0, 20, 33, ${v * 0.55})`),
          backdropFilter: useTransform(navBg, (v) => `blur(${v * 12}px)`),
        }}
        className="fixed inset-x-0 top-0 z-30 flex flex-row items-center justify-between px-6 py-5 sm:px-8 sm:py-6"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between">
          <span
            className="text-3xl tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Cinos
          </span>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              item.to.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`text-sm transition-colors hover:text-foreground ${
                    item.active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <button className="liquid-glass hidden rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] sm:block">
              Me contacter
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="liquid-glass flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#001421]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span
                className="text-3xl tracking-tight text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Cinos
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                className="liquid-glass flex h-11 w-11 items-center justify-center rounded-full text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {navItems.map((item, i) =>
                item.to.startsWith("/") ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={`text-3xl ${
                        item.active ? "text-foreground" : "text-muted-foreground"
                      }`}
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.label}
                    href={item.to}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="text-3xl text-muted-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {item.label}
                  </motion.a>
                )
              )}
              <button className="liquid-glass mt-4 rounded-full px-8 py-3 text-sm text-foreground">
                Me contacter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero section — fades, lifts and tilts with scroll + pointer position */}
      <motion.section
        style={{
          opacity: heroOpacity,
          y: heroY,
          scale: heroScale,
          rotateX: tilt.y * -4,
          rotateY: tilt.x * 4,
        }}
        className="fixed inset-x-0 top-0 z-10 flex min-h-screen flex-col items-center justify-center px-6 py-[90px] text-center"
      >
        <h1
          className="max-w-7xl animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Une <em className="not-italic text-muted-foreground">passion malgache</em>, un{" "}
          <em className="not-italic text-muted-foreground">univers sans limites.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Je m'appelle Cinos, développeur malgache passionné de technologie, de
          jeux vidéo, de manga et d'échecs. Ici, je partage mon parcours, mes
          créations et les univers qui nourrissent chacune de mes idées.
        </p>

        <button className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03]">
          Explorer mon univers
        </button>

        <motion.span
          style={{ opacity: useTransform(scrollY, [0, 150], [1, 0]) }}
          className="absolute bottom-10 text-xs uppercase tracking-widest text-muted-foreground"
        >
          Fais défiler ↓
        </motion.span>
      </motion.section>
    </div>
  );
}

export default Home;

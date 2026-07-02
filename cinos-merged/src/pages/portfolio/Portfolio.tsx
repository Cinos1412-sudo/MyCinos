import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import RecentWorks from "./components/RecentWorks";
import Services from "./components/Services";
import Footer from "./components/Footer";

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-dark-bg">
      <Link
        to="/"
        className="fixed left-4 top-1/2 z-50 -translate-y-1/2 rotate-[-90deg] text-xs uppercase tracking-widest text-gray-400 hover:text-accent transition-colors md:left-6"
      >
        ← Cinos
      </Link>
      <Navbar />
      <Hero />
      <About />
      <RecentWorks />
      <Services />
      <Footer />
    </div>
  );
}

export default Portfolio;

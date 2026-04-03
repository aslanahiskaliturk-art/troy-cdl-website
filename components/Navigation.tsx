"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Grants & Tuition", href: "#grants" },
    { label: "Training", href: "#training" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cdl-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(255,209,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="font-oswald font-700 text-cdl-yellow text-xl md:text-2xl uppercase leading-tight tracking-tight">
                TROY CDL
              </span>
              <span className="font-oswald font-700 text-white text-base md:text-lg uppercase leading-tight tracking-tight">
                SCHOOL
              </span>
            </div>
            <div className="hidden sm:block h-10 w-px bg-cdl-yellow/30 mx-1" />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-white/50 text-xs uppercase tracking-widest font-inter">
                SRN
              </span>
              <span className="text-cdl-yellow font-oswald font-700 text-base tracking-wider">
                #2345
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-oswald text-white/80 hover:text-cdl-yellow text-sm uppercase tracking-widest transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cdl-yellow after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:9379931741"
              className="hidden sm:flex items-center gap-2 bg-cdl-red hover:bg-cdl-red-dark text-cdl-yellow font-oswald font-700 uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(196,18,48,0.5)] text-sm md:text-base"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              937-993-1741
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 hover:text-cdl-yellow transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 border-t border-cdl-yellow/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-oswald text-white/80 hover:text-cdl-yellow text-sm uppercase tracking-widest py-3 px-4 hover:bg-white/5 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9379931741"
              className="mt-4 flex items-center justify-center gap-2 bg-cdl-red text-cdl-yellow font-oswald font-700 uppercase tracking-wider px-5 py-3 rounded-full text-base"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              937-993-1741
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

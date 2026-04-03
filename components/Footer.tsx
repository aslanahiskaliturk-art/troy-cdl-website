export default function Footer() {
  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Grants & Tuition", href: "#grants" },
    { label: "Training", href: "#training" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-cdl-black border-t border-cdl-yellow/20">
      {/* Top yellow bar */}
      <div className="h-1 bg-cdl-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-oswald font-700 text-cdl-yellow text-3xl uppercase leading-tight">
                TROY CDL
              </h2>
              <h3 className="font-oswald font-700 text-white text-2xl uppercase leading-tight">
                SCHOOL
              </h3>
            </div>
            <p className="font-inter text-white/50 text-sm leading-relaxed max-w-xs">
              Professional CDL training in Dayton, Ohio. Helping students earn their
              Class A &amp; B commercial driver&apos;s licenses since day one.
            </p>
            <div className="flex gap-3 mt-2">
              {/* Social placeholders */}
              {[
                {
                  label: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  label: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 bg-white/10 hover:bg-cdl-yellow/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-oswald font-700 text-cdl-yellow text-sm uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-inter text-white/50 hover:text-cdl-yellow text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-cdl-yellow transition-all group-hover:w-4" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-oswald font-700 text-cdl-yellow text-sm uppercase tracking-widest mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:9379931741"
                className="flex items-start gap-3 group"
              >
                <svg className="w-5 h-5 text-cdl-red flex-shrink-0 mt-0.5 group-hover:text-cdl-yellow transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div>
                  <p className="font-oswald font-700 text-white text-lg group-hover:text-cdl-yellow transition-colors">
                    937-993-1741
                  </p>
                  <p className="font-inter text-white/40 text-xs uppercase tracking-widest">
                    Call Today — Limited Seats
                  </p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=1819+Troy+St+Dayton+OH+45404"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <svg className="w-5 h-5 text-cdl-red flex-shrink-0 mt-0.5 group-hover:text-cdl-yellow transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <p className="font-inter text-white/70 text-sm group-hover:text-white transition-colors leading-relaxed">
                    1819 Troy St<br />
                    Dayton, OH 45404
                  </p>
                  <p className="font-inter text-cdl-yellow/60 text-xs mt-1 uppercase tracking-widest group-hover:text-cdl-yellow transition-colors">
                    Get Directions →
                  </p>
                </div>
              </a>

              {/* School reg badge */}
              <div className="mt-2 inline-flex items-center gap-2 bg-cdl-yellow/10 border border-cdl-yellow/20 rounded-lg px-4 py-2">
                <svg className="w-4 h-4 text-cdl-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <span className="font-oswald font-700 text-cdl-yellow text-sm uppercase tracking-widest">
                  State Reg. #2345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/30 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Troy CDL School · 1819 Troy St, Dayton OH 45404 · School Registration #2345
          </p>
          <p className="font-inter text-white/20 text-xs">
            CDL Training &amp; Testing · Class A &amp; B
          </p>
        </div>
      </div>
    </footer>
  );
}

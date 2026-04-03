"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Semi-truck SVG silhouette
function TruckSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 130"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trailer */}
      <rect x="2" y="18" width="320" height="78" rx="5" fill="#FFD100" />
      <rect x="2" y="18" width="320" height="10" rx="5" fill="#E6BC00" />
      <line x1="115" y1="18" x2="115" y2="96" stroke="#0A0A0A" strokeWidth="2.5" opacity="0.25" />
      <line x1="228" y1="18" x2="228" y2="96" stroke="#0A0A0A" strokeWidth="2.5" opacity="0.25" />
      <text x="100" y="64" fill="#0A0A0A" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" opacity="0.3" letterSpacing="4">TROY CDL</text>

      {/* 5th wheel coupler */}
      <rect x="296" y="88" width="40" height="10" rx="2" fill="#888" />

      {/* Cab */}
      <path d="M336 18 L430 18 L455 52 L455 96 L336 96 Z" fill="#FFD100" />
      <path d="M336 18 L430 18 L430 28 L336 28 Z" fill="#E6BC00" />

      {/* Windshield */}
      <path d="M348 24 L418 24 L440 54 L348 54 Z" fill="#1A2A3A" opacity="0.85" />
      <line x1="395" y1="24" x2="405" y2="54" stroke="white" strokeWidth="1.5" opacity="0.3" />

      {/* Door */}
      <rect x="340" y="56" width="72" height="36" rx="3" fill="rgba(0,0,0,0.12)" />
      <rect x="348" y="64" width="30" height="20" rx="2" fill="rgba(255,255,255,0.08)" />

      {/* Door handle */}
      <rect x="400" y="73" width="10" height="3" rx="1.5" fill="rgba(0,0,0,0.3)" />

      {/* Exhaust stacks */}
      <rect x="328" y="2" width="9" height="22" rx="3" fill="#FFD100" />
      <rect x="342" y="8" width="7" height="16" rx="3" fill="#E6BC00" />

      {/* Fuel tank */}
      <rect x="336" y="72" width="22" height="28" rx="4" fill="#E6BC00" />

      {/* Front bumper/grill */}
      <rect x="450" y="56" width="14" height="36" rx="3" fill="#333" />
      <rect x="452" y="60" width="10" height="4" rx="1" fill="#555" />
      <rect x="452" y="66" width="10" height="4" rx="1" fill="#555" />
      <rect x="452" y="72" width="10" height="4" rx="1" fill="#555" />
      <rect x="452" y="78" width="10" height="4" rx="1" fill="#555" />

      {/* Headlight */}
      <rect x="452" y="50" width="10" height="8" rx="2" fill="#FFFAAA" />
      <rect x="450" y="86" width="14" height="6" rx="2" fill="#CC0000" opacity="0.7" />

      {/* Trailer wheels (axle 1) */}
      <circle cx="80" cy="104" r="24" fill="#1A1A1A" />
      <circle cx="80" cy="104" r="16" fill="#2A2A2A" />
      <circle cx="80" cy="104" r="8" fill="#404040" />
      <circle cx="80" cy="104" r="3" fill="#666" />

      {/* Trailer wheels (axle 2) */}
      <circle cx="170" cy="104" r="24" fill="#1A1A1A" />
      <circle cx="170" cy="104" r="16" fill="#2A2A2A" />
      <circle cx="170" cy="104" r="8" fill="#404040" />
      <circle cx="170" cy="104" r="3" fill="#666" />

      {/* Trailer wheels (axle 3) */}
      <circle cx="260" cy="104" r="24" fill="#1A1A1A" />
      <circle cx="260" cy="104" r="16" fill="#2A2A2A" />
      <circle cx="260" cy="104" r="8" fill="#404040" />
      <circle cx="260" cy="104" r="3" fill="#666" />

      {/* Cab wheels (steer) */}
      <circle cx="400" cy="104" r="24" fill="#1A1A1A" />
      <circle cx="400" cy="104" r="16" fill="#2A2A2A" />
      <circle cx="400" cy="104" r="8" fill="#404040" />
      <circle cx="400" cy="104" r="3" fill="#666" />

      {/* Cab wheels (drive) */}
      <circle cx="444" cy="104" r="24" fill="#1A1A1A" />
      <circle cx="444" cy="104" r="16" fill="#2A2A2A" />
      <circle cx="444" cy="104" r="8" fill="#404040" />
      <circle cx="444" cy="104" r="3" fill="#666" />

      {/* Road shadow */}
      <ellipse cx="280" cy="130" rx="270" ry="6" fill="rgba(0,0,0,0.25)" />
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video scrub on scroll
      const video = videoRef.current;
      if (video) {
        const setupScrub = () => {
          if (video.duration) {
            ScrollTrigger.create({
              trigger: containerRef.current,
              start: "top top",
              end: "+=300%",
              pin: true,
              scrub: 1.5,
              onUpdate: (self) => {
                video.currentTime = self.progress * video.duration;
              },
            });
          }
        };
        if (video.readyState >= 1) {
          setupScrub();
        } else {
          video.addEventListener("loadedmetadata", setupScrub, { once: true });
        }
      }

      // Hero entrance animations
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(headlineRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          subRef.current,
          { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          scrollIndicatorRef.current,
          { opacity: 0, duration: 0.6 },
          "-=0.2"
        );

      // Truck entrance
      gsap.from(truckRef.current, {
        x: "-110%",
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 0.8,
      });

      // Overlay parallax
      gsap.to(overlayRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-cdl-black overflow-hidden"
      style={{ height: "100svh" }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src="/truck-drive.mp4"
        muted
        playsInline
        preload="auto"
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        aria-hidden="true"
      />

      {/* Gradient overlays */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-cdl-black/90 via-cdl-black/60 to-transparent pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cdl-black via-transparent to-cdl-black/40 pointer-events-none" />

      {/* Diagonal stripe accent */}
      <div className="absolute inset-0 stripe-bg pointer-events-none opacity-50" />

      {/* Yellow accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-cdl-yellow" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 pt-20">
        {/* Badge */}
        <div
          ref={subRef}
          className="mb-6 flex items-center gap-3 flex-wrap justify-center"
        >
          <span className="badge">School Registration #2345</span>
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 font-inter text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">
            Dayton, Ohio
          </span>
        </div>

        {/* Headline */}
        <div ref={headlineRef}>
          <h1 className="font-oswald font-700 leading-none uppercase">
            <span className="block text-white text-[clamp(4rem,14vw,9rem)] drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
              TROY CDL
            </span>
            <span className="block text-cdl-yellow text-[clamp(4rem,14vw,9rem)] drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
              SCHOOL
            </span>
          </h1>
          <p className="font-oswald text-white/80 text-[clamp(1rem,3vw,1.5rem)] uppercase tracking-[0.3em] mt-4">
            One Stop Shop &middot; Training &amp; Testing &middot; Class A &amp; B
          </p>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-4">
          <a
            href="tel:9379931741"
            className="pill-btn text-[clamp(1.25rem,3vw,1.75rem)] px-10 py-4 shadow-[0_0_40px_rgba(196,18,48,0.4)]"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            937-993-1741
          </a>
          <p className="text-cdl-yellow/80 font-inter text-sm font-600 uppercase tracking-widest">
            Call Today &mdash; Limited Seats Available
          </p>
        </div>

        {/* Quick stats */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { value: "2–3 Wks", sub: "To Your CDL" },
            { value: "Class A & B", sub: "Licenses" },
            { value: "$5,500", sub: "Total Cost" },
            { value: "#2345", sub: "State Reg." },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="font-oswald text-cdl-yellow text-2xl md:text-3xl font-700">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-widest font-inter">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Truck silhouette at bottom */}
      <div
        ref={truckRef}
        className="absolute bottom-16 left-0 w-full px-4 pointer-events-none"
        style={{ maxWidth: "560px" }}
      >
        <TruckSVG className="w-full opacity-20 hard-shadow" />
      </div>

      {/* Road line at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-10 bg-gradient-to-t from-cdl-dark to-transparent" />
        <div className="asphalt-divider" />
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce-slow"
      >
        <span className="font-inter text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

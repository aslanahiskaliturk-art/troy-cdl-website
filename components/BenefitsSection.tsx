"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="30" fill="#0A0A0A" opacity="0.2" />
        <path d="M16 32l10 10 22-22" stroke="#0A0A0A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="28" stroke="#0A0A0A" strokeWidth="2" opacity="0.15" />
        <path d="M32 8v4M32 52v4M8 32h4M52 32h4" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
      </svg>
    ),
    title: "Unlimited Free Exam Retakes",
    desc: "Failed the knowledge test? No worries. We offer unlimited free retakes so you keep going until you pass — at no extra cost.",
    highlight: "UNLIMITED",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="10" y="20" width="44" height="34" rx="4" fill="#0A0A0A" opacity="0.15" stroke="#0A0A0A" strokeWidth="2.5" />
        <path d="M22 20v-6a10 10 0 0 1 20 0v6" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="37" r="5" fill="#0A0A0A" opacity="0.4" />
        <path d="M32 42v5" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: "Free Housing",
    desc: "Relocating for training? We've got you covered. Free housing is available so you can focus 100% on earning your CDL.",
    highlight: "FREE",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="26" stroke="#0A0A0A" strokeWidth="2.5" opacity="0.3" />
        <path d="M32 16v16l10 6" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="3" fill="#0A0A0A" opacity="0.5" />
      </svg>
    ),
    title: "Fit To Your Schedule",
    desc: "We work around your life — not the other way around. Flexible morning, evening, and weekend training slots available.",
    highlight: "FLEXIBLE",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="8" y="22" width="48" height="30" rx="5" fill="#0A0A0A" opacity="0.15" stroke="#0A0A0A" strokeWidth="2.5" />
        <path d="M8 32h48" stroke="#0A0A0A" strokeWidth="2" opacity="0.3" />
        <path d="M22 22v-6M42 22v-6" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" />
        <text x="32" y="48" textAnchor="middle" fill="#0A0A0A" fontFamily="Arial Black" fontSize="12" fontWeight="900" opacity="0.5">$5500</text>
      </svg>
    ),
    title: "Only $5,500 — Start Today!",
    desc: "Industry-leading CDL training at the most competitive price in the Dayton area. OhioMeansJobs grants accepted.",
    highlight: "$5,500",
  },
];

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Section heading
      gsap.from(".benefits-heading", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Cards stagger
      gsap.from(".benefit-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative bg-cdl-yellow py-12 md:py-16 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Section header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="benefits-heading text-center mb-10">
          <span className="inline-block bg-cdl-black text-cdl-yellow font-oswald font-700 uppercase tracking-[0.3em] text-xs px-6 py-2 mb-6">
            Why Choose Us
          </span>
          <h2 className="font-oswald font-700 text-cdl-black text-[clamp(2.5rem,7vw,5rem)] uppercase leading-none drop-shadow-[3px_3px_0_rgba(0,0,0,0.15)]">
            Everything You Need<br />
            <span className="text-cdl-red drop-shadow-[3px_3px_0_rgba(0,0,0,0.2)]">
              To Get Your CDL
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefit-card group bg-cdl-black rounded-2xl p-8 flex flex-col items-start gap-5 hover:bg-cdl-dark transition-all duration-300 hover:-translate-y-3 cursor-default"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,209,0,0.08) inset",
              }}
            >
              {/* Highlight badge */}
              <span className="font-oswald font-700 text-cdl-yellow text-sm uppercase tracking-widest bg-cdl-red px-3 py-1 rounded">
                {b.highlight}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 bg-cdl-yellow rounded-xl p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {b.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-oswald font-700 text-white text-xl uppercase leading-tight mb-3">
                  {b.title}
                </h3>
                <p className="font-inter text-white/60 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="mt-auto w-full h-0.5 bg-cdl-yellow/20 group-hover:bg-cdl-yellow/60 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <p className="font-oswald text-cdl-black text-2xl md:text-3xl font-700 uppercase">
            Ready to start your career?
          </p>
          <a
            href="tel:9379931741"
            className="flex items-center gap-2 bg-cdl-red text-cdl-yellow font-oswald font-700 uppercase tracking-wider px-8 py-4 rounded-full text-lg hover:bg-cdl-red-dark transition-all duration-200 hover:shadow-[0_8px_32px_rgba(196,18,48,0.5)] hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            937-993-1741
          </a>
        </div>
      </div>
    </section>
  );
}

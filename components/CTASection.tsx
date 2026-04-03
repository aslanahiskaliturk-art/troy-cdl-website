"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      // Phone number pulsing scale on scroll trigger
      gsap.from(phoneRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-cdl-red py-16 md:py-24 overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Corner chevrons */}
      <div className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-l-cdl-yellow border-b-[100px] border-b-transparent" />
      <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[100px] border-r-cdl-yellow border-t-[100px] border-t-transparent" />
      <div className="absolute top-0 right-0 w-0 h-0 border-r-[60px] border-r-cdl-black/30 border-b-[60px] border-b-transparent" />
      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[60px] border-l-cdl-black/30 border-t-[60px] border-t-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <div className="cta-content">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-cdl-black text-cdl-yellow font-oswald font-700 uppercase tracking-widest text-sm px-6 py-2 rounded-full mb-8 animate-pulse2">
            <span className="w-2 h-2 bg-cdl-yellow rounded-full" />
            Limited Seats Available
          </div>

          <h2 className="font-oswald font-700 text-white text-[clamp(2.5rem,8vw,6rem)] uppercase leading-none drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)] mb-4">
            Start Your CDL<br />
            <span className="text-cdl-yellow">Career Today</span>
          </h2>

          <p className="font-inter text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            One phone call is all it takes. Our enrollment team will walk you through
            everything — grants, scheduling, housing — and get you started on the path
            to a high-paying CDL career.
          </p>

          {/* Phone number — the star */}
          <a
            ref={phoneRef}
            href="tel:9379931741"
            className="inline-flex flex-col items-center justify-center bg-cdl-yellow text-cdl-black rounded-3xl px-10 md:px-16 py-6 md:py-8 hover:bg-cdl-yellow-dark transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] group"
          >
            <span className="font-oswald font-700 text-[clamp(2rem,8vw,5rem)] leading-none drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform">
              937-993-1741
            </span>
            <span className="font-inter text-cdl-black/60 text-sm uppercase tracking-widest mt-2">
              Tap to Call Now
            </span>
          </a>

          {/* Supporting info */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                ),
                text: "1819 Troy St, Dayton OH 45404",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                ),
                text: "School Registration #2345",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                ),
                text: "State Licensed & Certified",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-white/70 font-inter text-sm"
              >
                <span className="text-cdl-yellow flex-shrink-0">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

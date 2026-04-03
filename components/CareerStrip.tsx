"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { value: "$69K+", label: "Avg. Class A Salary", sub: "Ohio · First Year" },
  { value: "$120K+", label: "Senior Driver Earnings", sub: "5+ Years Experience" },
  { value: "57%", label: "Drivers Over 45", sub: "Huge Hiring Demand" },
  { value: "2–3 Wks", label: "Time to Your CDL", sub: "Troy CDL School" },
];

export default function CareerStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".career-stat", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-cdl-dark border-y border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <p className="font-oswald text-white/30 text-xs uppercase tracking-[0.3em] text-center mb-6">
          Ohio CDL Career Outlook · 2025–2026
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, i) => (
            <div key={i} className="career-stat text-center group">
              <div className="font-oswald font-700 text-cdl-yellow text-4xl md:text-5xl leading-none group-hover:scale-105 transition-transform inline-block">
                {s.value}
              </div>
              <div className="font-oswald text-white text-sm uppercase tracking-widest mt-2">
                {s.label}
              </div>
              <div className="font-inter text-white/40 text-xs mt-1">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
        <p className="font-inter text-white/20 text-xs text-center mt-6">
          Salary data sourced from ZipRecruiter, Salary.com & BLS · 2025–2026 Ohio averages
        </p>
      </div>
    </section>
  );
}

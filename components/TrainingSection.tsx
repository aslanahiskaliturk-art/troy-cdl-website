"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const classTypes = [
  {
    type: "A",
    color: "from-cdl-yellow to-cdl-yellow-dark",
    textColor: "text-cdl-black",
    title: "Class A CDL",
    subtitle: "Combination Vehicles",
    features: [
      "Semi-trucks & tractor-trailers",
      "Tanker vehicles",
      "Flatbed & lowboy trailers",
      "Livestock carriers",
      "Long-haul & regional routes",
    ],
    badge: "Most In-Demand",
  },
  {
    type: "B",
    color: "from-cdl-red to-cdl-red-dark",
    textColor: "text-white",
    title: "Class B CDL",
    subtitle: "Single Vehicles",
    features: [
      "Straight trucks & box trucks",
      "School buses & transit buses",
      "Dump trucks & concrete mixers",
      "Garbage/refuse trucks",
      "Local delivery routes",
    ],
    badge: "High Demand",
  },
];

const curriculum = [
  { week: "Week 1 · Days 1–2", topic: "DOT Regulations & Knowledge Test Prep", icon: "📋" },
  { week: "Week 1 · Days 3–5", topic: "Pre-Trip Inspections & Basic Vehicle Control", icon: "🔧" },
  { week: "Week 2", topic: "Shifting, Backing & Maneuvers", icon: "🔄" },
  { week: "Week 2–3", topic: "City & Highway Driving", icon: "🛣️" },
  { week: "Week 2–3 · Final", topic: "CDL Skills & Road Exam → License Issued", icon: "✅" },
];

const instructors = [
  {
    name: "Amber Rice",
    exp: "State Certified",
    spec: "Ohio CDL Certified Instructor",
    initials: "AR",
  },
  {
    name: "Zeynali Urishanov",
    exp: "State Certified",
    spec: "Ohio CDL Certified Instructor",
    initials: "ZU",
  },
  {
    name: "Jonah Davis",
    exp: "State Certified",
    spec: "Ohio CDL Certified Instructor",
    initials: "JD",
  },
];

export default function TrainingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".training-heading", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
      });

      gsap.from(".class-card", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".class-cards", start: "top 90%", once: true },
      });

      gsap.from(".curriculum-item", {
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".curriculum-list", start: "top 90%", once: true },
      });

      gsap.from(".instructor-card", {
        scale: 0.85,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".instructors-grid", start: "top 90%", once: true },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="training"
      ref={sectionRef}
      className="relative bg-cdl-paper py-12 md:py-20 overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-cdl-yellow clip-corner pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-2 h-full bg-cdl-black pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="training-heading text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
            <span className="inline-block bg-cdl-black text-cdl-yellow font-oswald font-700 uppercase tracking-[0.3em] text-xs px-6 py-2 rounded">
              One Stop Shop
            </span>
            <span className="inline-block bg-cdl-red text-white font-oswald font-700 uppercase tracking-[0.2em] text-xs px-6 py-2 rounded">
              2–3 Weeks
            </span>
          </div>
          <h2 className="font-oswald font-700 text-cdl-black text-[clamp(2.5rem,7vw,5rem)] uppercase leading-none">
            Training &amp; Testing<br />
            <span className="text-cdl-red">Under One Roof</span>
          </h2>
          <p className="font-inter text-cdl-black/60 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            From your first day of class to CDL license in hand — we handle training <em>and</em> testing,
            all in one place, in as little as 2–3 weeks.
          </p>
        </div>

        {/* Class A & B cards */}
        <div className="class-cards grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {classTypes.map((cls) => (
            <div
              key={cls.type}
              className={`class-card relative rounded-2xl overflow-hidden bg-gradient-to-br ${cls.color} p-8 md:p-10`}
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset",
              }}
            >
              {/* Badge */}
              <span className="inline-block bg-cdl-black text-cdl-yellow font-oswald font-700 uppercase tracking-widest text-xs px-4 py-1.5 rounded mb-6">
                {cls.badge}
              </span>

              {/* Class letter */}
              <div className="flex items-end gap-4 mb-6">
                <div className={`font-oswald font-700 text-8xl md:text-9xl leading-none ${cls.textColor} opacity-20 absolute top-6 right-8`}>
                  {cls.type}
                </div>
                <div>
                  <h3 className={`font-oswald font-700 ${cls.textColor} text-3xl md:text-4xl uppercase leading-none`}>
                    {cls.title}
                  </h3>
                  <p className={`font-inter ${cls.textColor} opacity-70 text-sm uppercase tracking-widest mt-1`}>
                    {cls.subtitle}
                  </p>
                </div>
              </div>

              {/* Features list */}
              <ul className="flex flex-col gap-3">
                {cls.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-3 font-inter ${cls.textColor} text-sm md:text-base`}
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${cls.textColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="tel:9379931741"
                className={`mt-8 inline-flex items-center gap-2 ${
                  cls.type === "A"
                    ? "bg-cdl-black text-cdl-yellow hover:bg-cdl-gray"
                    : "bg-cdl-yellow text-cdl-black hover:bg-cdl-yellow-dark"
                } font-oswald font-700 uppercase tracking-wider px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5`}
              >
                Enroll in Class {cls.type}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Curriculum + Instructors grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Curriculum timeline */}
          <div>
            <h3 className="font-oswald font-700 text-cdl-black text-2xl md:text-3xl uppercase mb-5">
              2–3 Week Program Timeline
            </h3>
            <div className="curriculum-list flex flex-col gap-0">
              {curriculum.map((item, i) => (
                <div
                  key={i}
                  className="curriculum-item flex gap-4 group relative"
                >
                  {/* Timeline line */}
                  {i < curriculum.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-cdl-black/10" />
                  )}

                  {/* Icon circle */}
                  <div className="flex-shrink-0 w-10 h-10 bg-cdl-yellow rounded-full flex items-center justify-center text-lg z-10 shadow-[0_0_0_4px_#F5F0E8]">
                    {item.icon}
                  </div>

                  <div className="pb-8">
                    <span className="font-inter text-cdl-black/40 text-xs uppercase tracking-widest">
                      {item.week}
                    </span>
                    <p className="font-oswald font-700 text-cdl-black text-lg uppercase mt-0.5">
                      {item.topic}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructors */}
          <div>
            <h3 className="font-oswald font-700 text-cdl-black text-2xl md:text-3xl uppercase mb-8">
              Our Instructors
            </h3>
            <div className="instructors-grid grid grid-cols-3 gap-4">
              {instructors.map((inst, i) => (
                <div
                  key={i}
                  className="instructor-card bg-cdl-black rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                >
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-cdl-yellow flex items-center justify-center flex-shrink-0">
                    <span className="font-oswald font-700 text-cdl-black text-lg">
                      {inst.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-oswald font-700 text-white uppercase text-sm leading-tight">
                      {inst.name}
                    </p>
                    <span className="inline-flex items-center gap-1 bg-cdl-yellow/15 text-cdl-yellow font-inter text-[10px] uppercase tracking-wide px-2 py-0.5 rounded mt-1">
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
                      State Certified
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Fleet info */}
            <div className="mt-6 bg-cdl-black rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-cdl-red/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-cdl-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm1.5-9H17V12h4.46L19.5 9.5zM6 18.5c.83 0 1.5-.67 1.5-1.5S6.83 15.5 6 15.5 4.5 16.17 4.5 17 5.17 18.5 6 18.5zM20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-oswald font-700 text-white uppercase text-base">
                    Our Training Fleet
                  </p>
                  <p className="font-inter text-white/40 text-xs">
                    Modern, well-maintained trucks
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { val: "10+", label: "Trucks" },
                  { val: "3", label: "Instructors" },
                  { val: "100%", label: "Pass Rate Goal" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-lg py-3">
                    <div className="font-oswald font-700 text-cdl-yellow text-xl">
                      {s.val}
                    </div>
                    <div className="font-inter text-white/40 text-xs uppercase tracking-widest">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

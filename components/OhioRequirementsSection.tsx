"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Get Your DOT Medical Card",
    detail: "Visit an FMCSA-certified medical examiner for your DOT physical. You'll need to pass vision, blood pressure, and general health checks. Cards are valid up to 2 years.",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
    tag: "Before Anything",
  },
  {
    num: "02",
    title: "Gather Your Documents",
    detail: "Bring your valid Ohio driver's license, Social Security card, proof of Ohio residency, and your DOT medical certificate to the Ohio BMV.",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8zm0-4h8v2H8z" />
      </svg>
    ),
    tag: "BMV Visit",
  },
  {
    num: "03",
    title: "Pass the CDL Knowledge Tests",
    detail: "Take the written exams at the Ohio BMV — General Knowledge (required), plus Air Brakes and Combination Vehicles for Class A. You need 80%+ on each section. Your CDL permit (CLP) costs $27.",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    ),
    tag: "CDL Permit",
  },
  {
    num: "04",
    title: "Enroll at Troy CDL School",
    detail: "Once your permit is issued, you must hold it for a minimum of 14 days before your skills test. Use this time to train with our certified instructors — we handle everything in-house.",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm1.5-9H17V12h4.46L19.5 9.5zM6 18.5c.83 0 1.5-.67 1.5-1.5S6.83 15.5 6 15.5 4.5 16.17 4.5 17 5.17 18.5 6 18.5zM20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3z" />
      </svg>
    ),
    tag: "Train With Us",
  },
  {
    num: "05",
    title: "Pass Your CDL Skills Test",
    detail: "Your 3-part skills test: Pre-Trip Inspection, Basic Vehicle Control (backing, turns), and a Road Test on public roads. Troy CDL conducts testing on-site — no separate trip to the BMV.",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    tag: "On-Site Testing",
  },
  {
    num: "06",
    title: "Receive Your Ohio CDL",
    detail: "After passing your skills test, visit the Ohio BMV to finalize your CDL. Total state fees: ~$168. Your CDL is valid for 4 years. You're ready to hit the road!",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    tag: "You're Licensed!",
  },
];

const requirements = [
  {
    label: "Minimum Age",
    value: "18+",
    note: "Intrastate (within Ohio). Must be 21+ to drive interstate or haul hazmat.",
  },
  {
    label: "License Required",
    value: "Valid Ohio DL",
    note: "You must hold a valid Ohio driver's license before applying.",
  },
  {
    label: "DOT Medical",
    value: "Required",
    note: "Pass a DOT physical from an FMCSA-certified examiner. Valid up to 2 years.",
  },
  {
    label: "Knowledge Score",
    value: "80%+",
    note: "Must score 80% or higher on each written test section at the BMV.",
  },
  {
    label: "Permit Hold",
    value: "14 Days",
    note: "Must hold your CDL learner's permit (CLP) for 14 days before the skills test.",
  },
  {
    label: "CDL Valid For",
    value: "4 Years",
    note: "Ohio CDL is valid for 4 years from the date of issuance.",
  },
];

const endorsements = [
  { code: "H", name: "Hazardous Materials", desc: "Transport hazmat requiring placards. Requires TSA background check." },
  { code: "N", name: "Tank Vehicles", desc: "Operate tank vehicles carrying liquids or gases." },
  { code: "P", name: "Passenger", desc: "Vehicles carrying 16+ passengers including the driver." },
  { code: "S", name: "School Bus", desc: "Transport school-age children. Ohio-specific training required." },
  { code: "T", name: "Double/Triple Trailers", desc: "Pull double or triple trailer combinations." },
  { code: "X", name: "HazMat Tank", desc: "Combo of H + N endorsements. Requires TSA assessment." },
];

export default function OhioRequirementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".req-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
      });
      gsap.from(".req-card", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".req-grid", start: "top 90%", once: true },
      });
      gsap.from(".step-card", {
        x: -40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: { trigger: ".steps-grid", start: "top 90%", once: true },
      });
      gsap.from(".endorsement-chip", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.07,
        duration: 0.5,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".endorsements-row", start: "top 95%", once: true },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="requirements"
      ref={sectionRef}
      className="relative bg-cdl-black py-12 md:py-20 overflow-hidden"
    >
      {/* Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cdl-yellow via-cdl-red to-cdl-yellow" />
      <div className="absolute inset-0 stripe-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">

        {/* Heading */}
        <div className="req-heading text-center mb-10">
          <span className="badge mb-5 inline-block">Ohio CDL Guide</span>
          <h2 className="font-oswald font-700 text-white text-[clamp(2.5rem,7vw,5rem)] uppercase leading-none">
            How to Get Your<br />
            <span className="text-cdl-yellow">Ohio CDL</span>
          </h2>
          <p className="font-inter text-white/50 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know — from DOT physical to license in hand.
            Troy CDL School handles steps 4 and 5 entirely in-house.
          </p>
        </div>

        {/* Quick requirements grid */}
        <div className="req-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {requirements.map((r) => (
            <div
              key={r.label}
              className="req-card glass-card p-4 text-center hover:border-cdl-yellow/40 transition-all duration-200 group"
            >
              <div className="font-oswald font-700 text-cdl-yellow text-2xl leading-tight group-hover:scale-110 transition-transform inline-block">
                {r.value}
              </div>
              <div className="font-oswald text-white text-xs uppercase tracking-widest mt-1 mb-2">
                {r.label}
              </div>
              <div className="font-inter text-white/40 text-[11px] leading-tight">
                {r.note}
              </div>
            </div>
          ))}
        </div>

        {/* Step-by-step */}
        <h3 className="font-oswald font-700 text-white text-xl md:text-2xl uppercase tracking-wide mb-6">
          Step-By-Step: Your Path to a CDL
        </h3>
        <div className="steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="step-card glass-card p-5 flex gap-4 group hover:border-cdl-yellow/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Number + icon */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="w-11 h-11 bg-cdl-yellow rounded-xl flex items-center justify-center text-cdl-black group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="font-oswald font-700 text-white/20 text-xs">
                  {step.num}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <span className="inline-block bg-cdl-red/20 text-cdl-red font-oswald font-700 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded mb-1">
                  {step.tag}
                </span>
                <h4 className="font-oswald font-700 text-white text-base uppercase leading-tight mb-1.5">
                  {step.title}
                </h4>
                <p className="font-inter text-white/50 text-xs leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Endorsements */}
        <div className="mb-10">
          <h3 className="font-oswald font-700 text-white text-xl md:text-2xl uppercase tracking-wide mb-4">
            Available CDL Endorsements in Ohio
            <span className="font-inter font-400 text-white/40 text-sm normal-case tracking-normal ml-3">
              (Add-on credentials · $12 each at BMV)
            </span>
          </h3>
          <div className="endorsements-row grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {endorsements.map((e) => (
              <div
                key={e.code}
                className="endorsement-chip glass-card p-4 hover:border-cdl-yellow/40 transition-all duration-200 group cursor-default"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 bg-cdl-yellow rounded-lg flex items-center justify-center font-oswald font-700 text-cdl-black text-base group-hover:scale-110 transition-transform">
                    {e.code}
                  </span>
                  <span className="font-oswald font-700 text-white text-xs uppercase leading-tight">
                    {e.name}
                  </span>
                </div>
                <p className="font-inter text-white/40 text-[11px] leading-tight">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div className="bg-cdl-yellow rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-oswald font-700 text-cdl-black text-2xl md:text-3xl uppercase leading-tight">
              Skip the confusion — we walk you<br className="hidden md:block" /> through every step.
            </p>
            <p className="font-inter text-cdl-black/60 text-sm mt-2">
              Troy CDL School is a state-registered testing site (SRN #2345). Training and skills test — all in one place.
            </p>
          </div>
          <a
            href="tel:9379931741"
            className="flex-shrink-0 flex items-center gap-2 bg-cdl-black text-cdl-yellow font-oswald font-700 uppercase tracking-wider px-8 py-4 rounded-full text-lg hover:bg-cdl-gray transition-colors whitespace-nowrap"
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

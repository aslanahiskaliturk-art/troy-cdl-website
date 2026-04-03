"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Visit OhioMeansJobs",
    desc: "Stop by your local OhioMeansJobs center or visit their website to begin your grant application.",
  },
  {
    num: "02",
    title: "Apply for CDL Grant",
    desc: "Request funding specifically for CDL training. Many applicants qualify for up to full program coverage.",
  },
  {
    num: "03",
    title: "Get Approved",
    desc: "Approval is typically fast. Our team will help guide you through the paperwork every step of the way.",
  },
  {
    num: "04",
    title: "Enroll at Troy CDL",
    desc: "Bring your grant award letter and we handle the rest. You start training — we handle billing.",
  },
];

export default function GrantsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".grants-hero-text", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".grants-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".step-item", {
        x: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".steps-list",
          start: "top 80%",
        },
      });

      // Price counter animation
      const priceEl = document.querySelector(".price-counter");
      if (priceEl) {
        gsap.from(priceEl, {
          textContent: 0,
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 100 },
          scrollTrigger: {
            trigger: priceEl,
            start: "top 85%",
          },
          onUpdate() {
            const el = priceEl as HTMLElement;
            const val = Math.round(parseFloat(el.textContent || "0"));
            el.textContent = `$${val.toLocaleString()}`;
          },
        });
        (priceEl as HTMLElement).textContent = "5500";
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="grants"
      ref={sectionRef}
      className="relative bg-cdl-black py-12 md:py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 stripe-bg opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cdl-red/5 to-transparent pointer-events-none" />

      {/* Yellow left accent border */}
      <div className="absolute top-0 left-0 w-1 h-full bg-cdl-yellow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: hero text + price */}
          <div className="grants-hero-text">
            <span className="badge mb-6 inline-block">Tuition & Grants</span>

            <h2 className="font-oswald font-700 text-white text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-none mb-6">
              We Accept<br />
              <span className="text-cdl-yellow">OhioMeansJobs</span><br />
              CDL Grants
            </h2>

            <p className="font-inter text-white/60 text-base md:text-lg leading-relaxed mb-6">
              OhioMeansJobs&apos; Individual Training Account (ITA) program — funded through
              the federal Workforce Innovation and Opportunity Act (WIOA) — offers grants
              <strong className="text-white"> up to $7,000</strong> for CDL training.
              CDL is consistently recognized as an in-demand skill, qualifying in most Ohio counties.
            </p>

            {/* Grant highlight boxes */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { val: "Up to $7,000", label: "WIOA Grant Amount", color: "border-cdl-yellow/30 bg-cdl-yellow/5" },
                { val: "Most Counties", label: "Ohio Eligibility", color: "border-cdl-yellow/30 bg-cdl-yellow/5" },
                { val: "18+", label: "Age Requirement", color: "border-white/10 bg-white/5" },
                { val: "Free Consult", label: "We Help You Apply", color: "border-white/10 bg-white/5" },
              ].map((item) => (
                <div key={item.label} className={`border ${item.color} rounded-xl p-3 text-center`}>
                  <div className="font-oswald font-700 text-cdl-yellow text-lg leading-tight">{item.val}</div>
                  <div className="font-inter text-white/50 text-xs uppercase tracking-widest mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Price card */}
            <div className="grants-card bg-cdl-red rounded-2xl p-8 inline-block relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                  backgroundSize: "12px 12px",
                }}
              />
              <div className="relative z-10">
                <p className="font-oswald text-white/80 text-sm uppercase tracking-widest mb-2">
                  Total Program Cost
                </p>
                <div className="font-oswald font-700 text-cdl-yellow text-6xl md:text-7xl leading-none mb-3">
                  <span className="price-counter">$5,500</span>
                </div>
                <p className="font-inter text-white/70 text-sm">
                  All-inclusive · Class A &amp; B training · Exam fees included
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:9379931741"
                    className="flex items-center justify-center gap-2 bg-cdl-yellow text-cdl-black font-oswald font-700 uppercase tracking-wider px-6 py-3 rounded-full text-base hover:bg-cdl-yellow-dark transition-colors"
                  >
                    Enroll Now
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-white/10 text-white font-oswald font-700 uppercase tracking-wider px-6 py-3 rounded-full text-base hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Ask About Grants
                  </a>
                </div>
              </div>
            </div>

            {/* Grant disclaimer */}
            <p className="mt-6 font-inter text-white/40 text-xs leading-relaxed">
              * WIOA ITA grants up to $7,000 · Availability varies by county and funding period.
              Contact your local OhioMeansJobs center to confirm eligibility.
              Troy CDL School · State Registration #2345 · FMCSA ELDT Compliant.
            </p>
          </div>

          {/* Right: steps */}
          <div className="steps-list flex flex-col gap-6">
            <h3 className="font-oswald font-700 text-white text-2xl uppercase tracking-wide mb-2">
              How to Use Your Grant
            </h3>

            {steps.map((step) => (
              <div
                key={step.num}
                className="step-item flex gap-5 group glass-card p-6 hover:border-cdl-yellow/30 transition-all duration-300"
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 bg-cdl-yellow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="font-oswald font-700 text-cdl-black text-sm">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-oswald font-700 text-white text-lg uppercase mb-2">
                    {step.title}
                  </h4>
                  <p className="font-inter text-white/50 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Additional grant info */}
            <div className="mt-4 bg-cdl-yellow/10 border border-cdl-yellow/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cdl-yellow/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-cdl-yellow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-oswald text-cdl-yellow font-700 text-sm uppercase tracking-wider mb-1">
                    Workforce Grant Available
                  </p>
                  <p className="font-inter text-white/50 text-xs leading-relaxed">
                    WIOA ITA provides up to <strong className="text-white/70">$7,000</strong> for eligible Ohio residents.
                    Ohio&apos;s TechCred program may also apply. We help students identify and apply for every grant available — call us before you enroll.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

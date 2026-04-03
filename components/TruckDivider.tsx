"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface TruckDividerProps {
  direction?: "ltr" | "rtl";
  label?: string;
}

function TruckSVG({ flip }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 560 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      className="w-full h-full"
    >
      {/* Trailer */}
      <rect x="2" y="18" width="320" height="78" rx="5" fill="#FFD100" />
      <rect x="2" y="18" width="320" height="10" rx="5" fill="#E6BC00" />
      <line x1="115" y1="18" x2="115" y2="96" stroke="#0A0A0A" strokeWidth="2.5" opacity="0.25" />
      <line x1="228" y1="18" x2="228" y2="96" stroke="#0A0A0A" strokeWidth="2.5" opacity="0.25" />

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

      {/* Exhaust stacks */}
      <rect x="328" y="2" width="9" height="22" rx="3" fill="#FFD100" />
      <rect x="342" y="8" width="7" height="16" rx="3" fill="#E6BC00" />

      {/* Front bumper/grill */}
      <rect x="450" y="56" width="14" height="36" rx="3" fill="#333" />
      <rect x="452" y="60" width="10" height="4" rx="1" fill="#555" />
      <rect x="452" y="66" width="10" height="4" rx="1" fill="#555" />
      <rect x="452" y="72" width="10" height="4" rx="1" fill="#555" />
      <rect x="452" y="78" width="10" height="4" rx="1" fill="#555" />

      {/* Headlight */}
      <rect x="452" y="50" width="10" height="8" rx="2" fill="#FFFAAA" />

      {/* Wheels */}
      {[80, 170, 260, 400, 444].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="104" r="24" fill="#1A1A1A" />
          <circle cx={cx} cy="104" r="16" fill="#2A2A2A" />
          <circle cx={cx} cy="104" r="8" fill="#404040" />
          <circle cx={cx} cy="104" r="3" fill="#666" />
        </g>
      ))}

      {/* Road shadow */}
      <ellipse cx="280" cy="130" rx="270" ry="5" fill="rgba(0,0,0,0.3)" />
    </svg>
  );
}

export default function TruckDivider({ direction = "ltr", label }: TruckDividerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isRtl = direction === "rtl";

      // Truck drive animation
      gsap.fromTo(
        truckRef.current,
        { x: isRtl ? "110vw" : "-110%" },
        {
          x: isRtl ? "-110%" : "110vw",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          },
        }
      );

      // Label reveal
      gsap.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="relative bg-cdl-dark overflow-hidden"
      style={{ paddingBottom: "20px" }}
    >
      {/* Asphalt road */}
      <div className="relative bg-[#1C1C1C] py-2" style={{ minHeight: "120px" }}>
        {/* Road surface gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#222] via-[#1A1A1A] to-[#222]" />

        {/* Road markings */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-3 road-stripe opacity-70" />

        {/* Edge lines */}
        <div className="absolute top-2 left-0 right-0 h-1 bg-cdl-yellow/40" />
        <div className="absolute bottom-2 left-0 right-0 h-1 bg-cdl-yellow/40" />

        {/* Animated truck */}
        <div
          ref={truckRef}
          className="absolute top-1/2 -translate-y-1/2 w-64 md:w-80 pointer-events-none"
          style={{ left: direction === "ltr" ? "-20%" : "auto", right: direction === "rtl" ? "-20%" : "auto" }}
        >
          <TruckSVG flip={direction === "rtl"} />
        </div>

        {/* Dust/exhaust particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${8 + i * 6}px`,
                height: `${8 + i * 6}px`,
                top: `${30 + Math.random() * 40}%`,
                left: `${10 + i * 14}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Label */}
      {label && (
        <div ref={labelRef} className="relative z-10 text-center py-4 bg-cdl-black">
          <span className="font-oswald font-700 text-cdl-yellow uppercase tracking-[0.3em] text-sm md:text-base">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const certs = [
  {
    id: "school-license",
    src: "/images/cert-school-license.jpg",
    alt: "Ohio School License — Troy CDL School",
    issuer: "Ohio Traffic Safety Office",
    issuerLogo: "🏛️",
    title: "School License",
    subtitle: "Ohio Revised Code Chapter 4508.03",
    details: [
      { label: "License #", value: "4326-2950" },
      { label: "Type", value: "CDL A Training School" },
      { label: "Signed By", value: "Ohio Dept. of Public Safety" },
      { label: "Authority", value: "ORC Chapter 4508.03" },
    ],
    badgeColor: "from-blue-900 to-blue-800",
    accentColor: "#3B82F6",
  },
  {
    id: "cert-authorization",
    src: "/images/cert-authorization.jpg",
    alt: "Certificate of Authorization — Troy CDL Testing LLC",
    issuer: "Ohio Dept. of Public Safety",
    issuerLogo: "📜",
    title: "Certificate of Authorization",
    subtitle: "Authorized CDL Skills Testing Partner",
    details: [
      { label: "Entity", value: "Troy CDL Testing LLC" },
      { label: "Site #", value: "57ND" },
      { label: "Authority", value: "BMV · OAC Chapter 4501-47" },
      { label: "Issued By", value: "Ohio Dept. of Public Safety" },
    ],
    badgeColor: "from-cdl-red to-red-900",
    accentColor: "#C41230",
  },
];

export default function CredentialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".cred-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
      });

      gsap.from(".cert-card", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".certs-grid", start: "top 90%", once: true },
      });

      gsap.from(".trust-badge", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".trust-row", start: "top 95%", once: true },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="credentials"
      ref={sectionRef}
      className="relative bg-cdl-black py-16 md:py-20 overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #FFD100 0, #FFD100 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #FFD100 0, #FFD100 1px, transparent 0, transparent 60px)",
        }}
      />

      {/* Top yellow bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cdl-yellow via-cdl-red to-cdl-yellow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">

        {/* Heading */}
        <div className="cred-heading text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-cdl-yellow/10 border border-cdl-yellow/30 text-cdl-yellow font-oswald font-700 uppercase tracking-[0.3em] text-xs px-6 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            State Licensed &amp; Authorized
          </span>
          <h2 className="font-oswald font-700 text-white text-[clamp(2rem,6vw,4rem)] uppercase leading-none">
            Officially Certified by the<br />
            <span className="text-cdl-yellow" style={{ textShadow: "0 0 40px rgba(255,209,0,0.3)" }}>
              State of Ohio
            </span>
          </h2>
          <p className="font-inter text-white/50 text-base md:text-lg mt-4 max-w-xl mx-auto">
            We don&apos;t just train you — we&apos;re an officially authorized CDL testing site. Train and test all in one place.
          </p>
        </div>

        {/* Certificate cards */}
        <div className="certs-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="cert-card group relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,209,0,0.1)`,
              }}
            >
              {/* Colored top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cert.badgeColor}`} />

              <div className="bg-[#0F0F0F] p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="font-inter text-white/40 text-xs uppercase tracking-widest mb-1">
                      {cert.issuer}
                    </p>
                    <h3 className="font-oswald font-700 text-white text-xl md:text-2xl uppercase leading-tight">
                      {cert.title}
                    </h3>
                    <p className="font-inter text-white/50 text-sm mt-1">
                      {cert.subtitle}
                    </p>
                  </div>
                  {/* Official seal icon */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                    style={{
                      background: `radial-gradient(circle, ${cert.accentColor}22, transparent)`,
                      border: `2px solid ${cert.accentColor}44`,
                    }}
                  >
                    {cert.issuerLogo}
                  </div>
                </div>

                {/* Certificate image — framed */}
                <div
                  className="relative rounded-xl overflow-hidden mb-6 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-shadow duration-300"
                  style={{
                    border: "2px solid rgba(255,255,255,0.08)",
                    background: "#fff",
                  }}
                >
                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 z-10 pointer-events-none" style={{ borderColor: cert.accentColor }} />
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 z-10 pointer-events-none" style={{ borderColor: cert.accentColor }} />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 z-10 pointer-events-none" style={{ borderColor: cert.accentColor }} />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 z-10 pointer-events-none" style={{ borderColor: cert.accentColor }} />

                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={700}
                    height={900}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "340px", objectFit: "contain", background: "#fff" }}
                  />

                  {/* Verified overlay badge */}
                  <div className="absolute top-3 right-10 z-20">
                    <span
                      className="inline-flex items-center gap-1.5 text-white font-oswald font-700 text-xs uppercase tracking-wider px-3 py-1.5 rounded-full"
                      style={{ background: cert.accentColor, boxShadow: `0 4px 12px ${cert.accentColor}66` }}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                      Verified
                    </span>
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-3">
                  {cert.details.map((d) => (
                    <div
                      key={d.label}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3"
                    >
                      <p className="font-inter text-white/30 text-[10px] uppercase tracking-widest mb-0.5">
                        {d.label}
                      </p>
                      <p className="font-oswald font-700 text-white text-sm uppercase leading-tight">
                        {d.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="trust-row flex flex-wrap justify-center gap-4">
          {[
            { icon: "🏛️", text: "Ohio Dept. of Public Safety", sub: "Licensed School" },
            { icon: "🚛", text: "CDL A Training School", sub: "License #4326-2950" },
            { icon: "✅", text: "Authorized Testing Site", sub: "Site #57ND" },
            { icon: "📋", text: "OAC Chapter 4501-47", sub: "Fully Compliant" },
          ].map((b, i) => (
            <div
              key={i}
              className="trust-badge flex items-center gap-3 bg-white/[0.04] border border-cdl-yellow/15 rounded-xl px-5 py-3 hover:border-cdl-yellow/30 transition-colors"
            >
              <span className="text-2xl">{b.icon}</span>
              <div>
                <p className="font-oswald font-700 text-white text-sm uppercase leading-tight">
                  {b.text}
                </p>
                <p className="font-inter text-white/40 text-xs">
                  {b.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

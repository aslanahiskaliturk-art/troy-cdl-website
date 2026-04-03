"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const photos = [
  {
    src: "/images/photo-fleet.jpg",
    alt: "Troy CDL School training fleet",
    caption: "Our Training Fleet",
    detail: "Modern Volvo Class A semi-trucks — the same rigs you'll drive on the job",
    tag: "CLASS A FLEET",
    span: "row-span-2",
  },
  {
    src: "/images/photo-backing.jpg",
    alt: "Instructor guiding student backing maneuver",
    caption: "Hands-On Backing Practice",
    detail: "Certified instructors guide every maneuver — cones, backing, parallel parking",
    tag: "SKILLS TRAINING",
    span: "",
  },
  {
    src: "/images/photo-pretrip.jpg",
    alt: "Instructor reviewing pre-trip inspection checklist with student",
    caption: "Pre-Trip Inspection Training",
    detail: "Learn to inspect every inch of your rig — a required skill on the CDL exam",
    tag: "PRE-TRIP",
    span: "",
  },
  {
    src: "/images/photo-graduate-1.jpg",
    alt: "Graduate holding CDL certificate next to Troy CDL truck",
    caption: "CDL License in Hand",
    detail: "Graduate with your certificate and CDL license — ready to hit the road",
    tag: "GRADUATE",
    span: "",
  },
  {
    src: "/images/photo-graduation-group.jpg",
    alt: "Group of graduates holding CDL certificates",
    caption: "Graduation Day",
    detail: "Proud graduates celebrating at Troy CDL — your future starts here",
    tag: "GRADUATION",
    span: "",
  },
  {
    src: "/images/photo-graduate-solo.jpg",
    alt: "Solo graduate with CDL certificate",
    caption: "Certified & Career-Ready",
    detail: "From day one of training to CDL in hand — we make it happen",
    tag: "SUCCESS STORY",
    span: "",
  },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".gallery-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
      });

      gsap.from(".gallery-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gallery-grid", start: "top 90%", once: true },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-cdl-black py-16 md:py-20 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-cdl-yellow" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #FFD100 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C41230 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="gallery-heading text-center mb-12">
          <span className="inline-block bg-cdl-yellow/10 border border-cdl-yellow/30 text-cdl-yellow font-oswald font-700 uppercase tracking-[0.3em] text-xs px-6 py-2 rounded-full mb-6">
            Inside Troy CDL School
          </span>
          <h2 className="font-oswald font-700 text-white text-[clamp(2rem,6vw,4rem)] uppercase leading-none">
            See What Training<br />
            <span className="text-cdl-yellow" style={{ textShadow: "0 0 40px rgba(255,209,0,0.3)" }}>
              Really Looks Like
            </span>
          </h2>
          <p className="font-inter text-white/50 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Real students. Real trucks. Real results. This is what your path to a CDL looks like at Troy CDL School.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`gallery-item group relative overflow-hidden rounded-2xl bg-cdl-dark cursor-pointer ${
                i === 0 ? "row-span-2" : ""
              }`}
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                aspectRatio: i === 0 ? "auto" : "3/4",
              }}
            >
              {/* Image */}
              <div className={`relative w-full ${i === 0 ? "h-full min-h-[500px]" : "h-full"} overflow-hidden`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-cdl-yellow text-cdl-black font-oswald font-700 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                    {photo.tag}
                  </span>
                </div>

                {/* Caption overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-oswald font-700 text-white text-base md:text-lg uppercase leading-tight mb-1">
                    {photo.caption}
                  </h3>
                  <p className="font-inter text-white/70 text-xs leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom caption row — always visible descriptions */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-4">
          {photos.map((photo, i) => (
            <div key={i} className="px-1">
              <p className="font-oswald font-700 text-white/80 text-sm uppercase leading-tight">
                {photo.caption}
              </p>
              <p className="font-inter text-white/40 text-xs mt-0.5 leading-snug">
                {photo.detail}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:9379931741"
            className="inline-flex items-center gap-3 bg-cdl-red text-cdl-yellow font-oswald font-700 uppercase tracking-wider px-10 py-4 rounded-full text-lg hover:bg-cdl-red-dark transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(196,18,48,0.5)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Start Your Journey — 937-993-1741
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-cdl-yellow" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const googleReviews = [
  {
    name: "Marcus T.",
    initials: "MT",
    color: "bg-blue-600",
    date: "2 months ago",
    stars: 5,
    text: "Best CDL school in Dayton, period. Passed my Class A on the first try. The instructors were patient and professional. The free housing made it possible for me to relocate and focus on training. 100% recommend!",
    tag: "Class A Graduate",
  },
  {
    name: "Deshawn W.",
    initials: "DW",
    color: "bg-green-700",
    date: "3 months ago",
    stars: 5,
    text: "Got my OhioMeansJobs grant and it covered most of the tuition. The staff helped me through the entire process. Was working as a truck driver within 3 weeks of completing the program!",
    tag: "Grant Recipient",
  },
  {
    name: "Angela R.",
    initials: "AR",
    color: "bg-purple-700",
    date: "1 month ago",
    stars: 5,
    text: "As a woman entering a male-dominated field, I was nervous. Troy CDL made me feel completely welcome. Flexible scheduling worked perfectly around my family. Now making $75k+ my first year!",
    tag: "Class B Graduate",
  },
  {
    name: "Jerome P.",
    initials: "JP",
    color: "bg-orange-700",
    date: "4 months ago",
    stars: 5,
    text: "Free housing was a game changer. I drove from Columbus and stayed nearby for the whole program. No distractions, just focused training. Instructors know their stuff inside and out.",
    tag: "Class A Graduate",
  },
  {
    name: "Tiffany M.",
    initials: "TM",
    color: "bg-pink-700",
    date: "5 months ago",
    stars: 5,
    text: "I failed my first knowledge test but Troy CDL kept me going with the unlimited retakes. No extra fees, just support and encouragement. Passed on my second try and now I'm on the road!",
    tag: "Class A Graduate",
  },
  {
    name: "Robert K.",
    initials: "RK",
    color: "bg-teal-700",
    date: "6 months ago",
    stars: 5,
    text: "Changed careers at 45 and this school made it happen. Affordable at $5,500, professional instructors, and modern trucks for practice. Best investment I ever made in myself.",
    tag: "Career Changer",
  },
];

const instagramPosts = [
  {
    id: 1,
    caption: "🚛 Another Class A graduate hits the road! Congrats to our newest CDL holder. #TroyCDL #CDLLife #DaytonOhio",
    likes: 284,
    comments: 42,
    emoji: "🏆",
    bg: "bg-gradient-to-br from-cdl-yellow/20 to-cdl-black",
  },
  {
    id: 2,
    caption: "Pre-trip inspection day! Our students learning to check every inch before rolling out. Safety first, always. #CDLTraining",
    likes: 193,
    comments: 28,
    emoji: "🔧",
    bg: "bg-gradient-to-br from-cdl-red/20 to-cdl-black",
  },
  {
    id: 3,
    caption: "Backing maneuvers practice — the skill that separates good drivers from great ones! 💪 #TruckDriver #CDLSchool",
    likes: 341,
    comments: 56,
    emoji: "🎯",
    bg: "bg-gradient-to-br from-blue-900/30 to-cdl-black",
  },
  {
    id: 4,
    caption: "OhioMeansJobs grant approved! Another student on their way to a high-paying career for zero out-of-pocket. 🙌",
    likes: 512,
    comments: 89,
    emoji: "💰",
    bg: "bg-gradient-to-br from-green-900/30 to-cdl-black",
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".wall-heading", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      gsap.from(".review-card", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".reviews-grid", start: "top 80%" },
      });

      gsap.from(".ig-card", {
        scale: 0.85,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".ig-grid", start: "top 80%" },
      });

      // Continuous marquee for stat bar
      gsap.to(marqueeRef.current, {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative bg-cdl-dark py-12 md:py-20 overflow-hidden"
    >
      {/* Scrolling stat banner */}
      <div className="bg-cdl-yellow py-3 overflow-hidden mb-16">
        <div
          ref={marqueeRef}
          className="flex gap-12 whitespace-nowrap"
          style={{ width: "200%" }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 font-oswald font-700 text-cdl-black uppercase text-sm tracking-widest">
              <span>5-Star Rated</span>
              <span className="text-cdl-red">★★★★★</span>
              <span>100s of Graduates</span>
              <span className="text-cdl-red">★★★★★</span>
              <span>Dayton&apos;s #1 CDL School</span>
              <span className="text-cdl-red">★★★★★</span>
              <span>School Registration #2345</span>
              <span className="text-cdl-red">★★★★★</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="wall-heading text-center mb-10">
          <span className="badge mb-6 inline-block">Student Success</span>
          <h2 className="font-oswald font-700 text-white text-[clamp(2.5rem,7vw,5rem)] uppercase leading-none">
            Wall of<br />
            <span className="text-cdl-yellow drop-shadow-[4px_4px_0_rgba(255,209,0,0.3)]">
              Fame
            </span>
          </h2>
          <p className="font-inter text-white/50 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Real reviews from real graduates. These are the people who trusted Troy CDL School
            to launch their careers — and we delivered.
          </p>

          {/* Overall rating */}
          <div className="mt-8 inline-flex flex-col items-center gap-2 bg-white/5 border border-cdl-yellow/20 rounded-2xl px-8 py-5">
            <div className="font-oswald font-700 text-cdl-yellow text-6xl leading-none">
              5.0
            </div>
            <StarRating count={5} />
            <p className="font-inter text-white/50 text-xs uppercase tracking-widest">
              Google Rating · 100+ Reviews
            </p>
          </div>
        </div>

        {/* Google Reviews Grid */}
        <div className="reviews-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {googleReviews.map((review, i) => (
            <div
              key={i}
              className="review-card glass-card p-6 flex flex-col gap-4 hover:border-cdl-yellow/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full ${review.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="font-oswald font-700 text-white text-sm">
                      {review.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-oswald font-700 text-white text-base uppercase leading-tight">
                      {review.name}
                    </p>
                    <p className="font-inter text-white/40 text-xs">
                      {review.date}
                    </p>
                  </div>
                </div>
                {/* Google G */}
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <StarRating count={review.stars} />

              {/* Review text */}
              <p className="font-inter text-white/70 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Tag */}
              <span className="inline-block bg-cdl-yellow/10 text-cdl-yellow font-oswald font-700 text-xs uppercase tracking-widest px-3 py-1 rounded">
                {review.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Instagram Wall */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-oswald font-700 text-white text-2xl md:text-3xl uppercase">
              Follow Our Journey
            </h3>
            <div className="flex items-center gap-2 text-white/50 font-inter text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @TroyCDLSchool
            </div>
          </div>

          <div className="ig-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className={`ig-card ${post.bg} rounded-2xl overflow-hidden aspect-square flex flex-col justify-between p-5 cursor-pointer group hover:scale-[1.02] transition-transform duration-300 border border-white/10 hover:border-cdl-yellow/30`}
              >
                {/* Emoji placeholder for photo */}
                <div className="text-5xl flex items-center justify-center flex-1">
                  {post.emoji}
                </div>

                {/* Caption */}
                <div>
                  <p className="font-inter text-white/70 text-xs leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1 text-white/40 text-xs font-inter">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-white/40 text-xs font-inter">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="font-oswald font-700 text-white text-2xl md:text-3xl uppercase mb-6">
            Join Our Wall of Fame
          </p>
          <a
            href="tel:9379931741"
            className="pill-btn text-xl inline-flex items-center gap-3 shadow-[0_0_40px_rgba(196,18,48,0.3)]"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now: 937-993-1741
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global GSAP initializer mounted once in the root layout.
 * - Refreshes ScrollTrigger after fonts + images are fully loaded
 * - Adds a 4-second failsafe that forces all GSAP-animated elements visible
 *   in case a trigger never fires (e.g. user already scrolled, mobile, SSR)
 */
export default function GsapInit() {
  useEffect(() => {
    // Refresh after everything is painted
    const onLoad = () => {
      ScrollTrigger.refresh();
    };

    if (document.readyState === "complete") {
      ScrollTrigger.refresh();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    // Failsafe: after 4s, make sure no element is still opacity-0 from GSAP
    const failsafe = setTimeout(() => {
      ScrollTrigger.getAll().forEach((st) => {
        // Force-play any trigger that hasn't started yet
        if (!st.isActive) {
          st.animation?.progress(1);
        }
      });
      // Also directly un-hide any element stuck at opacity 0 from a gsap.from
      document.querySelectorAll<HTMLElement>(
        ".benefit-card, .career-stat, .req-card, .step-card, " +
        ".endorsement-chip, .grants-hero-text, .grants-card, .step-item, " +
        ".training-heading, .class-card, .curriculum-item, .instructor-card, " +
        ".wall-heading, .review-card, .ig-card, .cta-content"
      ).forEach((el) => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.5) {
          gsap.to(el, { opacity: 1, y: 0, x: 0, scale: 1, duration: 0.4, ease: "power2.out" });
        }
      });
    }, 4000);

    return () => {
      clearTimeout(failsafe);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function StickyPhone() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 20,
      pointerEvents: visible ? "auto" : "none",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [visible]);

  return (
    <a
      ref={btnRef}
      href="tel:9379931741"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center gap-1 bg-cdl-red text-cdl-yellow rounded-full w-20 h-20 shadow-[0_8px_32px_rgba(196,18,48,0.6)] hover:bg-cdl-red-dark hover:shadow-[0_8px_40px_rgba(196,18,48,0.8)] transition-all duration-200 opacity-0 animate-pulse2 group"
      style={{ pointerEvents: "none" }}
      aria-label="Call Troy CDL School: 937-993-1741"
    >
      <svg
        className="w-6 h-6 group-hover:scale-110 transition-transform"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      <span className="font-oswald font-700 text-[10px] uppercase leading-tight text-center">
        CALL<br />NOW
      </span>
      {/* Ripple ring */}
      <span className="absolute inset-0 rounded-full border-2 border-cdl-red animate-ping opacity-40" />
    </a>
  );
}

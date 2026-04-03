import type { Config } from "tailwindcss";
import path from "path";

const config: Config = {
  content: [
    path.resolve(__dirname, "./pages/**/*.{js,ts,jsx,tsx,mdx}"),
    path.resolve(__dirname, "./components/**/*.{js,ts,jsx,tsx,mdx}"),
    path.resolve(__dirname, "./app/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      colors: {
        "cdl-yellow": "#FFD100",
        "cdl-yellow-dark": "#E6BC00",
        "cdl-red": "#C41230",
        "cdl-red-dark": "#A00E27",
        "cdl-black": "#0A0A0A",
        "cdl-dark": "#141414",
        "cdl-paper": "#F5F0E8",
        "cdl-gray": "#2A2A2A",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "Impact", "Arial Narrow", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900",
      },
      animation: {
        "truck-drive": "truckDrive 4s linear infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        truckDrive: {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(110vw)" },
        },
        pulse2: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(196,18,48,0.4)" },
          "50%": { transform: "scale(1.03)", boxShadow: "0 0 0 12px rgba(196,18,48,0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black1: "#101010",
        white1: "#DFDFDF",
        white2: "#C0C0C0",
        white3: "#666666",
        primaryGreen: "#2ED1A0",
        primaryBlue: "#0E5EDF",
        orange1: "#FF8770",
        orange2: "#FF9326",
        purple1: "#803B85"
      },
      backgroundImage: {
        "backgroundGrid": "url('/images/background-grid.svg')"
      },
      boxShadow: {
        whiteGlow1: "0px 0px 24px 4px rgba(255, 255, 255, 0.12) inset",
        whiteGlow2: "0px 0px 16px 4px rgba(255, 255, 255, 0.16) inset"
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

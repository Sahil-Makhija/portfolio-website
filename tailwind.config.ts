import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"var(--background)",
      },
      fontFamily:{
        inverse:"var(--font-inverse)",
        inter:"var(--font-inter)",
        futura:"var(--font-futura)"
      },
      fontSize:{
        '13px':'0.8125rem',
      },
    },
    keyframes:{
      rise:{
        from:{
          transform:"translateY(160px)"
        },
        to:{
          transform:"translateY(0)"
        }
      }
    },
    animation:{
      rise:"rise 200ms ease-in 510ms 1"
    }
  },
  plugins: [],
};
export default config;

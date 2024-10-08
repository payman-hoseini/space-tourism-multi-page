import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Blue-900" : "hsl(230, 35%, 7%)",
        "Blue-300" : "hsl(231, 77%, 90%)"
      },
      fontFamily : {
        Bellefair : ["Bellefair"],
        "Barlow-Condensed" : ["Barlow-Condensed"],
        Barlow : ["Barlow"]
      },
      keyframes : {
        smooth_appear : {
          to  : { right : "0" }
        }
      },
      animation : {
        smooth : "smooth_appear 1s ease forwards"
      }
    },
  },
  plugins: [],
};
export default config;

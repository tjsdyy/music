import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
      colors: {
        ink: "#05070d",
        aurora: "#58e4ff",
        nebula: "#8c7bff",
        candy: "#ff6ec9",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(122, 199, 255, 0.2), 0 20px 70px rgba(101, 129, 255, 0.35)",
      },
      backgroundImage: {
        "mesh-violet": "radial-gradient(1200px 700px at 10% -10%, rgba(88,228,255,0.28), transparent 65%), radial-gradient(1200px 800px at 100% 10%, rgba(140,123,255,0.35), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

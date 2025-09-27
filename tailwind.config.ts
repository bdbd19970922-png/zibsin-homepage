import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3B82F6",
          dark: "#1D4ED8",
          light: "#93C5FD",
          // alt는 유틸 생성에 쓰지 않고 참고용으로만 둘 수도 있음
        },
        // ⬇⬇ 이 줄이 핵심: 유틸용 별도 키
        "brand-alt": "#6366F1",

        ink: "#0F172A",
        mute: "#6B7280",
        bg: "#F7F7FB",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "22px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1000px 400px at 10% -10%, rgba(99,102,241,0.20), transparent 55%), radial-gradient(800px 400px at 90% -20%, rgba(59,130,246,0.18), transparent 60%)",
        "hero-grid":
          "linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)",
      },
      backgroundSize: { grid: "20px 20px" },
      fontFamily: {
        sans: ["var(--font-noto)", "system-ui", "Apple SD Gothic Neo", "sans-serif"],
        inter: ["var(--font-inter)", "var(--font-noto)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

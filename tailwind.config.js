/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      sans: ["var(--font-noto-sans)", '"Noto Sans Fallback"', "sans-serif"],
      colors: {},
      fontSize: {
        xs: ["12px", "16px"], // font-size 12px, line-height 16.39px
        sm: ["14px", "19px"], // font-size 14px, line-height 19.12px
        base: ["16px", "21px"], // font-size 16px, line-height 21.86px
        lg: ["18px", "24px"], // font-size 18px, line-height 24.59px
        xl: ["20px", "27px"], // font-size 20px, line-height 27.32px
        "2xl": ["24px", "32px"], // font-size 24px, line-height 32.78px
        "5xl": ["40px", "54px"], // font-size 40px, line-height 54.64px
      },
    },
  },
  plugins: [],
};

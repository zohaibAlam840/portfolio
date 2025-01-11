import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgColor : "#151312",
        navColor: '#1C1A19',
        iconCol : '#f57f51',
        textCol: '#353334',
        cardHov: '#1c1a19',
        coloPar: '#948a8a'
      },
    },
  },
  plugins: [],
} satisfies Config;

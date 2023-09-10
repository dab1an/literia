import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#274156",
        cerulean: "#1C6E8C",
        "flash-white": "#EAEBED",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;

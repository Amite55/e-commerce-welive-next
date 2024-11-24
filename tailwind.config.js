/** @type {import('tailwindcss').Config} */
module.exports = {
  
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
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        weLiveTheme: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#8F71E1",
          "fb": "#267BE9",
          "in": "#007AB9",
          "x": "101010",
          ".btn-primary": {
            "color": "#fff"
          },
          ".btn-outline.btn-primary:hover": {
            "color": '#fff'
          },
        },
      },
      "dark",
      "light",
    ],
  },
};

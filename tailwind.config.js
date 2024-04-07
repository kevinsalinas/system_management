module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      superSmall: "0px",
      xs: "240px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xlg: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      icons: ["icomoon"],
    },
    fontSize: {
      xxs: "0.563rem",
      xs: ".75rem",
      sm: ".9rem",
      md: "1rem",
      tiny: "12px",
      base: "16px",
      lg: "1.25rem",
      lgx: "1.5rem",
      xl: "1.9rem",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    colors: {},
    maxWidth: {
      "base-container": "1440px",
    },
    extends: {
      width: {
        maxWidthContainer: "1440px",
      },
    },
  },
};

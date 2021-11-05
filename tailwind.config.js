const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      minWidth: {
        15: "3.75rem",
        20: "5rem",
      },
      minHeight: {
        10: "2.5rem",
      },
      maxWidth: {
        "body-max": "78rem",
      },
      spacing: {
        xxs: "0.125rem",
        xss: "0.625rem",
        3.5: "0.875rem",
        4.5: "1.125rem",
        7: "1.75rem",
        9: "2.25rem",
        11: "2.75rem",
        15: "3.75rem",
        36: "9rem",
      },
      borderRadius: {
        xlg: "0.75rem",
      },
      colors: {
        codeblock: {
          bg: "#F1EFEE",
          log: "#f8f8f2",
          logBg: "#282A36",
        },
        gray: {
          100: "#F4F6F8",
          200: "#E6E9ED",
          300: "#D8DDE3",
          400: "#B6BDC5",
          500: "#9299A3",
          600: "#636C77",
          700: "#3B444F",
          800: "#1E2631",
          900: "#000813",
        },
        green: {
          100: "#F6FEF1",
          200: "#E0F9D3",
          300: "#BDF4AA",
          400: "#8BDF79",
          500: "#5CC052",
          600: "#249624",
          700: "#126C21",
          800: "#06481D",
        },
        blue: {
          100: "#F1FAFE",
          200: "#CBEAFB",
          300: "#99D1F8",
          400: "#64ADEA",
          500: "#3D89D5",
          600: "#0959BA",
          700: "#043385",
          800: "#011959",
        },
        red: {
          100: "#FEF7F0",
          200: "#FBE5CE",
          300: "#F7C5A0",
          400: "#E7996D",
          500: "#CF6D46",
          600: "#AF3615",
          700: "#7D120A",
          800: "#53040A",
        },
        yellow: {
          100: "#FFFEF0",
          200: "#FDFAD7",
          300: "#FCF4B0",
          400: "#F6E987",
          500: "#ECDB67",
          600: "#E1C838",
          700: "#A28A1C",
          800: "#6C570A",
        },
        ocean: {
          0: "#F0F9FE",
          100: "#F0F9FE",
          200: "#D5EBF8",
          300: "#ADD5F0",
          400: "#7AACD5",
          500: "#507EAB",
          600: "#224773",
          700: "#112952",
          800: "#061337",
        },
        purple: {
          100: "#FEF1FE",
          200: "#FBDCFA",
          300: "#F3BBF7",
          400: "#DC94E7",
          500: "#BD72D0",
          600: "#9547B3",
          700: "#5A2380",
          800: "#2E0D55",
        },
        cherry: {
          100: "#FEF1F6",
          200: "#F9D4E0",
          300: "#F4ABCA",
          400: "#E07BB0",
          500: "#C15498",
          600: "#992679",
          700: "#6E1366",
          800: "#420749",
        },
      },
      fontFamily: {
        mono: ["Inconsolata", "Menlo", "Monaco", "Consolas", "monospace"],
        sans: [
          "Inter",
          "-apple-system",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        body: [
          "Inter",
          "-apple-system",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        avatar: "0 0 0 2px rgba(255, 255, 255, 1)",
        table: "0 0 0 1px rgba(216, 221, 227, 1)",
        "table-row": "inset 0px -1px 0px rgba(216, 221, 227, 1)",
      },
      inset: {
        "1/2": "50%",
      },
      stroke: {
        transparent: "transparent",
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addUtilities }) => {
      const gradient = {
        ".banner-gradient": {
          background: "linear-gradient(90deg, #F4F6F8 0%, #FFFFFF 100%)",
        },
      };
      addUtilities(gradient);
    }),
  ],
};

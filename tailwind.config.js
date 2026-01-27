module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#22d3ee",
          purple: "#a855f7",
        },
      },
      boxShadow: {
        neon: "0 0 25px rgba(34,211,238,0.8)",
      },
    },
  },
  plugins: [],
};

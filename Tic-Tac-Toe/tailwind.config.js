/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-from-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(-30%)",
            
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
           
          }
        }
      },
      animation: {
        "slide-in-from-left":
          "slide-in-from-left 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards"
      }
    }
  },
  plugins: []
};

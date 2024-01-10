/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "gym" : "url(./src/assets/gym3.jpg)",
        "bgym" :"url(./src/assets/bgym.png)",
        "pic" : "url(./src/assets/pic.png)",
        "cy1" : "url(./src/assets/cyrcle1.png)",
        "cy2" : "url(./src/assets/cyrcle2.png)",
        "cy3" : "url(./src/assets/cyrcle3.png)",
        "zoom" : "url(./src/assets/zoom.png)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


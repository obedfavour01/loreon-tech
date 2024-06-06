import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {

    screens: {
      "xs": "30px",
     "sm": '576px',
      "md": '768px',
      "lg": '992px',
      "xl": '1200px',
      "2xl": '1400px'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        loreonblue: "#1362F3",
        loreonorange:"#FF8B00",
        loreongreen: "#95DFB5",
        loreongray: "#393939",
        aboutgray:"#586283",
        aboutgreen: "#4ABA58",
        datagreen: "#20A84E",


        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        "4xl": "28px",
        "5xl": "32px",
        "6xl": "36px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor:{
        bg_white: "#FFFFFF",
        bg_blue: "#1362F3",
        bg_orange : "#FF8D03",
        bg_footer: "#1D2329",
        bg_about_gray: "#F0F6FF"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(74, 186, 88, 0.1) 0%, #4ABA58 100%)',
        'training-gradient':'linear-gradient(180deg, rgba(65,129,245,1) 0%, rgba(66,129,245,1) 66%, rgba(250,253,255,1) 91%)',
        'devops-gradient':'linear-gradient(180deg, rgba(19, 98, 243, 0) 0%, #1362F3 100%)',
        'experience-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
        'session-gradient': ' linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
        'data-gradient': 'linear-gradient(180deg, rgba(32, 168, 78, 0) 0%, #20A84E 100%)',
        'blog-gradient': ' linear-gradient(184.16deg, rgba(0, 0, 0, 0) 16.94%, rgba(0, 0, 0, 0.7) 78.01%)'
      },
      boxShadow: {
        'custom-shadow': '0px 8px 20px 0px #1211271A',
      },
      borderColor: {
          'purpose-border':'linear-gradient(95.49deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50.64%, #CDCDCD 99.29%)'
        },

      width: {
        
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
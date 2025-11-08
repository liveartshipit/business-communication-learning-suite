module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(210, 15%, 90%)",
        input: "hsl(210, 15%, 90%)",
        ring: "hsl(172, 52%, 38%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(210, 11%, 20%)",
        primary: {
          DEFAULT: "hsl(172, 52%, 38%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(172, 37%, 28%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        tertiary: {
          DEFAULT: "hsl(28, 70%, 54%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(210, 16%, 96%)",
          foreground: "hsl(210, 11%, 20%)",
        },
        success: {
          DEFAULT: "hsl(154, 56%, 40%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        warning: {
          DEFAULT: "hsl(42, 90%, 58%)",
          foreground: "hsl(210, 11%, 20%)",
        },
        muted: {
          DEFAULT: "hsl(210, 16%, 96%)",
          foreground: "hsl(210, 8%, 55%)",
        },
        accent: {
          DEFAULT: "hsl(172, 52%, 38%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 11%, 20%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 11%, 20%)",
        },
        gray: {
          50: "hsl(210, 20%, 98%)",
          100: "hsl(210, 15%, 95%)",
          200: "hsl(210, 15%, 90%)",
          300: "hsl(210, 10%, 80%)",
          400: "hsl(210, 9%, 65%)",
          500: "hsl(210, 8%, 50%)",
          600: "hsl(210, 10%, 40%)",
          700: "hsl(210, 12%, 30%)",
          800: "hsl(210, 15%, 20%)",
          900: "hsl(210, 20%, 10%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: ["2.618rem", { lineHeight: "1.2", letterSpacing: "-0.025em", fontWeight: "500" }],
        h2: ["1.618rem", { lineHeight: "1.2", letterSpacing: "-0.025em", fontWeight: "500" }],
        h3: ["1.333rem", { lineHeight: "1.2", letterSpacing: "-0.025em", fontWeight: "500" }],
        body: ["1rem", { lineHeight: "1.5", fontWeight: "300" }],
        label: ["0.875rem", { lineHeight: "1.5", fontWeight: "300" }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(172, 52%, 38%) 0%, hsl(189, 64%, 46%) 100%)',
        'gradient-2': 'linear-gradient(135deg, hsl(28, 70%, 54%) 0%, hsl(9, 81%, 60%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(172, 52%, 38%) 0%, hsl(28, 70%, 54%) 100%)',
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
    },
  },
  plugins: [],
}

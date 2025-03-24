
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        "border-primary": "#F2F2F2",
      },
      textColor: {
        "text-primary": "#020118",
        "secondary-text": "#8E8EA4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
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
        "custom-black": {
          DEFAULT: "#020118",
          modal: "#01010F",
        },
        "custom-gray": {
          text: "#8E8EA4",
          "text-disabled": "#C6C6D2",
          bg: "#F4F4F6",
          border: "#E9EFFE",
          disabled: "#E8E8ED",
          "border-primary": "#F2F2F2",
        },
        purple: {
          DEFAULT: "#453BF5",
          light: "#B5B1FB",
          secondary: "#F4F7FF",
        },
        error: {
          DEFAULT: "#FF4C50",
          light: "#FFF3F3",
        },
      },
      boxShadow: {
        "custom-shadow": "0px 2px 50px 0px #06033A0D",
      },
      keyframes: {
        scrollText: {
          '100%': { transform: 'translateX(100%)' },
          '0%': { transform: 'translateX(-30%)' },
        },
      },
      animation: {
        'scroll-text': 'scrollText 20s linear infinite',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],

  darkMode: ["class"],
};
export default config;

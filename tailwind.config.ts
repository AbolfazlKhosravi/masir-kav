import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "rgba(var(--color-primary-900),<alpha-value>)",
          800: "rgba(var(--color-primary-800),<alpha-value>)",
          700: "rgba(var(--color-primary-700),<alpha-value>)",
          600: "rgba(var(--color-primary-600),<alpha-value>)",
          500: "rgba(var(--color-primary-500), <alpha-value>)",
          400: "rgba(var(--color-primary-400),<alpha-value>)",
          300: "rgba(var(--color-primary-300),<alpha-value>)",
          200: "rgba(var(--color-primary-200),<alpha-value>)",
          100: "rgba(var(--color-primary-100),<alpha-value>)",
          50: "rgba(var(--color-primary-50),<alpha-value>)",
        },
        secondary: {
          900: "rgba(var(--color-secondary-900),<alpha-value>)",
          800: "rgba(var(--color-secondary-800),<alpha-value>)",
          700: "rgba(var(--color-secondary-700),<alpha-value>)",
          600: "rgba(var(--color-secondary-600),<alpha-value>)",
          500: "rgba(var(--color-secondary-500),<alpha-value>)",
          400: "rgba(var(--color-secondary-400),<alpha-value>)",
          300: "rgba(var(--color-secondary-300),<alpha-value>)",
          200: "rgba(var(--color-secondary-200),<alpha-value>)",
          100: "rgba(var(--color-secondary-100),<alpha-value>)",
          50: "rgba(var(--color-secondary-50),<alpha-value>)",
          0: "rgba(var(--color-secondary-0),<alpha-value>)",
        },
        err: {
          500: "rgba(var(--color-red-500),<alpha-value>)",
          300: "rgba(var(--color-red-300),<alpha-value>)",
        },
        success: "rgba(var(--color-success),<alpha-value>)",
        warning: "rgba(var(--color-warning),<alpha-value>)",
        error: "rgba(var(--color-error),<alpha-value>)",
        background: "rgba(var(--background-app-rgb),<alpha-value>)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

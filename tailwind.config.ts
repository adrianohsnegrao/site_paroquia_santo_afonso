import type { Config } from "tailwindcss";

/**
 * Paleta inspirada na logo da Paróquia Santo Afonso Maria de Ligório.
 * Para ajustar as cores do site inteiro, edite apenas os valores abaixo.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Verde institucional (header, footer, títulos, ícones)
          green: {
            DEFAULT: "#2f6b4f", // verde médio
            light: "#3e8462",
            dark: "#123f2a", // verde escuro
            deep: "#0d2c1d", // verde profundo (footer)
          },
          // Dourado / amarelo quente — usar como DESTAQUE pontual
          gold: {
            DEFAULT: "#d9a329",
            light: "#e8c25c",
            dark: "#a87d1c",
          },
          // Creme / bege claro (fundos suaves)
          cream: {
            DEFAULT: "#f6f0e4",
            light: "#fffdf8", // branco suave
          },
          // Terracota — detalhes sutis
          terracotta: {
            DEFAULT: "#b85c38",
            dark: "#9a4a2c",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 40px -20px rgba(18, 63, 42, 0.25)",
        card: "0 8px 24px -12px rgba(18, 63, 42, 0.16)",
      },
      borderRadius: {
        // Bordas discretas e institucionais (≈ rounded-lg)
        xl2: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

import { theme } from './src/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors defined in src/theme.ts
        midnight: theme.colors.midnight,
        cyan: theme.colors.cyan,
        magenta: theme.colors.magenta,
        violet: theme.colors.violet,
        charcoal: theme.colors.charcoal,
        gold: theme.colors.gold,
        accent: theme.colors.accent,
        text: theme.colors.text,
        primaryBackground: theme.colors.primaryBackground,
        panelShadow: theme.colors.panelShadow,
        glassOverlay: theme.colors.glassOverlay,
        glowAura: theme.colors.glowAura,
        rimLight: theme.colors.rimLight,
        lightStreak: theme.colors.lightStreak,
        gridLine: theme.colors.gridLine,
      },
      // Remove any custom animations or keyframes that were added in the previous step
      // e.g., animation, keyframes
    },
  },
  plugins: [
    // Explicitly remove plugins that were added
  ],
}

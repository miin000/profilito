import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#0a0e17", accent: "#3b82f6" }, fontFamily: { sans: ["var(--font-geist-sans)"], mono: ["var(--font-geist-mono)"] } } }, plugins: [] };
export default config;

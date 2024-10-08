import type { Config } from "tailwindcss";

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                "primary-dark-1": "#000000",
                "primary-dark-2": "#141414",
                "primary-dark-3": "#1A1A1A",
                "primary-dark-4": "#1F1F1F",
                "primary-dark-5": "#2B2B2B",
                "primary-light-1": "#FFFFFF",
                "primary-light-2": "#E8E8E8",
                "primary-light-3": "#C7C7C7",
                "primary-light-4": "#A3A3A3",
                "primary-light-5": "#8A8A8A",
            },
        },
    },
    plugins: [],
    darkMode: "class",
} satisfies Config;

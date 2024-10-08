export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    tailwindcss: {
        cssPath: "~/assets/css/main.css",
        configPath: "~/tailwind.config.ts",
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    colorMode: {
        preference: "system",
        fallback: "dark",
        classSuffix: "",
    },
    modules: [
        "@nuxt/eslint",
        "@nuxt/icon",
        "@nuxtjs/color-mode",
        "@nuxtjs/tailwindcss",
    ],
});

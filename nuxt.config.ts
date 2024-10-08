export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    ssr: true,
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        },
    },
    nitro: {
        compressPublicAssets: true,
    },
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
    image: {
        format: ["avif", "webp", "jpeg"],
    },
    modules: [
        "@nuxt/eslint",
        "@nuxt/icon",
        "@nuxtjs/color-mode",
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "@nuxt/fonts",
    ],
});

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    googleAnalytics: {
        id: "UA-167213766-1",
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "KAORI",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "google-site-verification",
                name: "google-site-verification",
                content: "QRMDjLaI3WzSCIN04PLJQxq6TmErrI5d4zXIY5JZHK4",
            },
            {
                hid: "description",
                name: "description",
                content: "Kaori nft website",
            },
            { name: "twitter:card", content: "summary_large_image" },
            {
                hid: "twitter:title",
                name: "twitter:title",
                content: "Kaori nft website",
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content: "Kaori nft website",
            },
            {
                hid: "twitter:image",
                name: "twitter:image",
                content: "https://cdn.discordapp.com/attachments/933345275551039548/989356727398985738/cloud.jpg",
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "kaori crew website",
            },
            { property: "og:site_name", content: "Kaori Crew" },
            { hid: "og:type", property: "og:type", content: "website" },
            {
                hid: "og:image",
                property: "og:image",
                content: "https://cdn.discordapp.com/attachments/933345275551039548/989356727398985738/cloud.jpg",
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "7777 Kaori Crew | Play to earn server on the game that will never go out of trend: Minecraft | based on the Solana blockchain https://discord.gg/kaoricrewTailwind CSS components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant Dark Mode.",
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Inter:300,400,500,700,900&display=swap",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/app.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~/plugins/vue-clipboard"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{
        path: "~/components",
        pathPrefix: false,
    }, ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxt/postcss8", "@nuxtjs/google-analytics"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
};
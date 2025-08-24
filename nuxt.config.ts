// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: false},
    // GitHub Pages is a static host; disable SSR and prerender the site
    ssr: false,
    app: {
        // Use the repository name as the base path on GitHub Pages
        baseURL: '/homagine/',
        head: {
            title: 'Homagine',
            meta: [{name: 'Homagine, a place to pay tribute', content: 'A site honoring human history'}],
            link: [
                {rel: 'icon',  type:'image/svg+xml', href:'/homagine/favicon.png'},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap'}
            ]
        },
        pageTransition : {name: 'page', mode: 'out-in'},
    },
    nitro: {
        // Optimize output for GitHub Pages, generates 404.html and .nojekyll
        preset: 'github-pages',
    },
    routeRules: {
        // prerender all routes for static hosting
        '/**': { prerender: true },
    },
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    content: {

    },
})
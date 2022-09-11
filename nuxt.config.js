const { resolve } = require('path');

export default {
    mode: 'spa',
    generate: {
        fallback: true
    },
    /*
    ** Headers of the page
    */
    head: {
        title: 'Neveena | My resume website' || process.env.npm_package_name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'keywords', content: 'Front-end developer, Responsive design, vue.js, resume, portfolio, developer, web developer' },
            { name: 'robots', content: 'index, follow' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700&display=swap' },
            { rel: 'stylesheet', href: 'lib/onepage-scroll.css' }
        ],
        script: [
            // { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js' },
            { src: 'lib/onepagescroll.js', async: true, defer: true }
        ]
    },
    manifest: {
        name: 'neveena',
        short_name: 'neveena',
        start_url: './',
        display: 'standalone'
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#ffab50' },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/app.scss'
    ],
    styleResources: {
        scss: [
            '@/assets/scss/_variables.scss',
            resolve(__dirname, '../node_modules/bootstrap/scss/mixins/**/*.scss'),
            '@/assets/scss/mixins/**/*.scss'
        ]
    },
    /*
    ** Disabling Bootstrap Compiled CSS
    */
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        ['@nuxtjs/google-analytics', {
            id: 'UA-154917069-1'
        }]
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        '@nuxtjs/moment'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}

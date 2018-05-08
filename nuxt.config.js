var title = 'New Edge Engineering Limited';
var description = 'Software and infrastructure engineering, architecture consulting, process strategy';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@newedgeengineer' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:creator', content: '@newedgeengineer' },
      { name: 'twitter:image:src', content: '' },
      { property: 'og:title', content: title },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'http://www.newedgeengineering.com/' },
      { property: 'og:image', content: '' },
      { property: 'og:description', content: description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto|Material+Icons" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.0.46/css/materialdesignicons.min.css" },
      { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'vuecidity',
      'vue-moment'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    { src: '~plugins/filters.js', ssr: false },
    { src: '~plugins/vuecidity.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ],

  modules: [
    'bootstrap-vue/nuxt',
  ]
}

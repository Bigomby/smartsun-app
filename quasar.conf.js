module.exports = function(ctx) {
  return {
    plugins: ['pouch', 'vuelidate', 'socketio'],

    css: ['app.styl'],

    extras: [ctx.theme.mat ? 'roboto-font' : null, 'material-icons'],

    supportIE: false,

    vendor: {
      add: [],
      remove: [],
    },

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/,
        });
      },
    },

    devServer: {
      open: true,
    },

    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnGroup',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QItemSeparator',
        'QCard',
        'QCardTitle',
        'QCardMain',
        'QCardActions',
        'QCardSeparator',
        'QChip',
        'QTable',
        'QTd',
        'QModal',
        'QField',
        'QInput',
      ],
      directives: ['Ripple'],
      plugins: ['Notify', 'Dialog'],
    },

    animations: [],

    pwa: {
      cacheExt:
        'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'statics/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },

    electron: {
      extendWebpack(cfg) {},
      packager: {},
    },

    starterKit: '1.0.3',
  };
};

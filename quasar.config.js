/* eslint-env node */
const { configure } = require('quasar/wrappers')
const path = require('path')

module.exports = configure(function (/* ctx */) {
  return {
    boot: ['i18n', 'axios', 'recaptcha', 'unhead'],

    css: ['app.scss', 'satoshi.css'],

    extras: ['roboto-font', 'material-icons', 'material-icons-outlined'],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20',
      },
      env: require('dotenv').config({
        path: path.resolve(__dirname, `./.env.${process.env.NODE_ENV}`),
      }).parsed,

      vueRouterMode: 'history', // available values: 'hash', 'history'

      alias: {
        '@': path.join(__dirname, './src'),
      },
      vitePlugins: [
        [
          '@intlify/vite-plugin-vue-i18n',
          {
            include: path.resolve(__dirname, './src/i18n/**'),
            // 添加以下配置以啟用 JIT 編譯
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true,
            jitCompilation: true,
          },
        ],
        [
          'vite-plugin-checker',
          {
            vueTsc: {
              tsconfigPath: 'tsconfig.vue-tsc.json',
            },
            eslint: {
              lintCommand: 'eslint "./**/*.{js,ts,mjs,cjs,vue}"',
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      open: true, // opens browser window automatically
    },

    framework: {
      config: {
        notify: {
          type: 'warning',
          position: 'top-right',
        },
      },
      plugins: ['Notify'],
    },
    animations: [],

    ssr: {
      pwa: false,

      prodPort: 3000,

      middlewares: ['render'],
    },
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },
    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },
    electron: {
      inspectPort: 5858,

      bundler: 'packager',
      packager: {},

      builder: {
        appId: 'console',
      },
    },

    bex: {
      contentScripts: ['my-content-script'],
    },
  }
})

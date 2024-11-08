import { boot } from 'quasar/wrappers'
import { VueRecaptchaPlugin } from 'vue-recaptcha'

export default boot(({ app }) => {
  console.log(import.meta.env.VITE_RECAPTCHA_SITE_KEY)
  app.use(VueRecaptchaPlugin, {
    v2SiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  })
  return
})

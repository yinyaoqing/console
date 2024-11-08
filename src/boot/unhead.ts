import { boot } from 'quasar/wrappers'
import { createHead } from '@unhead/vue'

export default boot(({ app }) => {
  const head = createHead()
  app.use(head)
})

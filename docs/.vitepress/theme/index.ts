import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BackToTop from './components/BackToTop.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import GiscusComment from './components/GiscusComment.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ReadingProgress),
      'aside-bottom': () => h(BackToTop),
      'doc-after': () => h(GiscusComment),
    })
  },
  enhanceApp({ app }) {
    const modules = import.meta.glob('./components/*.vue', { eager: true })
    for (const path in modules) {
      const name = path.match(/\.\/components\/(.+)\.vue$/)?.[1]
      if (name) app.component(name, (modules[path] as any).default)
    }
  }
} satisfies Theme

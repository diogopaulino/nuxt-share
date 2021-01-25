// Nuxt exposes its default route builder logic here
import { createRoutes, relativeTo } from '@nuxt/utils'
import path from 'path'
// with a lot of pages it might be worth considering a folder pass
// to dynamically create this list
const pages = ['pages/one.vue', 'pages/compPage.vue']
export default function NuxtModule() {
  const { routeNameSplitter, trailingSlash } = this.options.router
  this.extendRoutes((routes) => {
    routes.push(...createRoutes({
      files: pages,
      srcDir: __dirname,
      pagesDir: 'pages',
      routeNameSplitter,
      trailingSlash,
    }))
  })
  const layoutPath = (file) =>
  relativeTo(
    this.options.buildDir,
    path.resolve(__dirname, 'layouts', file),
  )

    this.nuxt.hook('build:templates', ({ templateVars }) => {
        templateVars.layouts.default = layoutPath('default.vue')
    })

    this.nuxt.hook('components:dirs', (dirs) => {
        dirs.unshift({ path: path.resolve(__dirname, 'components') })
    })
    
    this.nuxt.hook('components:extend', (components) => {
        // If there are duplicates, give last the priority
        const noDupes = Object.values(
          components.reduce(
            (map, comp) => ({ ...map, [comp.pascalName]: comp }),
            {}
          )
        )
        components.length = 0
        components.push(...noDupes)
      })
}
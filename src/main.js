// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("~/main.css");

import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(faGithub, faLinkedin, faYoutube)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
}

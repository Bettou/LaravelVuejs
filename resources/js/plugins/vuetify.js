// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import fr from 'vuetify/lib/locale/fr'


Vue.use(Vuetify)

const opts = {
    lang: {
        locales: {fr },
        current: 'fr',
      },
}

export default new Vuetify(opts)
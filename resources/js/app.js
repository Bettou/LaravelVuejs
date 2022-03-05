import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
import NavigationBtn from './Components/NavigationBtn'
import vuetify from  './plugins/vuetify'
import Toast from "vue-toastification";
import VuetifyConfirm from 'vuetify-confirm'

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
    // You can set your default options here
};



Vue.use(Toast, options);
Vue.use(VuetifyConfirm, { vuetify })
InertiaProgress.init()
Vue.component('NavigationBtn',NavigationBtn)

createInertiaApp({
  resolve: name => import(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)

    new Vue({
        vuetify,
      render: h => h(App, props),
    }).$mount(el)
  },
})

import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE',
    libraries: 'places',
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import i18n from './i18n'
import VueGoogleMaps from '@fawmi/vue-google-maps'

// Directives
import ClickOutside from './click-outside'

const app = createApp(App);

app.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBVMRKc0ORaa5Dd6TKwvyOjUhlWbtIXI9c',
	},
})
app.directive('click-outside', ClickOutside);
app.use(router)
app.use(i18n)
app.mount('#app')
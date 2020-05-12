import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'

Vue.use(VueResource);
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$hostname', { value: ((Vue.config.productionTip) ? 'https://api.sermire.com' : 'http://localhost:8080')})
//Vue.prototype.$hostname = ((Vue.config.productionTip) ? 'https://api.sermire.com' : 'http://localhost:8080')

new Vue({
	el: "#app",
	router,
	components: { App },
	render: h => h(App)
})

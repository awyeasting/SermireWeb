import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'

Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
	el: "#app",
	router,
	components: { App },
	render: h => h(App)
})

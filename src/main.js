import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex/dist/vuex.js'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'

Vue.use(VueResource);
Vue.use(Vuex);

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$hostname', { value: ((Vue.config.productionTip) ? 'https://api.sermire.com' : 'http://localhost:8080')})
const store = new Vuex.Store({
	state: {
		$userToken: localStorage.getItem('user-token'),
		$username: localStorage.getItem('username')
	}, 
	mutations: {
		update$userToken: function(state, newUserToken) { state.$userToken = newUserToken },
		update$username: function(state, newUsername) { state.$username = newUsername }
	}
});

new Vue({
	store: store,
	el: "#app",
	router,
	components: { App },
	render: h => h(App)
})

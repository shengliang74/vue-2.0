// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Toast from './components/toast.js';
import VueLoading from './components/loading'
import VueModel from './components/model'
console.log(VueModel);
console.log(VueLoading);
Vue.config.productionTip = false

Vue.use(VueModel, {
	container: '#app',
})

// Vue.use(Toast);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})
import Vue from 'vue';
import VueRouter from 'vue-router';
import VuePageTitle from 'vue-page-title'
import VueParticles from 'vue-particles';
import {routes} from './routes';
import App from '../vue/App.vue';

const router = new VueRouter({
	routes,
	mode: 'history',
	linkExactActiveClass: 'active',
});

Vue.use(VueRouter);
Vue.use(VuePageTitle, {
	router,
	suffix: '| Tartarus '
});
Vue.use(VueParticles);

new Vue({
  	el: '#app',
  	router,
  	render: h => h(App)
});
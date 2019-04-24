import Vue from 'vue'
import Router from 'vue-router'
import Home from './Pages/Admin/Home.vue'
import Login from './Pages/Login.vue'
import NotF from './Pages/404.vue'
import store from './store';
Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('./Pages/Admin/About.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '*',
			name: '404',
			component: NotF
		}
	]
});
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters.isLoggedIn) {
			next()
			return
		}
		next('/login')
	} else {
		next()
	}
});
export default router;

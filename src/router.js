import Vue from 'vue'
import Router from 'vue-router'
import UsersListPage from './Pages/Admin/UsersListPage.vue'
import Main from './Pages/Admin/Main.vue'
import Reports from './Pages/Admin/Reports.vue'
import Licenses from './Pages/Admin/Licenses.vue'
import Gred from './Pages/Admin/GRED.vue'
import Login from './Pages/Login.vue'
import Admin from './Pages/Admin.vue'
import NotF from './Pages/404.vue'
import store from './store';
Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/admin',
			name: 'admin',
			component: Admin,
			meta: {
				requiresAuth: true
			},
			children: [
				{
					path: 'userslist',
					name: 'home',
					component: UsersListPage,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: '',
					name: 'main',
					component: Main,
					meta: {
						requiresAuth: true
					}
				},				
				{
					path: 'licenses',
					name: 'licenses',
					component: Licenses,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'reports',
					name: 'reports',
					component: Reports,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'gred',
					name: 'gred',
					component: Gred,
					meta: {
						requiresAuth: true
					}
				},
			]
		},	
		{
			path: '/login',
			name: 'login',
			component: Login
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

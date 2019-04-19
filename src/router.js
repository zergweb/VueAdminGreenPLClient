import Vue from 'vue'
import Router from 'vue-router'
import Home from './Pages/Admin/Home.vue'
import Login from './Pages/Login.vue'
import NotF from './Pages/404.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
	  },
	 {
		  path: '/login',
		  name: 'login',
		  component: Login
	  },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './Pages/Admin/About.vue')
	  },
	  {
		  path: '*',
		  name: '404',
		  component:NotF
	  }
  ]
})

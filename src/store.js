import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP}from './axios/http'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//apiURL:" ",
		status: '',
		token: localStorage.getItem('token') || '',
		user: {}
	},
	getters: {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
	},
  mutations: {
	  auth_request(state) {
		  state.status = 'loading'
	  },
	  auth_success(state, token, user) {
		  state.status = 'success'
		  state.token = token
		  state.user = user
	  },
	  auth_error(state) {
		  state.status = 'error'
	  },
	  logout(state) {
		  state.status = ''
		  state.token = ''
	  },
  },
  actions: {
	  login({ commit }, user) {
		  return new Promise((resolve, reject) => {
			  commit('auth_request')
			  HTTP({ url:'login', data: user, method: 'POST' })
				  .then(resp => {
					  const token = resp.data;
					  const user = resp.data.user;
					  localStorage.setItem('token', token);
					  HTTP.defaults.headers.common['Authorization'] = token;
					  commit('auth_success', token, user);
					  resolve(resp);
				  })
				  .catch(err => {
					  commit('auth_error');
					  localStorage.removeItem('token');
					  reject(err);
				  })
		  })
	  },
	  logout({ commit }) {
		  return new Promise((resolve, reject) => {
			  commit('logout');
			  localStorage.removeItem('token');
			  delete HTTP.defaults.headers.common['Authorization'];
			  
			  resolve();			  
		  })
	  }
  }
})

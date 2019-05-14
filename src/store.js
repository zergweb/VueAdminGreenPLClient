import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP}from './axios/http'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//apiURL:" ",
		status: '',
		token: localStorage.getItem('token') || '',
		user: {},
		users:[]
	},
	getters: {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
		allUsers: state => state.users,
		currentUser:state=>state.user
	},
  mutations: {
	  auth_request(state) {
		  state.status = 'loading'
	  },
	  auth_success(state, payload) {
		  state.status = 'success';
		  state.token = payload.token;
		  state.user = payload.user;
	  },
	  auth_error(state) {
		  state.status = 'error'
	  },
	  logout(state) {
		  state.status = '';
		  state.token = '';
	  },
	  setUsers(state, users) {
		  state.users = users;
	  }
  },
	actions: {
		loadUsers({ commit }) {
			let users = [];
			for (let i = 0; i < 40; i++) {
				users.push({
					fName: "fName" + i,
					sName: "sName"+i,
					lName: "lName" + i,
					license: Math.floor(Math.random() * (120)) + 0,
					balance: Math.floor(Math.random() * (5000)) + 0
				})
			}
			commit('setUsers', users);
		},
		login({ commit }, user) {
			localStorage.setItem('token', "sometoken");
			var u = { name: "userName" };
			commit('auth_success', { token:"sometoken", user:u });
			
		  //return new Promise((resolve, reject) => {
			 // commit('auth_request')
			 // HTTP({ url:'login', data: user, method: 'POST' })
				//  .then(resp => {
				//	  const token = resp.data;
				//	  const user = resp.data.user;
				//	  localStorage.setItem('token', token);
				//	  HTTP.defaults.headers.common['Authorization'] = token;
				//	  commit('auth_success', token, user);
				//	  resolve(resp);
				//  })
				//  .catch(err => {
				//	  commit('auth_error');
				//	  localStorage.removeItem('token');
				//	  reject(err);
				//  })
		  //})
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

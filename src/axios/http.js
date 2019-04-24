import axios from 'axios';
const token = localStorage.getItem('token')

export const HTTP = axios.create({
	baseURL: "http://127.0.0.1:5800/",
	headers: {
		Authorization: "Bearer" + token
	}
});
import fetch from '../utils/http'

export function login(data) {
	return fetch({
		url: '/session/sign_in',
		method: 'post',
		data: data
	})
}

export function register(data) {
	return fetch({
		url: '/session/sign_up',
		method: 'post',
		data: data
	})
}

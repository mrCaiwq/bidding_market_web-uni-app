import {login} from '@/api/session'

export default{
	namespaced:true,
	state:{
		a:111
	},
	mutations:{
		
	},
	actions:{
		userLogin({commit},msg) {
			return login(msg).then(data => {
				return data
			})
		}
	}
}
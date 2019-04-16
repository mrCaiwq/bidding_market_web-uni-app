import {login, register} from '@/api/session'

export default{
	namespaced:true,
	state:{
		
	},
	mutations:{
		
	},
	actions:{
		userLogin({commit},msg) {
			return login(msg).then(data => {
				return data
			})
		},
		userRegister({commit}, msg){
			return register(msg).then(data => {
				return data
			})
		}
	}
}
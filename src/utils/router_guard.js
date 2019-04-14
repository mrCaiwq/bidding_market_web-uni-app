import routerPush from './router_push.js'
import toast from './toast.js'
const checkToken = function() {
	uni.getStorage({
		key: 'token',
		success: function() {

		},
		fail() {
			let msg = {
				title: '未登录',
				func: function(){
					routerPush.navigateTo({
						url: '../login/login'
					})					
				}
			}
			toast.msgToast(msg)
		}
	})
}

export default checkToken

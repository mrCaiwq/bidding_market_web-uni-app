import {
	BASE_URL
} from '../config.js'
const fetch = function({
	url,
	method = "GET",
	data = {}
} = {}) {
	return new Promise(function(resolve,reject) {
		if (!url) {
			reject('请求地址不能为空')
		}
		uni.request({
			url: BASE_URL + url,
			method: method,
			data: data,
			header:{
				'Accept': "application/json, text/plain, */*",
				"content-type": "application/json; charset=utf-8",
			},
			success: res => {
				if(res.statusCode == 200){
					resolve(res)
				}else{
					reject(res.data.msg)
				}
				
			},
			fail: err => {
				reject(err)
			},
		});
	})
}

export default fetch

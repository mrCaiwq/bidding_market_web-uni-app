class RouterClass{
	// 保留当前页跳转
	navigateTo({
		url,
		func = function() {}
	}) {
		if (!url) throw "url不能为空"
		uni.navigateTo({
			url: url,
			success: func,
			fail(err) {
				console.log(JSON.stringify(err))
			}
		})
	}
	// 关闭当前页跳转
	reLaunch({
		url,
		func = function(){}
	}){
		uni.reLaunch({
			url: url,
			success: func,
			fail: (err) => {
				console.log(JSON.stringify(err))
			},
		});
	}
	// 返回上一页
	navigateBack(){
		uni.navigateBack({
			delta: 1
		});
	}
}
const routerPush = new RouterClass()

export default routerPush

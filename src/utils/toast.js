class ToastClass{
	// 普通消息弹窗
	msgToast({
		title,
		duration = 2000,
		func = function() {}
	} = {}) {
		if (!title) throw "title不能为空"
		uni.showToast({
			title: title,
			duration: 2000,
			success: func,
			icon:'none',
			fail(err) {
				console.log(JSON.stringify(err))
			}
		});
	}

	// 加载提示框
	loadToats({
		title,
		mask = false,
		func = function() {
			uni.hideLoading()
		}
	}) {
		uni.showLoading({
			title: title,
			mask: mask,
			success: func,
			fail(err) {
				console.log(err)
			}
		});
	}

	// 类alert弹窗
	showModal({
		title,
		content,
		func = function() {}
	}) {
		uni.showModal({
			title: title,
			content: content,
			success: func,
			fail: (err) => {
				console.log(err)
			},
		});
	}

	// 显示操作菜单
	actionSheet({
		list,
		func = function() {}
	}) {
		uni.showActionSheet({
			itemList: list,
			success: func,
			fail: (err) => {
				console.log(err)
			},
		});
	}
}
const toast = new ToastClass()

export default toast

<template>
	<view class="page"><button type="primary" @click="login()">登录</button></view>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	mounted() {
		this.$checkToken()
	},
	onPullDownRefresh() {
		uni.showModal({
			title: '提示',
			content: '这是一个弹窗',
			success: function() {
				console.log(1111)
				uni.stopPullDownRefresh();
			}
		});
	},
	methods: {
		login(){
		uni.navigateTo({
			url: '../login/login',
			success() {

			},
			fail: (err) => {
				console.log(JSON.stringify(err))
			},
		});
		}
	}
};
</script>

<style>
.view-test {
	background: red;
	height: 100upx;
}
.a {
	opacity: 0.8;
}
.input-box {
	border: 1px solid red;
	width: 400upx;
}
</style>

<template>
	<view class="page unLogin">
		<view class="top-box">
			<view>
				<image class="avatar" src="/static/avatar.png" mode="scaleToFill" @click="login()"></image>
			</view>
			<view class="state-title" @click="login()">
				<text>未登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		onLoad() {
			
		},
		onReady() {
			
		},
		computed: {
		},
		methods: {
			login(){
				this.$routerPush.navigateTo({url:"../login/login"})
			}
		},
	}
</script>

<style>
	@import '../../../static/style/unLogin.scss';
</style>

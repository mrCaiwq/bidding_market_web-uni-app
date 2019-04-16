<template>
	<view class="page login">
		<view class="login-box">
			<view class="outer-box">
				<view class="input-name">
					学号：
				</view>
				<input type="number" v-model="loginMsg.schood_num" placeholder="请输入你的学号" class="from-input" />
			</view>
			<view class="outer-box">
				<view class="input-name">
					密码：
				</view>
				<input type="password" v-model="loginMsg.password" placeholder="请输入你的密码" class="from-input" />
			</view>
			<view class="login-button-box">
				<button class="login-button" hover-class="login-button-hover" @click="login()">登录</button>
			</view>
			<view class="register" hover-class="register-hover">
				<navigator url="../register/register">还没有账号?赶紧注册</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapActions} from 'vuex'
	export default {
		data(){
			return{
				loginMsg:{
					schood_num:'',
					password:''
				}
			}
		},
		onLoad() {

		},
		onNavigationBarButtonTap(){
			this.routerPush.navigateBack()
		},
		computed:{
			
		},
		methods: {
			...mapActions({
				loginRequest:"session/userLogin"
			}),
			login(){
				this.loginRequest(this.loginMsg)
				.then(data => {
					console.log(data);
				}).catch(err => {
					this.$toast.msgToast({title:err})
				})
			}
		},
	};
</script>

<style>
	@import '../../static/style/login.scss'
</style>

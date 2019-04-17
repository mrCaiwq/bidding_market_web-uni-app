<template>
	<view class="page register">
		<view class="register-box">
			<view class="outer-box">
				<view class="input-name">
					学号：
				</view>
				<input type="number" v-model="registerMsg.schood_num" placeholder="请输入您的学号" maxlength="13" class="from-input">
			</view>
			<view class="outer-box">
				<view class="input-name">
					密码：
				</view>
				<input type="password" v-model="registerMsg.password" placeholder="请输入您的密码" class="from-input">
			</view>
			<view class="outer-box">
				<view class="input-name">
					学院：
				</view>
				<input type="text" v-model="registerMsg.acadamy" placeholder="请输入您所在学院" class="from-input">
			</view>
			<view class="outer-box">
				<view class="input-name">
					系：
				</view>
				<input type="text" v-model="registerMsg.dept" placeholder="请输入您所在系" class="from-input">
			</view>
			<view class="outer-box">
				<view class="input-name">
					电话：
				</view>
				<input type="number" v-model="registerMsg.cellphone" maxlength="13" placeholder="请输入您的手机" class="from-input">
			</view>
			<view class="outer-box">
				<view class="input-name">
					入学时间：
				</view>
				<picker mode="selector" :range="year" @change="selectDate">
					<view class="enter-box">{{registerMsg.enter_year == '' ? '入学时间' : registerMsg.enter_year}}</view>
				</picker>
			</view>
			<view class="register-button-box">
				<button class="register-button" hover-class="register-button-hover" @click="register()">注册</button>
			</view>
			<view class="login" hover-class="login-hover">
				<navigator open-type="navigateBack" url="../login/login">已有账号?马上登陆</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapActions} from 'vuex'
	export default{
		data(){
			return{
				year:[],
				registerMsg:{
					schood_num:'',
					password:'',
					acadamy:'',
					dept:'',
					cellphone:'',
					enter_year:''
				}
			}
		},
		onLoad() {
			
		},
		onReady() {
			for(let d = 1911; d <= 2019 ; d++){
				this.year.push(d);
			}
		},
		computed:{
			
		},
		methods:{
			...mapActions({
				registerRequest:"session/userRegister"
			}),
			selectDate(e){
				this.registerMsg.enter_year = this.year[e.detail.value]
			},
			register(){
				for (var key in this.registerMsg) {
					if(!this.registerMsg[key]){
						return this.$toast.msgToast({title:'请把注册信息补全'})
					}
				}
				this.registerRequest(this.registerMsg)
				.then(data => {
					console.log(data)
				})
				.catch(err => {
					this.$toast.msgToast({title:err})
				})
			}
		}
	}
</script>

<style>
	@import '../../static/style/register.scss';
</style>

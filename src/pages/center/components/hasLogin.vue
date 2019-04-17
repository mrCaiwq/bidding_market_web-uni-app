<template>
	<view class="page hasLogin">
		<view class="top-box">
			<view>
				<image class="avatar" :src="Img.avatar" mode="scaleToFill" @click="login()"></image>
			</view>
			<view class="user-name-box">
				<text>{{name}}</text>
			</view>
		</view>		
		<view class="message-box">
			<view class="message" v-for="(msg,index) in info" :key="index">
				<image :src="msg.img" mode="scaleToFill" class="message-img"></image>
				<text>{{msg.val}}</text>
			</view>
		</view>
		<view class="operating-box">
			<view class="operating" hover-class="ripple" :hover-stay-time="1000">
				<image :src="Img.myBidding" mode="scaleToFill" class="operating-img"></image>
				<text>我的拍卖</text>
			</view>
			<view class="operating" hover-class="ripple" :hover-stay-time="1000">
				<image :src="Img.loginOut" mode="scaleToFill" class="operating-img"></image>
				<text>登出</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState, mapMutations, mapActions} from 'vuex'
	export default{
		data() {
			return {
				name:'张三',
				info:[
					{
						val:'',
						img:require('../../../static/schood_num.png')
					},
					{
						val:'',
						img:require('../../../static/cellphone.png')
					},
					{
						val:'',
						img:require('../../../static/date.png')
					},
					{
						val:'',
						img:require('../../../static/acadamy.png')
					},
					{
						val:'',
						img:require('../../../static/dept.png')
					}
				],
				Img:{
					myBidding:require('../../../static/my_bidding.png'),
					loginOut:require('../../../static/login_out.png'),
					avatar:require('../../../static/avatar.png')
				}
			}
		},
		onLoad() {
			
		},
		onReady() {
			
		},
		computed: {
		},
		methods: {
		},
	}
</script>

<style>
	@import '../../../static/style/hasLogin.scss';
</style>

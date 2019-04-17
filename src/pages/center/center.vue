<template>
	<view class="page center">
		<unLogin v-if="!isToken"></unLogin>
		<hasLogin v-if="isToken"></hasLogin>
	</view>
</template>

<script>
	import unLogin from './components/unLogin.vue'
	import hasLogin from './components/hasLogin.vue'
	import {mapState, mapMutations, mapActions} from 'vuex'
	export default {
		components: {
			unLogin,
			hasLogin
		},
		data(){
			return{
				isToken: true
			}
		},
		onLoad() {
			
		},
		onReady() {
			this.isToken = uni.getStorageSync('token')
		},
		computed:{
			
		},
		methods:{
			
		}
	}
</script>

<style>
	@import '../../static/style/center.scss';
</style>

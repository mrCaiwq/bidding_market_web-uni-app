<template>
	<view class="recommend">
		<view class="recommend-box">
			<view class="recommend-top-bar">首页推荐</view>
			<view class="replace" @click="replace()" v-if="productList.length >= 10">
				<text>换一组</text>
				<image src="/static/replace.png" mode="scaleToFill"></image>
			</view>
			<view class="product-box" v-for="(product, index) in showList" :key="index">
				<image :src="product.banner_url" mode="scaleToFill"></image>
				<view class="product-msg">
					<text class="product-name">{{ product.name }}</text>
					<text class="money">￥{{ product.curr_price }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
	data() {
		return {
			productList: [
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				},
				{
					banner_url: require('../../../static/example.png'),
					name: '大宝SOD22蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜蜜',
					curr_price: '1000'
				}
			],
			showList: []
		};
	},
	onLoad() {},
	onReady() {
		this.product();
	},
	computed: {},
	methods: {
		replace() {
			let count = this.productList.length;
			let productList = this.productList.concat();
			this.showList = [];
			for (let i = 0; i <= 10; i++) {
				let index = parseInt(Math.random() * count) + i;
				this.showList.push(productList[index]);
				productList[index] = productList[i];
				count--;
			}
		},
		product() {
			this.showList = this.productList.slice(0, 10);
		}
	}
};
</script>

<style>
@import '../../../static/style/recommendComponent.scss';
</style>

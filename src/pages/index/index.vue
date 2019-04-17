<template>
	<view class="page index">
		<view class="category-box">
			<view class="category" v-for="(category,index) in categoryList" :key=index>
				<image class="photo" :src="category.name ? '../../static/example.png' : '../../static/stay-tuned.png'" mode="scaleToFill"></image>
				<text>{{category.name}}</text>
			</view>
			<button class="more-category" hover-class="button-hover">全部分类</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			categoryList: [{}, {}, {}, {}, {}, {}, {}, {}]
		};
	},
	onReady() {
		// this.$checkToken()
	},
	onNavigationBarButtonTap(i) {
		if (i.index == 0) {
			uni.showModal({
				title: '发布新拍卖',
				content: '这是一个弹窗',
				success: function() {
					console.log(1111);
				}
			});
		}
	},
	onPullDownRefresh() {
		uni.showModal({
			title: '提示',
			content: '这是一个弹窗',
			success: function() {
				console.log(1111);
				uni.stopPullDownRefresh();
			}
		});
	},
	methods: {
		login() {
			uni.navigateTo({
				url: '../login/login',
				success() {},
				fail: err => {
					console.log(JSON.stringify(err));
				}
			});
		}
	}
};
</script>

<style>
@import '../../static/style/index.scss';
</style>

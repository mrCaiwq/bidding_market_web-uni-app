<template>
	<view class="page index">
		<categories></categories>
		<recommend></recommend>
	</view>
</template>

<script>
	import categories from "./components/categories.vue"
	import recommend from "./components/recommend.vue"
	export default {
		components: {
			categories,
			recommend
		},
		data() {
			return {

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

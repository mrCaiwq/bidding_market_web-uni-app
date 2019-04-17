<template>
	<view class="category-box">
		<view class="category" v-for="(category,index) in categoryList" :key=index>
			<image class="photo" :src="category.name ? '../../static/example.png' : '../../static/stay-tuned.png'" mode="scaleToFill"></image>
			<text>{{category.name}}</text>
		</view>
		<button class="more-category" hover-class="button-hover">全部分类</button>
	</view>
</template>

<script>
	import {mapState, mapActions, mapMutations} from 'vuex'
	export default{
		data(){
			return{
				categoryList: [{}, {}, {}, {}, {}, {}, {}, {}]				
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
	@import '../../../static/style/categoriesComponents.scss';
</style>

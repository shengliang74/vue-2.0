<template>
	<div class="sl-model" v-show="isShow">
		<div class="sl-model-img"></div>	
		<div class="sl-model-img2"></div>	
		<div class="sl-model-img3"></div>	
	</div>
</template>
<script>
	export default {
		name: 'slModel',
		data () {
			return {
				isShow: false,
			}
		},
		methods:{
			open () {
				this.isShow = true;
			},
			hidden () {
				this.isShow = false;
			},
		}
	}
</script>
<style lang="less" scoped>
	.sl-model {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0,0,0,.5);
		.sl-model-img {
			position:absolute;
			left: 30%;
			top: 50%;
			width: 50px;
			height: 50px;
			border-radius: 5px;
			background: black;
			opacity: 1;
			animation: slide 1s infinite;
		}
		.sl-model-img2 {
			position:absolute;
			left: 50%;
			top: 50%;
			width: 50px;
			height: 50px;
			border-radius: 5px;
			background: black;
			opacity: 1;
			animation: slide 1s infinite .1s;
		}
		.sl-model-img3 {
			position:absolute;
			left: 70%;
			top: 50%;
			width: 50px;
			height: 50px;
			border-radius: 5px;
			background: black;
			opacity: 1;
			animation: slide 1s infinite .2s;
		}
	}
		@keyframes slide {
    0%
      {transform: scale(1);}
    50%
      {opacity: .3;
      transform: scale(2);}
    100%
      {transform: scale(1);}
  }
</style>
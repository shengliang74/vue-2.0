<template>
	<div class="main">
		<h1>{{msg}}</h1>
		<toast></toast>
	</div>
</template>
<script>
	export default {
		name: 'Main',
		data () {
			return {
				msg: 'welcome to the vue.js'
			}
		}
	}
</script>

<style scoped lang="less">
	.main {
		font-size: 14px;
		color: #58666e;
		background-color:  #1c2b36;
	}
</style>
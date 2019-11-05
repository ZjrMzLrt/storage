<template>
	<div ref='wrapper'>
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default{
		data(){
			return{
				wrapper:{}
			}
		},
    mounted() {
      var _this = this
      setTimeout(function() {
        _this.init()
      }, 80);
    },
		methods:{
			init(){
				this.wrapper = new BScroll(this.$refs.wrapper,{click:true,probeType:3})
			}
		}
	}
</script>

<style>
</style>
<template>
	<div id="ification">
		<div class="wrapper" ref="wrapper">
            <div class="content">
		<h3>共{{getArr().length}}个课程</h3>
		<div class='none' v-if='!getArr().length'>
			暂时没有精品课程数据
		</div>
		<audition v-for='(item,index) in getArr()' :key='index' :name='item.title' v-if='getArr().length'></audition>
		<h3 style="margin-top:20px;" v-if='obj.id'>其他课程</h3>
		<div>
			<audition v-for='(item,index) in getArr2()' :key='index' :name='item.title' v-if='getArr2().length'></audition>
		</div>
		</div></div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import audition from './audition'
	export default{
		props: {
			obj: {}
		},
		data(){
			return{
				arr: [],
				arr2: [],
				dataList: []
			}
		},
		created() {
			this.$nextTick(() => {
			//$refs绑定元素
				if(!this.scroll){
					this.scroll = new BScroll(this.$refs.wrapper, {
					//开启点击事件 默认为false
					click:true
				})
				// console.log(this.scroll)
				}else if(!this.$refs.wrapper){
					return
				}
				else{
					this.scroll.refresh()
				}
			})
		},
		methods: {
			getArr(){
				if(this.obj.id){
					return this.dataList.filter(item => {
						return item.title == this.obj.txt;
					})
				}else{
					return this.dataList;
				}
			},
			getArr2(){
				if(this.obj.id){
					return this.dataList.filter(item => {
						return item.title != this.obj.txt;
					})
				}
			}
		},
		mounted(){
			var url=localStorage.url
			this.axios.post(url+"getcourse").then((res)=>{
				console.log(res.data.exper)
				this.dataList=res.data.exper
			})
		},
		components: {
			audition
		}
	}
</script>
<style>
	#ification{
		box-sizing: border-box;
		padding: 0 10px;
		margin-top: 30px;
	}
	.none{
		width: 90vw;
		height: 135px;
		text-align: center;
		line-height: 135px;
	}
	.wrapper{
			height: calc(100vh - 80px);
			overflow: hidden;
		}
</style>
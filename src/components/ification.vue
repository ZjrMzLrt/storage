<template>
	<div id="ification">
		<h3>共{{getArr().length}}个课程</h3>
		<div class='none' v-if='!getArr().length'>
			暂时没有精品课程数据
		</div>
		<audition v-for='item,index in getArr()' :key='index' :name='item.txt' v-if='getArr().length'></audition>
		<h3 v-if='obj.id'>其他课程</h3>
		<div>
			<audition v-for='item,index in getArr2()' :key='index' :name='item.txt' v-if='getArr2().length'></audition>
		</div>
		
	</div>
</template>
<script>
	import audition from './audition'
	export default{
		props: {
			obj: {}
		},
		data(){
			return{
				arr: [],
				arr2: [],
				dataList: [{
						txt: '声乐',
						id: 1
					},{
						txt: '钢琴',
						id: 1
					},{
						txt: '舞蹈',
						id: 1
					}
				]
			}
		},
		methods: {
			getArr(){
				if(this.obj.id){
					return this.dataList.filter(item => {
						return item.txt == this.obj.txt;
					})
				}else{
					return this.dataList;
				}
			},
			getArr2(){
				if(this.obj.id){
					return this.dataList.filter(item => {
						return item.txt != this.obj.txt;
					})
				}
			}
		},
		mounted(){

		},
		components: {
			audition
		}
	}
</script>
<style>
	#ification{
		margin-top: 30px;
		box-sizing: border-box;
		padding: 0 10px;
	}
	.none{
		width: 375px;
		height: 150px;
		text-align: center;
		line-height: 150px;
	}
</style>
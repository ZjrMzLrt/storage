<template>
	<div id="exper">
		<div class="title">
			<span @click='gonext'>〈</span>
			精品课程
		</div>
		<div class="body">
			<ul>
				<li v-for='(item,index) in routerList' :key='index' :class='{on: curIndex == index}' @click='tab(index,item)'>{{item.txt}}</li>
			</ul>
			<ification :obj='obj'></ification>
		</div>
	</div>
</template>
<script>
	import ification from '@/components/ification'
	export default{
		data(){
			return{
				curIndex: 0,
				obj: {
					txt: '全部',
					id: 0,
					arr: [
					{
						txt: '全部',
						id: 0
					},{
						txt: '声乐',
						id: 1
					},{
						txt: '钢琴',
						id: 1
					},{
						txt: '舞蹈',
						id: 1
					},{
						txt: '美术',
						id: 1
					}
				]
				},
				routerList: []
			}
		},
		methods: {
			tab(index,item){
				this.curIndex = index;
				this.obj = item;
			},
			gonext(){
				this.$router.go(-1)
			}
		},
		components: {
			ification
		},
		mounted(){
			var url=localStorage.url
			this.axios.post(url+"getcourse").then((res)=>{
				console.log(res.data)
				this.routerList=res.data.experbtn
			})
		}
	}
</script>
<style lang='scss'>
	#exper{
		width: 100vw;
		height: calc(100vh - 40px);
		background: #f5f5f5;
		.title{
			width: 375px;
			height: 40px;
			background: rgb(0,162,218);
			color:#fff;
			text-align: center;
			line-height: 40px;
			position:relative;
			font-size: 18px;
			position: fixed;
			top: 0;
			left: 0;
			span{
				position: absolute;
				left: 20px;
			}
		}
		.body{
			margin-top: 40px;
		}
		ul{
			display: flex;
			height: 40px;
			justify-content: space-around;
			font-size: 14px;
			background: #fff;
			li{
				width: 35px;
				line-height: 40px;
				border-bottom: 2px solid #fff;
				text-align: center;
			}
			li.on{
				color: rgb(1,163,218);
				border-color: rgb(1,163,218);
			}
		}
	}
</style>
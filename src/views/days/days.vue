<template>
	<div id="days">
		<div class="title">
			<span @click='gonext'>〈</span>
			培训课表
		</div>
		<div class="day">
			<div class="top">
				<ul>
					<li v-for='item,index in dayList' :key='index'><span>{{item.txt}}</span></li>
				</ul>
				<ul class='btn'>
					<li v-for='item,index in dayList' :key='index'><span :class='{on: index == btnCurindex}' @click='btn(index)'>{{item.num}}</span></li>
				</ul>
			</div>
			<div class="tab">
				<div><span :class='{on: tabCurindex == 0}' @click='tab(0)'>我的课程</span></div>
				<div><span :class='{on: tabCurindex == 1}' @click='tab(1)'>所有课程</span></div>
			</div>
		</div>
		<div class="conent">
			<div v-show='!tabCurindex'>
				<img src="/static/img/首页/培训课表/1-2_03.jpg" alt="">
				<router-link to='/course' tag='p'>前去选课</router-link>
			</div>
			<div v-show='tabCurindex'>
				暂时没有课表数据
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				btnCurindex: 0,
				tabCurindex: 0,
				dayList: [
					{
						txt: '日',
						num: 3
					},{
						txt: '一',
						num: 4
					},{
						txt: '二',
						num: 5
					},{
						txt: '三',
						num: 6
					},{
						txt: '四',
						num: 7
					},{
						txt: '五',
						num: 8
					},{
						txt: '六',
						num: 9
					},
				]
			}
		},
		methods: {
			gonext(){
				this.$router.go(-1);
			},
			tab(index){
				this.tabCurindex = index;
			},
			btn(index){
				this.btnCurindex = index;
			}
		}
	}
</script>
<style lang='scss'>
	#days{
		box-sizing: border-box;
		padding: 0 10px;
		height: 100vh;
		background: rgb(244,244,244);
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
		.day{
			margin-top: 45px;
			background: #fff;
			padding-bottom: 30px;
			ul{
				display: flex;
				margin-top: 20px;
				font-size: 14px;
				li{
					flex: 1;
					text-align: center;
					span{
						display: inline-block;
						width: 30px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						border-radius: 50%;
					}
				}
			}
			.btn{
				.on{
					background: rgb(0,171,213);
				}
			}
		}
		.tab{
			display: flex;
			margin-top: 30px;
			div{
				flex: 1;
				text-align: center;
				span{
					
					padding-bottom: 20px;
					border-bottom: 2px solid #fff;
				}
				span.on{
					color: rgb(0,171,213);
					border-color: rgb(0,171,213);
				}
			}
		}
		.conent{
			height: 380px;
			display: flex;
			justify-content: center;
			align-items: center;
			img{
				width: 160px;
			}
			p{
				width: 115px;
				height: 30px;
				text-align:center;
				line-height: 30px;
				color:#fff;
				background:rgb(0,162,217);
				border-radius: 5px;
				margin-top: 30px;
				margin-left: 20px;
			}
		}
	}
</style>
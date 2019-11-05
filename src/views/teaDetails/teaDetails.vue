<template>
	<div id="teaDetails">
		<div class="title">
			<span @click='gonext'>〈</span>
			老师详情
		</div>
		<div class="body">
			<div class="ka">
				<div class="top">
					<div>
						<img src="/static/img/首页/1_22.png" alt="">
						<span>推荐TA</span>
					</div>
				</div>
				<p>{{data.name}}</p>
				<p>{{data.tea}}</p>
				<div class="tab">
					<div @click='tab(0)' :class='{on: curIndex==0}'>老师简介</div>
					<div @click='tab(1)' :class='{on: curIndex==1}'>主授课程</div>
				</div>
			</div>
			<div class="conent">
				<img :src="data.pic" alt="" v-show='!curIndex'>
				<p v-show='curIndex'>暂时没有课程数据</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				curIndex: 0,
				data: {}
			}
		},
		mounted(){
			this.data = JSON.parse(this.$route.query.data)
		},
		methods: {
			gonext(){
				this.$router.go(-1)
			},
			tab(index){
				this.curIndex = index;
			}
		}
	}
</script>
<style lang='scss'>
	#teaDetails{
    width: 100vw;
    height: 100vh;
    background: #F5F5F5;
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
			width: 312px;
			left: 50%;
			margin-left: -156px;
			position: absolute;
			z-index: 100;
			top: 45px;
		}

		.ka{
			width: 310px;
			height: 205px;
      background: #fff;
			border-radius: 5px;
      margin-bottom: 10px;
			.top{
				display: flex;
				justify-content: flex-end;
				img{
					width: 70px;
				}
				div{
					width: 61%;
					height: 80px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					span{
						color: rgb(0,162,217);
					}
				}
			}
			p{
				text-align: center;
				margin-top: 10px;
				font-size: 14px;
			}
			.tab{
				display: flex;
				height: 50px;
				margin-top: 20px;
        line-height: 50px;
				div{
					flex: 1;
					text-align: center;
					font-size: 14px;
				}
				div.on{
					color: rgb(0,162,217);
				}
			}
		}
		.conent{
				img{
					width: 310px;
				}
				p{
					text-align: center;
					margin-top: 50px;
				}
			}
	}
</style>
<template>
	<div id="details">
		<div class="title">
			<span @click='gonext'>〈</span>
			课程详情
		</div>
		<div class="pic">
			<img src="/static/img/首页/精品课程/课程详情/1_5_02.jpg" alt="">
		</div>
		<h3>66元体验舞蹈、美术课程一个月了......欢迎您的加入！</h3>
		<p>时长：45分钟</p>
		<p>开课：随到随学</p>
		<div class="price">
			<p>￥0.00</p>
			<del>原件：￥0.00</del>
		</div>
		<div class="pop">
			<img src="" alt="">
			<span>45人报名</span>
		</div>
		
		<div class="jianjie">
			<div class='title'>
				<img src="/static/img/首页/精品课程/课程详情/1_5_05.jpg" alt="">
				<h3>课程简介</h3>
			</div>
			
			<div class="ter">
				<div class="title">
					<img src="/static/img/首页/精品课程/课程详情/1_5_08.jpg" alt="">
					<h3>授课老师</h3>
				</div>
				<div class="conent">
					<div class="left">
						<img src="/static/img/首页/精品课程/课程详情/1_5_11.jpg" alt="">
						<div>
							<p>蔚蓝云朵艺术学校-胡苏</p>
							<p>总校长</p>
						</div>
					</div>
					<span style="font-weight: 900;">&gt;</span>
				</div>
			</div>
			<div class="zhi">
				<div class="title">
					<img src="/static/img/首页/精品课程/课程详情/1_5_15.jpg" alt="">
					<h3>报课须知</h3>
				</div>
				<ul>
					<li>1、报名成功后，商家可能会和你约定到店时间</li>
					<li>2、报名成功后，可能商家出示手机号和课程详情作为凭证</li>
					<li>3、购买课程不支持退款，请谨慎购买</li>
				</ul>
			</div>
		</div>
		<div class="bottom">
			<div>
				
					<img src="/static/img/首页/精品课程/课程详情/1_5_22.jpg" alt="">
					<p>分享</p>
				
			</div>
			<div>
				
					<img src="/static/img/首页/精品课程/课程详情/1_5_19.jpg" alt="">
					<p>电话咨询</p>
				
			</div>
			<router-link to='/sing' tag='div' class='btn1'>
				报名体验
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		methods: {
			gonext(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang='scss'>
	#details{
		width: 375px;
		height: 115vh;
		overflow-x: hidden;
		box-sizing: border-box;
		padding: 0 10px;
		margin-top: 45px;
		>.title{
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
		.bottom{
			width: 375px;
			height: 40px;
			background: #fff;
			position: fixed;
			bottom: 0;
			display:flex;
			img{
				width: 15px;
				height: 15px;
			}
			>div{
				flex: 1;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				text-align: center;
				p{
					width: 115px;
				}
			}
			.btn1{
				line-height: 40px;
				color: #fff;
				background: rgb(0,162,211);
			}
		}
		.pic{
			width: 375px;
			height: 225px;
			margin-bottom: 10px;
			img{
				width: 375px;
			}
		}

		>p{
			margin: 10px 0;
		}

		.price{
			display: flex;
			p{
				color: red;
				font-size: 14px;
			}
			del{
				color:#999;
				margin-left: 20px;
			}
		}

		.pop{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20px;
		}

		.jianjie{
			margin-top: 30px;
			>.title{
				height: 45px;
				display: flex;
				align-items: center;
				img{
						width: 18px;
					}
				h3{
					margin-left: 20px;
					color: rgb(0,163,216);
				}
			}
			

			.ter{
				margin-top: 20px;
				.title{
					height: 45px;
					display: flex;
					align-items: center;
					img{
						width: 18px;
					}
					h3{
						margin-left: 20px;
						color: rgb(0,163,216);
					}
				}
				.conent{
					height: 75px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left{
						display: flex;
						height: 75px;
						align-items: center;
						img{
							height: 75px;
						}
						div{
							margin-left: 10px;
							p{
								margin-top: 5px;
							}
						}
					}
				}
			}
			.zhi{
				margin-top: 20px;
				.title{
					height: 45px;
					display: flex;
					align-items: center;
					img{
						width: 18px;
					}
					h3{
						margin-left: 20px;
						color: rgb(0,163,216);
					}
				}
				ul{
					color: #999;
					margin-top: 20px;
					li{
						margin-bottom: 10px;
					}
				}
			}
		}
	}
</style>
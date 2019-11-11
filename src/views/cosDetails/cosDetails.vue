<template>
	<div id="details">
		<div class="title">
			<span @click='gonext'>〈</span>
			精品课程
		</div>
		<div class="pic">
			<img src="/static/img/首页/1_22.png" alt="">
		</div>
		<h3>{{name}}</h3>
		<p>开课：随到随学</p>
		<div class="price">
			<p>{{exper.price}}</p>
			<del>原件：{{exper.oldprice}}</del>
		</div>
		<div class="pop">
			<img src="/static/img/首页/pop.png" alt="">
			<span>{{exper.people}}</span>
		</div>
		
		<div class="jianjie">
			<div class='title'>
				<img src="/static/img/首页/精品课程/课程详情/1_5_05.jpg" alt="">
				<h3>课程简介</h3>
			</div>
			<div class="font">
				<p>性价比高</p>
				<p>本课程到校</p>
				<p>可以先体验</p>
			</div>
			<p>课时：{{exper.time}}</p>
			<p>课表：暂无课表</p>
			<div class="list">
				<p>课程亮点</p>
				<ul>
					<li>{{name}}</li>
				</ul>
			</div>
			<div class="list">
				<p>包含课程</p>
				<ul>
					<li>{{name}}</li>
				</ul>
			</div>
			<div class="list">
				<p>适用对象</p>
				<ul>
					<li>4岁以上学员</li>
				</ul>
			</div>
			<div class="conent">
				<p class="title">教学目标</p>
				<div class="txt">
					"教学理念：蔚蓝云朵独特的教学理念，不仅仅是专业技巧的学习，更是一种良好品格的培养；教室里每位孩子都是家庭的全世界，精心为每位学员量身定制教学计划；先进、科学的教学内容，专业的师资力量，愉快的授课方式；大量的实践演出机会，保证学生的学习效果，全面培养孩子综合能力。声乐：一对一教学(45分钟)音准、节奏的练习，发声、吐字、咬字的练习，气息的练习，指导正确的发声位置和发声方法。吐字清晰、准确；领会歌曲的内涵，注重歌曲情感的表达，注重台风和仪态的训练，通过丰富的舞台锻炼，不断提高自信心和艺术表现力。招收对象：4岁以上学员均可学习
				</div>
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
					<span>></span>
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
			<div class='btn1' @click='gosing'>
				报名购买
			</div>
			<div class='btn2' @click='add'>
				预约试听
			</div>
			<mt-popup
			  v-model="popupVisible"
			  position="bottom">
			  <div class="box">
			  	<p>预约信息</p>
			  	<div class="inp">
			  		<input type="text" placeholder="请填写姓名" v-model.trim='user'>
			  		<input type="text" placeholder="请填写手机号" v-model.trim='pone'>
			  		<p class='btn' @click='go'>预约试听</p>
			  	</div>
			  </div>
			</mt-popup>
		</div>
	</div>
</template>
<script>
	import { MessageBox,Toast,Popup } from 'mint-ui';
	export default{
		mounted(){
			
		},
		data(){
			return{
				name: '',
				popupVisible: false,
				user: '',
				pone: '',
				exper:{}
			}
		},
		methods: {
			gonext(){
				this.$router.go(-1)
			},
			add(){
				this.popupVisible = true;
				
			},
			go(){
				if(this.user && this.pone){
					this.popupVisible = false;
					MessageBox('提示', '预约成功');
				}else{
					Toast({
					  message: '姓名或手机号有误',
					  duration: 1000
					});
				}
			},
			gosing(){
				this.$router.push({
					path: '/sing'
				})
			}
		},
		mounted(){
			this.name = this.$route.query.name;
			this.axios.post("http://192.168.43.209:8800/getcourse").then((res)=>{
				console.log(res.data.exper)
				for (let i = 0; i < res.data.exper.length; i++) {
					if (this.name==res.data.exper[i].title) {
						console.log(res.data.exper[i])
						this.exper=res.data.exper[i]
					}
					
				}
				
			})
		}
	}
</script>
<style lang='scss'>
	#details{
		width: 375px;
		height: 185vh;
		overflow-x: hidden;
		box-sizing: border-box;
		padding: 0 10px;
		margin-top: 45px;
		.box{
			width: 375px;
			box-sizing: border-box;
			padding: 10px;
			>p{
				padding: 0 20px;
				border-left: 2px solid rgb(0,163,218);
			}
			.inp{
				margin-top: 10px;
				input{
					width: 100%;
					height: 30px;
					border: none;
					margin: 10px 0;
				}
				.btn{
					width: 100%;
					height: 30px;
					color: #fff;
					background: rgb(0,163,218);
					text-align: center;
					line-height: 30px;
				}
			}
		}
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
					width: 87px;
				}
			}
			.btn1,.btn2{
				line-height: 40px;
				color: #fff;
			}
			.btn1{
				background: rgb(225,130,75);
			}
			.btn2{
				background: rgb(0,162,211);
			}
		}
		.pic{
			width: 375px;
			height: 215px;
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
			.font{
				display: flex;
				p{
					width: 70px;
					height: 20px;
					text-align: center;
					line-height: 20px;
					margin-right: 10px;
					border-radius: 5px;
					border: 1px solid rgb(0,163,216);
					color: rgb(0,163,216);
				}
			}
			
			>p{
				margin-top: 10px;
				color:#999;
				font-size: 13px;
			}

			.list{
				margin-top: 20px;
				font-size: 13px;
				ul{
					color: #999;
					margin-top: 5px;
				}
			}

			.conent{
				margin-top: 20px;
				font-size: 13px;
				.title{
					
				}
				.txt{
					color:#999;
					margin-top: 10px;
					line-height: 20px;
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
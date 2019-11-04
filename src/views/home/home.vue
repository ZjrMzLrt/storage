<template>
  <div id='index'>
  	<div class="title">
  		蔚蓝云朵艺术学校
  	</div>
    <div class="body">
    	<div class="banner">
	    	<mt-swipe :auto="4000">
			  <mt-swipe-item v-for='(item,index) in bannerList' :key='index'>
			  	<img :src="item.picUrl" alt="">
			  </mt-swipe-item>
			</mt-swipe>
	    </div>
	    <!-- 轮播图结束 -->
	    <div class="call">
	    	<div class="call_left">
	    		<p>蔚蓝云朵艺术学校（富田校区）</p>
	    		<p>郑州市管城回族区灵隐路1号映月社区B1层</p>
	    	</div>
	    	<div class="call_right">
	    		<div>
	    			<img src="/static/img/首页/1_03.png" alt="">
	    			<span>联系学校</span>
	    		</div>
	    		<div>
	    			<img src="/static/img/首页/1_06.png" alt="">
	    			<span>导航到校</span>
	    		</div>
	    	</div>
	    </div>
	   <!--  联系我们结束 -->
	   	<div class="icon">
	   		<ul>
	   			<li>
	   				<router-link tag='div' to='/course'>
	   					<img src="/static/img/首页/1_09.png" alt="">
	   					<p>精品课程</p>
	   				</router-link>
	   			</li>
	   			<li>
	   				<router-link tag='div' to='/days'>
	   					<img src="/static/img/首页/1_11.png" alt="">
	   					<p>培训课表</p>
	   				</router-link>
	   			</li>
	   			<li>
	   				<router-link tag='div' to='/teachers'>
	   					<img src="/static/img/首页/1_13.png" alt="">
	   					<p>授课老师</p>
	   				</router-link>
	   			</li>
	   			<li>
	   				<img src="/static/img/首页/1_15.png" alt="">
	   				<p>视频实录</p>
	   			</li>
	   		</ul>
	   	</div>
	   	<!-- icon图标结束 -->
	   	<div class="reser" @click='add'>
	   		<span>火爆预约中：蔚蓝云朵艺术；</span>
	   		<p>预约</p>
	   	</div>
	   	<!-- 预约结束 -->
	   	<div class="exper">
	   		<div class="top">
	   			<p>体验课</p>
	   			<span>更多></span>
	   		</div>
	   		<div class="resers" @click='godetails'>
	   			<div>
	   				<p>66元体验舞蹈，美术课程是一个...</p>
	   				<p>￥66.00</p>
	   			</div>
	   			<div>
	   				<p>45人以报名</p>
	   				<p class='btn'>报名体验</p>
	   			</div>
	   		</div>
	   	</div>
	   	<!-- 体验课结束 -->
	   	<div class="cour">
	   		<div class="top">
	   			<p>精品课程</p>
	   			<span @click='goExper'>更多></span>
	   		</div>
	   		<audition v-for='item,index in auditionList' :key='index' :name='item'></audition>
	   	</div>
	   	<!-- 精品课程结束 -->
	   	<div class="video">
	   		<div class="top">
	   			<p>视频实录</p>
	   			<span>更多></span>
	   		</div>
	   		<div class="conent">
	   			<img src="/static/img/首页/1_26.png" alt="">
	   			<p>省教育领导及市教育领导一行亲临华系指导工作</p>
	   		</div>
	   	</div>
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
</template>

<script>
import { Swipe, SwipeItem,Popup,Toast,MessageBox} from 'mint-ui';
import audition from '@/components/audition'
export default{
	data(){
		return {
			popupVisible: false,
			user: '',
			pone: '',
			auditionList: [
				'声乐',
				'钢琴',
				'舞蹈'
			],
			bannerList: [
			{
				picUrl: 'static/img/首页/1_26.png'
			},
			{
				picUrl: 'static/img/首页/1_26.png'
			},
			{
				picUrl: 'static/img/首页/1_26.png'
			},
			{
				picUrl: 'static/img/首页/1_26.png'
			},
			{
				picUrl: 'static/img/首页/1_26.png'
			}
		]
		}
	},
	methods: {
		goExper(){
			this.$router.push({
				path: '/course'
			})
		},
		godetails(){
			this.$router.push({
				path: '/cosDetails2'
			})
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
	},
	components: {
		audition
	}
}
</script>

<style lang='scss'>
#index{
	width: 100vw;
	height: 180vh;
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
	.body{
		box-sizing: border-box;
		padding: 0 5px;
		margin-top: 45px;
	}
	.title{
		width: 375px;
		height: 40px;
		line-height: 40px;
		font-size: 18px;
		text-align: center;
		background: #00a3da;
		color: #fff;
		position: fixed;
		top: 0;
		z-index: 100;
	}
	/* 轮播图 */
	.banner{
		height: 181px;
		img{
			width: 375px;
		}
	}
	/* 联系我们 */
	.call{
		display: flex;
		img{
			width: 20px;
		}
		.call_left{
			p:nth-child(1){
				font-size: 16px;
			}
			p{
				margin-top: 10px;
			}
		}
		.call_right{
			margin-left: 50px;
			div{
				display: flex;
				align-items: center;
				margin-top:5px;
			}
		}
	}
	/* icon图标 */
	.icon{
		margin-top: 20px;
		ul{
			display: flex;
			justify-content: space-around;
			li{
				text-align: center;
				p{
					margin-top: 5px;
				}
			}
			img{
				width: 40px;
			}
		}
	}
	/* 预约 */
	.reser{
		display: flex;
		height: 50px;
		border-radius: 5px;
		margin-top: 20px;
		align-items: center;
		background: rgb(242,111,91);
		color: #fff;
		span{
			margin-left: 20px;
		}
		p{
			width: 88px;
			height: 25px;
			color:#fff;
			text-align: center;
			line-height: 25px;
			margin-left: 50px;
			background: #fff;
			border-radius: 5px;
			color: rgb(242,111,91);
		}
	}
	/* 体验课 */
	.exper{
		margin-top: 20px;
		.top{
			display: flex;
			justify-content: space-between;
			font-size: 16px;
			p{
				border-left: 2px solid rgb(0,164,220);
				padding-left: 5px;
				font-weight: 600;
			}
		}
		.resers{
			height: 90px;
			background: rgb(146,144,256);
			box-sizing: border-box;
			padding: 20px 5px;
			color:#fff;
			margin-top: 10px;
			border-radius: 5px;
			div{
				display: flex;
				justify-content: space-between;
				margin-bottom: 10px;
				align-items: center;
				.btn{
					width: 90px;
					height: 30px;
					background: #fff;
					color: rgb(146,144,256);
					border-radius: 5px;
					text-align: center;
					line-height: 30px;
				}
			}
		}
	}
	/* 精品课程 */
	.cour{
		margin-top: 20px;
		.top{
			display: flex;
			justify-content: space-between;
			font-size: 16px;
			p{
				border-left: 2px solid rgb(0,164,220);
				padding-left: 5px;
				font-weight: 600;
			}
		}
	}
	/* 视频实录 */
	.video{
		margin-top: 20px;
		.top{
			display: flex;
			justify-content: space-between;
			font-size: 16px;
			p{
				border-left: 2px solid rgb(0,164,220);
				padding-left: 5px;
				font-weight: 600;
			}
		}
		.conent{
			margin-top: 10px;
			p{
				font-size: 14px;
				box-sizing: border-box;
				padding: 10px 20px;
			}
		}
		img{
			width: 100%;
		}
	}
}
</style>
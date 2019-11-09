<template>
	<div id="sing">
		<div class="title">
			<span @click='gonext'>〈</span>
			报名购买
		</div>
		<div class="name">
			<div class="top">
				66元体验舞蹈、美术课程一个月了......欢迎您的加入！
			</div>
			<div class="bottom">
				<div>
					<p>总计：</p>
					<span>￥66.00</span>
				</div>
			</div>
		</div>
		<div class="pop">
			<p>个人信息</p>
			<input type="text" placeholder="请填写姓名">
			<input type="text" placeholder="请填写手机号">
			<div>
				
				❕填写信息后支付，方便我们提供更深入的服务。
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods: {
			gonext(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang='scss'>
	#sing{
		box-sizing: border-box;
		// padding: 0 10px;
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
				left: 10px;
			}
		}
		.name{
			margin-top: 40px;
			.top{
				height: 70px;
				font-size: 17px;
				color: rgb(0,163,218);
				padding: 8px 10px;
				line-height: 30px;
				background: #fff;
				border-bottom: 1px solid #f1f1f1;
			}
			.bottom{
				padding: 20px 15px;
				background: #fff;
				display: flex;
				justify-content: flex-end;
				div{
					display: flex;
					font-size: 14px;
					span{
						color: red;
					}
				}
			}
		}
		.pop{
			font-size: 15px;
			background: #fff;
			padding: 10px;
			margin-top: 15px;
			p{
				padding: 10px 0;
			}
			input{
				width: 100%;
				height: 45px;
				border: none;
				margin-top: 10px;
				color: #999;
				background: rgb(244,244,244);
				box-sizing: border-box;
				padding: 5px 10px;
				font-size: 14px;
				outline: none;
			}
			div{
				margin-top: 10px;
				padding: 10px 0;
				font-size: 12px;
				color: #ccc;
			}
		}
	}
</style>
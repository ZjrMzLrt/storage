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
		padding: 0 10px;
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
		.name{
			margin-top: 45px;
			.top{
				height: 70px;
				font-size: 17px;
				color: rgb(0,163,218);
			}
			.bottom{
				display: flex;
				justify-content: flex-end;
				div{
					display: flex;
					font-size: 17px;
					span{
						color: red;
					}
				}
			}
		}
		.pop{
			font-size: 17px;
			input{
				width: 100%;
				height: 45px;
				border: none;
				margin-top: 10px;
				color: #999;
				background: rgb(244,244,244);
				border-radius: 5px;
				box-sizing: border-box;
				padding: 5px;
				font-size: 14px;
			}
		}
	}
</style>
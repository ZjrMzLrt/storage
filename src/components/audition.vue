<template>
	<div id="audition" @click='godetails'>
		<div class="left">
			<img src="/static/img/首页/1_22.png" alt="">
		</div>
		<div class="right">
			<p class='name'>{{name}}</p>
			<p>性价比高 | 本课程到校购买 |</p>
			<p>可以先体验</p>
			<div>
				<p style="color:#888;">1课时</p>
				<p class="btn">预约试听</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props: {
			name: {}
		},
		methods: {
			godetails(){
				this.$router.push({
					path: '/cosDetails',
					query: {
						name: this.name
					}
				})
			}
		}
	}
</script>
<style lang='scss'>
	#audition{
		display: flex;
		margin-top: 10px;
		background: #fff;
		padding: 10px 0 10px;
		border-radius:6px;
		overflow: hidden;
		.left{
			width: 130px;
			height: 100px;
			background: #fff;
			display: flex;
			align-items: center;
		}
		.right{
			flex: 1;
			box-sizing: border-box;
			padding: 0 10px;
			.name{
				// font-weight: 600;
				color:#000;
				font-size: 16px;
			}
			p{
				margin-bottom: 5px;
				color: #999;
				line-height: 20px;
			}
			div{
				display: flex;
				align-items: center;
				justify-content: space-between;
				// color: #000;
				.btn{ 
					width: 70px;
					height: 25px;
					text-align: center;
					line-height: 25px;
					background: rgb(0,163,218);
					color: #fff;
					border-radius: 5px;
				}
			}
		}
		img{
			width: 130px;
		}
	}
</style>
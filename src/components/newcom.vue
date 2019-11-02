<template>
	<div id="new-com">
        <mt-tab-container-item >
            <div class="news-search">
                <img src="../../static/img/新闻中心首页/search_03.jpg" alt="">
                <input type="text" name="" id="" placeholder="请输入关键词进行搜索">
            </div>
            <div class="wrapper" ref="wrapper">
                <div class="content">
                    <ul>
                        <li v-for="(item,index) in newsData" :key="index">
                            <img src="../../static/img/蔚蓝风采首页/3_14.jpg" alt="">
                            <div>
                            <p class="news-content-title">{{item.title}}</p>
                            <p class="news-content-con">{{item.con}}</p>
                            <p class="news-content-time">{{item.time}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </mt-tab-container-item>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
        name:'NewCom',
        mounted() {
            this.$nextTick(() => {
            //$refs绑定元素
            if(!this.scroll){
                this.scroll = new BScroll(this.$refs.wrapper, {
                //开启点击事件 默认为false
                click:true
            })
            // console.log(this.scroll)
            }else if(!this.$refs.wrapper){
                return
            }
            else{
                this.scroll.refresh()
            }
            })
        },
        props:{
            newsData:{
                type:Array
            }
        }
	}
</script>
<style lang='scss'>
.wrapper{
    // display: block;
    height: calc(100vh - 9vh - 334px);
    overflow: hidden;
    ul{
        li{
            height: 88px;
            width: 100%;
            padding: 20px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #f6f6f6;
            img{
            height: 88px;
            width: 100px;
            }
            div{
            width: 230px;
            height: 88px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .news-content-title{
                height: 15px;
                font-size: 15px;
                color: #6b6b6b;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
            .news-content-con{
                font-size: 13px;
                color: #cbcbcb;
                line-height: 20px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .news-content-time{
                color: #cbcbcb;
            }
            }
        }
    }
}

</style>

<template>
	<div id="style-com">
        <mt-tab-container-item >
            <div class="style-search">
                <img src="../../static/img/新闻中心首页/search_03.jpg" alt="">
                <input type="text" name="" id="" placeholder="请输入关键词进行搜索">
            </div>
            <div class="wrapper" ref="wrapper">
                <div class="content">
                    <ul>
                        <li v-for="(item,index) in styleData" :key="index" @click="go2ImgDetails(item.id)">
                            <img src="../../static/img/蔚蓝风采首页/3_07.jpg" alt="">
                            <p>{{item.title}}</p>
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
        name:'StyleCom',
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
            styleData:{
                type:Array
            }
        },
        methods:{
            go2ImgDetails(id){
                this.$router.push({
                    path:'/imgDetails',
                    query:{
                        id:id
                    }
                })
            }
        }
	}
</script>
<style lang='scss'>
#style-com{
    .wrapper{
        // display: block;
        height: calc(100vh - 9vh - 334px);
        overflow: hidden;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                height: 150px;
                width: 160px;
                margin-right: 17px;
                margin-bottom: 10px;
                img{
                    width: 160px;
                    height: 112px;
                }
                p{
                    line-height: 40px;
                    font-size: 14px;
                    color: #9a9a9a;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                }
            }
            li:nth-child(2n){
                margin: 0;
            }
        }
    }
}


</style>

<template>
    <div id="newsDetails">
        <div class="nDtitle">
            <p class="go2Up" @click="go2Up()">〈</p>
        </div>
        <all-header-img />
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <div class="newsDContent">
                    <div class="ndcTitle">
                        <p>撒旦飞无法沃尔夫的慰安妇挖而非娃娃儿范文芳我分为发文发文父安慰人大概发v水电费</p>
                        <p><span>2015-88-29 12:55:90</span><span>蔚蓝风采</span></p>
                    </div>
                    <div class="ndcCon">
                        
                        <img src="../../../static/img/新闻中心首页/新闻详情/2-1_09.jpg" alt="">
                        <img src="../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
            
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import AllHeaderImg from '@/components/allheaderimg'
export default {
    name:'imgDetails',
    components:{
        AllHeaderImg
    },
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
        console.log(this.$route.query.id)
    },
    methods: {
        go2Up() {
            this.$router.push({
                path:'/style'
            })
        }
    }
}
</script>
<style lang="scss">
#newsDetails{
    width: 100vw;
    .nDtitle {
        width: 100vw;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        color: #fff;
        background: #00A3DA;
        position: relative;
        .go2Up {
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            color: #fff;
            font-weight:bold;
            
        }
    }
    .wrapper{
        height: calc(100vh - 88px);
        overflow: hidden;
        .newsDContent{
            border-top: 1px solid #f6f6f6;
            .ndcTitle{
                width: 335px;
                margin: 25px auto 0;
                p:nth-child(1){
                    line-height: 30px;
                    font-size: 20px;
                }
                p:nth-child(2){
                    margin-bottom: 25px;
                    line-height: 20px;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span:nth-child(1){
                        color: #bebebe
                    }
                    span:nth-child(2){
                        color: #95aabc
                    }
                }
                
            }
            .ndcCon{
                width: 335px;
                margin: 0 auto;
                border-top: 1px solid #f6f6f6;
                padding-top: 10px;
                img{
                    width: 100%;
                }
                p{
                    width: 335px;
                    font-size: 15px;
                    line-height: 25px;
                }
            }
        }
    }
    
    

    
}
</style>
<template>
    <div class="newsDContent">
        <div class="ndcTitle">
            <p>{{details.title}}</p>
            <p><span>{{details.time}}</span><slot name="asasas"></slot></p>
        </div>
        <div class="ndcCon">
            <img :src="details.contant.masimg" alt="">
            <p v-for="(item,index) in details.contant.explain" :key="'1'+index">{{item}}</p>
            <img v-for="(item,curIndex) in details.contant.attimg" :key="curIndex" :src="item" alt="">
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import AllHeaderImg from '@/components/allheaderimg'
export default {
    name:'newsDetails',
    components:{
        AllHeaderImg
    },
    props:{
        pag:{
            type:Number
        }
    },
    data(){
        return {
            
            news:[
                {
                    type:'2',
                    id:1,
                    title:'喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿',
                    con:'喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈',
                    time:'2018-09-62 25:20:60',
                    contant:{
                        masimg:'../../../static/img/新闻中心首页/新闻详情/2-1_03.jpg',
                        explain:['喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈','学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿'],
                        attimg:['../../../static/img/新闻中心首页/新闻详情/2-1_06.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_07.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_09.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg']
                    }
                },
                {
                    type:'3',
                    id:2,
                    title:'教育部的最新通知：拆除所有学校',
                    con:'教育部的最新通知：拆除所有学校哈哈哈',
                    time:'2018-09-62 25:20:60',
                    contant:{
                        masimg:'../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg',
                        // explain:'教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校',
                        attimg:['../../../static/img/新闻中心首页/新闻详情/2-1_06.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_07.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_09.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg']
                    }
                }
            ],
            styles:[
                {
                    type:'2',
                    id:1,
                    title:'喜讯|教育部的最新通知：拆除所有xx',
                    con:'喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈',
                    time:'2018-09-62 25:20:60',
                    contant:{
                        masimg:'../../../static/img/新闻中心首页/新闻详情/2-1_03.jpg',
                        // explain:['喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈','学员孙汉卿哈喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿'],
                        attimg:['../../../static/img/新闻中心首页/新闻详情/2-1_06.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_07.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_09.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg']
                    }
                },
                {
                    type:'3',
                    id:2,
                    title:'喜讯|教育部的最新通知：拆除所有xx',
                    con:'教育部的最新通知：拆除所有学校哈哈哈',
                    time:'2018-09-62 25:20:60',
                    contant:{
                        masimg:'../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg',
                        // explain:'教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校',
                        attimg:['../../../static/img/新闻中心首页/新闻详情/2-1_06.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_07.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_09.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg']
                    }
                },
                {
                    type:'3',
                    id:3,
                    title:'喜讯|教育部的最新通知：拆除所有xx',
                    con:'教育部的最新通知：拆除所有学校哈哈哈',
                    time:'2018-09-62 25:20:60',
                    contant:{
                        masimg:'../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg',
                        // explain:'教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校',
                        attimg:['../../../static/img/新闻中心首页/新闻详情/2-1_06.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_07.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_09.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg']
                    }
                },
                {
                    type:'3',
                    id:4,
                    title:'喜讯|教育部的最新通知：拆除所有xx',
                    con:'教育部的最新通知：拆除所有学校哈哈哈',
                    time:'2018-09-62 25:20:60',
                    contant:{
                        masimg:'../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg',
                        // explain:'教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校教育部的最新通知：拆除所有学校',
                        attimg:['../../../static/img/新闻中心首页/新闻详情/2-1_06.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_07.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_09.jpg','../../../static/img/新闻中心首页/新闻详情/2-1_11.jpg']
                    }
                }
            ],
            details:{}
        }
    },
    created() {
        if (this.pag==2) {
            for (let i = 0; i < this.news.length; i++) {
                if (this.news[i].id==this.$route.query.id) {
                    this.details=this.news[i]
                }
            }
        }else if(this.pag==3){
            for (let i = 0; i < this.styles.length; i++) {
                if (this.styles[i].id==this.$route.query.id) {
                    this.details=this.styles[i]
                }
            }
        }
        console.log(this.pag)
        
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
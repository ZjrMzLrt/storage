<template>
  <div id="news">
    <div class="news-title">蔚蓝云朵艺术学校</div>
    <div class="news-con">
      <all-header-img />
      <div class="con-center">
        <img src="../../../static/img/新闻中心首页/2_02.jpg" alt="">
      </div>
      <div class="con-bottom">
        <div class="btn-box">
          <mt-navbar v-model="selected">
            <mt-tab-item v-for="(item,index) in newBtns" :key="index" :id="item.type">
              <p @click="newsBtn(item.type)">{{item.title}}</p>
            </mt-tab-item>
          </mt-navbar>
          <!-- tab-container -->
          <mt-tab-container v-model="selected">
            <new-com :newsData="aaa"/>
          </mt-tab-container>

        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import NewCom from '@/components/newcom'
import AllHeaderImg from '@/components/allheaderimg'
export default {
  name: 'news',
  components:{
    NewCom,
    AllHeaderImg
  },
  data(){
    return {
      newBtns:[
        {
          type:'1',
          title:'全部'
        },
        {
          type:'2',
          title:'新闻头条'
        },
        {
          type:'3',
          title:'新闻视野'
        },
        {
          type:'4',
          title:'校园月刊'
        }
      ],
      news:[
        {
          type:'2',
          id:1,
          title:'喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿',
          con:'喜讯|蔚蓝云朵艺术学校声乐学员孙汉卿哈',
          time:'2018-09-62 25:20:60'
        },
        {
          type:'3',
          id:2,
          title:'教育部的最新通知',
          con:'教育部的最新通知：免除所有学杂费',
          time:'2018-09-62 25:20:60'
        }
      ],
      aaa:[],
      selected:'1'

    }
  },
  mounted(){
    this.aaa=this.news
  },
  methods:{
    newsBtn:function(ind){
      console.log(ind)
      var arr=[]
      for (let i = 0; i < this.news.length; i++) {
        
        if (ind==this.news[i].type) {
          // console.log(this.news[i])
          arr.push(this.news[i])
        }else if(ind==1){
          console.log(this.news[i])
          arr.push(this.news[i])
        }
      }
      this.aaa=arr
    }
  }
}
</script>

<style lang='scss'>
#news{
  width: 100vw;
  height: calc(100vh - 9vh);
  .news-title{
    width: 100vw;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    background: #00A3DA;
  }
  .news-con{
    width: 100vw;
    // .con-top{
    //   width: 100vw;
    //   height: 48px;
    //   text-align: center;
    //   img{
    //     width: 131px;
    //     height: 33px;
    //     margin-top: 2px;
    //   }
    // }
    .con-center{
      width: 100vw;
      height: 140px;
      overflow: hidden;
      img{
        width: 100%;
        height: 141px;
      }
    }
    .con-bottom{
      width: 100vw;
      height: calc(100vh - 9vh - 228px);
      // background: #000;
      .btn-box{
        width: 100vw;
        height: 45px;
        background: #f5f5f5;
        .mint-navbar{
          width: 335px;
          height: 45px;
          margin: 0 auto;
          font-size: 15px;
          // display: flex;
          background: #f5f5f5;
          // justify-content: space-between;
          a{
            // width: auto;
            height: 45px;
            line-height: 45px;
            margin-right: 40px;
            color: #969696;
            // color: #33ba3c;
            box-sizing: border-box;
            text-decoration: none;
            flex: none;
            // border-bottom: 3px solid #33ba3c;
            .mint-tab-item-label{
              font-size: 15px;
            }
          }
          a:last-child{
            margin: 0;
          }
          .is-selected{
            color: #33ba3c;
            border-bottom: 3px solid #33ba3c;
          }
        }
        .news-search{
          width: 335px;
          height: 40px;
          margin: 14px auto;
          border: 1px solid #f7f7f7;
          display: flex;
          img{
            width: 40px;
            height: 40px;
          }
          input{
            width: 295px;
            height: 40px;
            border: 0;
            outline: none;
            font-size: 15px;
          }

        }
        .mint-tab-container{
          width: 335px;
          height: calc(100vh - 9vh - 274px);
          // background: #ccc;
          margin: 0 auto;
          // ul{
          //   li{
          //     height: 88px;
          //     width: 100%;
          //     padding: 20px 0;
          //     display: flex;
          //     align-items: center;
          //     justify-content: space-between;
          //     border-bottom: 1px solid #f6f6f6;
          //     img{
          //       height: 88px;
          //       width: 100px;
          //     }
          //     div{
          //       width: 230px;
          //       height: 88px;
          //       display: flex;
          //       flex-direction: column;
          //       justify-content: space-between;
          //       .news-content-title{
          //         height: 15px;
          //         font-size: 15px;
          //         color: #6b6b6b;
          //         display: -webkit-box;
          //         -webkit-box-orient: vertical;
          //         -webkit-line-clamp: 1;
          //         overflow: hidden;
          //       }
          //       .news-content-con{
          //         font-size: 13px;
          //         color: #cbcbcb;
          //         line-height: 20px;
          //         display: -webkit-box;
          //         -webkit-box-orient: vertical;
          //         -webkit-line-clamp: 2;
          //         overflow: hidden;
          //       }
          //       .news-content-time{
          //         color: #cbcbcb;
          //       }
          //     }
          //   }
          // }
        }
      }
    }
  }
}
</style>

<template>
  <div class="<!-- my -->">
    <p class="title">我的</p>
    <div class="imgName">
      <img src="../../../static/img/新闻中心首页/新闻详情/2-1_03.jpg" alt="" class="imgHead">
      <p class="name">张jr孟z李rt</p>
    </div>
    <div class="kb" @click="goCardBag()">
      <img src="../../../static/img/我的首页/4_05.jpg" alt="">
      <p>卡包</p>
    </div>
    <div class="centerBox">
      <div class="haveY">
        <div class="haveTwo">
          <img src="../../../static/img/我的首页/4_09.jpg" alt="">
          <p>蔚蓝云朵</p>
        </div>
        <img src="../../../static/img/我的首页/4_12.jpg" alt="" class="cBottom">
      </div>
      <div class="bottomY" @click="goForMain()">
        <img src="../../../static/img/我的首页/4_17.jpg" alt="" class="cRight">
        <p>联系我们</p>
      </div>
    </div>

    <div class="centerBox">
      <div class="haveY">
        <div class="haveTwo">
          <img src="../../../static/img/我的首页/4_09.jpg" alt="">
          <p>微培训</p>
        </div>
        <img src="../../../static/img/我的首页/4_12.jpg" alt="" class="cBottom">
      </div>
      <div class="bottomY" @click="goReservation()">
        <img src="../../../static/img/我的首页/4_17.jpg" alt="" class="cRight">
        <p>约课记录</p>
      </div>
      <div class="bottomY" @click="goAlreadyBuy()">
        <img src="../../../static/img/我的首页/4_17.jpg" alt="" class="cRight">
        <p>我的课程</p>
      </div>
    </div>
    <div class="setUp" @click="goSettingUp()">
      <img src="../../../static/img/我的首页/4_20.jpg" alt="">
      <p>设置</p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        
      }
    },
    methods:{
      goCardBag(){
        this.$router.push({
          path:'/cardBag'
        })
      },
      goForMain(){
        this.$router.push({
          path:'/forMain'
        })
      },
      goReservation(){
        this.$router.push({
          path:'/reservation'
        })
      },
      goAlreadyBuy(){
        this.$router.push({
          path:'/alreadyBuy'
        })
      },
      goSettingUp(){
        this.$router.push({
          path:'/settingUp'
        })
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .my {
    width: 100vw;
    height: calc(100vh - 9vh);
    background: #F5F5F5;

    .title {
      width: 100vw;
      height: 40px;
      line-height: 40px;
      background: #00A3DA;
      color: #fff;
      font-size: 18px;
      text-align: center;
    }

    .imgName {
      width: 100vw;
      height: 160px;
      background: url('../../../static/img/我的首页/4_02.jpg');
      background-size: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .imgHead {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      border: 1px solid #A1E9FF;
      display: inline-block;
      margin-top: 25px;
    }

    .name {
      font-size: 15px;
      color: #fff;
      margin-top: 15px;
    }

    .kb {
      width: 100vw;
      height: 68px;
      background: #fff;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    .kb>img {
      width: 22px;
      height: 22px;
    }

    .kb>p {
      font-size: 12px;
      color: #A2A2A2;
    }

    .centerBox {
      width: 100vw;
      background: #fff;
      margin-bottom: 10px;
    }

    .haveY {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #F5F5F5;
    }

    .haveTwo {
      width: 120px;
      height: 50px;
      font-size: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    .haveTwo>img {
      width: 15px;
      height: 15px;
    }

    .cBottom {
      width: 15px;
      height: 7px;
      display: inline-block;
      margin-right: 10px;
    }

    .bottomY {
      width: 100vw;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid #F5F5F5;
    }

    .cRight {
      width: 8px;
      height: 15px;
      margin-left: 30px;
    }

    .bottomY>p {
      font-size: 15px;
      margin-left: 10px;
    }
    .setUp{
      width: 100vw;
      height: 50px;
      background: #fff;
      font-size: 15px;
      display: flex;
      align-items: center;
    }
    .setUp>img{
      width: 15px;
      height: 15px;
      margin-left: 15px;
      margin-right: 15px;
    }
  }
</style>

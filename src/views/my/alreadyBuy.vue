<template>
  <div class="alreadyBuy">
    <div class="title">
      我的课程
      <p @click="goBack()" class="goBack">〈</p>
    </div>
    <div class="noneDiv" v-if="!showFlag">
      暂无没有购买数据
    </div>
    <div class="haveDiv" v-if="showFlag">
      <div class="everyBox">
        <div class="everyBoxLeft">
          <p class="everuBoxLeftTop">舞蹈</p>
          <p class="everuBoxLeftBottom">正式课</p>
        </div>
        <div class="everyBoxRight">
          <p class="everuBoxLeftTop" style="color: #49A3B3;font-weight: bold;">舞蹈</p>
          <p class="everuBoxLeftBottom">正式课</p>
        </div>
      </div>
      <p class="noneFont">没有更多了</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showFlag:true
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
  .alreadyBuy{
    background: #F5F5F5;
    width: 100vw;
    height: 100vh;
    
    .title {
      width: 375px;
      height: 40px;
      text-align: center;
      font-size: 18px;
      color: #fff;
      background: #00A3DA;
      line-height: 40px;
      position: relative;
    }
    
    .goBack {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 20px;
      position: absolute;
      top: 0px;
      left: 0px;
      font-weight: bold;
    }
    .noneDiv{
      width: 100%;
      height: calc(100vh - 40px);
      text-align: center;
      font-size: 18px;
      color: #ACACAC;
      line-height: calc(100vh - 500px);
    }
    .haveDiv{
      width: 100%;
      height: calc(100vh - 40px);
    }
    .noneFont{
      width: 100px;
      height: 37px;
      font-size: 13px;
      color: #959595;
      text-align: center;
      line-height: 37px;
      margin: 0 auto;
    }
    .everyBox{
      width: 347px;
      height: 88px;
      border: 1px solid #FAFAFA;
      border-radius: 4px;
      background: #fff;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .everyBoxLeft{
      width: 150px;
      height: 100%;
      line-height: 88px;
      margin-left: 15px;
    }
    .everyBoxRight{
       width: 150px;
      height: 100%;
      line-height: 88px;
      margin-right: 15px;
      text-align: right;
    }
    .everuBoxLeftTop{
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 15px;
      color: #626262;
    }
    .everuBoxLeftBottom{
       width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      color: #AAAAAA;
    }
  }
</style>

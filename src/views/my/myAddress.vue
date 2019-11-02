<template>
  <div class="myAddress">
    <div class="title">
      我的地址
      <p @click="goBack()" class="goBack">〈</p>
    </div>
    <div class="noneBox" v-if="!showFlag">
      <img src="../../../static/img/我的首页/我的地址页/4-5-1_03.jpg" alt="" class="ressImg">
      <p class="bigFont">没有收货地址</p>
      <p class="smallFont">点击添加按钮可添加</p>
    </div>
    <div class="haveBox" v-if="showFlag"></div>
    <div class="btnBox">
      <button>+新增地址</button>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        showFlag:false
      }
    },
    methods:{
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
  .myAddress{
    width: 100vw;
    background: #F5F5F5;
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
    .btnBox{
      width: 100%;
      height: 67px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      &>button{
        width: 335px;
        height: 47px;
        background: #1FAA1D;
        color: #fff;
        border: 1px solid #098F08;
        outline: none;
        font-size: 16px;
        border-radius: 4px;
      }
    }
    .noneBox{
      width: 100vw;
      height: calc(100vh - 40px - 67px);
      border-bottom: 1px solid #E9E9E9;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .haveBox{
      width: 100vw;
      height: calc(100vh - 40px - 67px);
      border-bottom: 1px solid #E9E9E9;
    }
    .ressImg{
      width: 78px;
      height: 100px;
      margin-top: 60px;
    }
    .bigFont{
      font-size: 16px;
      color: #808080;
      margin-top: 20px;
    }
    .smallFont{
      font-size: 13px;
      color: #808080;
      margin-top: 10px;
    }
  }
</style>

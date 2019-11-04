<template>
  <div class="cardBag">
    <div class="title">
      优惠券
      <p @click="goBack()" class="goBack">〈</p>
    </div>
    <div class="noneDiv" v-if="!showFlag">
      <img src="../../../static/img/我的首页/卡包/4-1_03.jpg" alt="" class="centerImg">
      <p class="noneFont">暂无优惠券</p>
    </div>
    <div class="haveDiv" v-if="showFlag">
      2
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showFlag:false
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
  .cardBag {
    width: 100vw;
    height: 100vh;
    background: #F5F5F5;
    .title {
      width: 100vw;
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
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .centerImg{
      width: 100px;
      height: 100px;
      margin-top: 90px;
    }
    .haveDiv{
      width: 100%;
      height: calc(100vh - 40px);
    }
    .noneFont{
      font-size: 22px;
      color: #BBB;
      margin-top: 50px;
    }
  }
</style>

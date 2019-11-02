<template>
  <div class="reservation">
    <div class="title">
      约课记录
      <p @click="goBack()" class="goBack">〈</p>
    </div>
    <div class="noneDiv" v-if="!showFlag">
      暂无没有预约数据
    </div>
    <div class="haveDiv" v-if="showFlag"></div>
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
  .reservation{
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
  }
</style>

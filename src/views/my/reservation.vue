<template>
  <div class="reservation">
    <div class="title">
      约课记录
      <p @click="goBack()" class="goBack">〈</p>
    </div>
    <div class="noneDiv" v-if="!showFlag">
      暂无没有预约数据
    </div>
    <div class="haveDiv" v-if="showFlag">
      <div class="everyOne">
        <div class="everyTop">
          <p class="everyTopLeft">
            2019-11-02 04:50
          </p>
          <p class="everyTopRight">
            试听课
          </p>
        </div>
        <div class="everyBottom">
          <p class="pino">钢琴</p>
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
    .haveDiv{
      width: 100%;
      height: calc(100vh - 40px);
    }
    .everyOne{
      width: 346px;
      height: 102px;
      background: #fff;
      margin: 0 auto;
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
    .everyTop{
      width: 100%;
      height: 45px;
      border-bottom: 1px dashed #ECECEC;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .everyTopLeft{
      width: 160px;
      height: 100%;
      line-height: 45px;
      color: #999;
      font-size: 14px;
      margin-left: 15px;
    }
    .everyTopRight{
      width: 50px;
      height: 100%;
      line-height: 45px;
      text-align: right;
      color: #5499AA;
      font-size: 15px;
      margin-right: 15px;
    }
    .pino{
      width: 100px;
      height: 54px;
      line-height: 54px;
      color: #5E5E5E;
      font-size: 15px;
      margin-left: 15px;
    }
  }
</style>

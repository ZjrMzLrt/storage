<template>
  <div class="forMain">
    <div class="title">
      联系我们
      <p @click="goBack()" class="goBack">〈</p>
    </div>
    <div class="bigBox">
      <img src="../../../static/img/我的首页/联系我们/3_03.jpg" alt="" class="logoImg">
      <img src="../../../static/img/我的首页/联系我们/4-2_02.jpg" alt="" class="formeImg">
      <p class="formeFont">蔚蓝云朵艺术学院</p>
      <img src="../../../static/img/我的首页/联系我们/4-2_05.jpg" alt="" class="placeImg">
      <ul class="list">
        <li>
          <p class="blcakcc">地址</p>
          <p class="cccFont">郑州市管城区中州大道航海路交叉口福田太阳城东方美食街西行50米映月路社区办公楼激荡史展览馆b1</p>
        </li>
        <li>
          <p class="blcakcc">电话</p>
          <p class="cccFont">400-800-9988</p>
        </li>
        <li>
          <p class="blcakcc">手机</p>
          <p class="cccFont">15042627415</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
  .forMain {
    width: 100vw;
    height: 100vh;

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

    .bigBox {
      width: 100vw;
    }

    .logoImg {
      width: 150px;
      height: 40px;
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
    }

    .formeImg {
      width: 100vw;
      height: 135px;
      display: block;
    }

    .formeFont {
      width: 317px;
      height: 66px;
      line-height: 66px;
      margin: 0 auto;
      color: #4C4C4C;
      font-size: 18px;
    }

    .placeImg {
      width: 317px;
      height: 208px;
      display: block;
      margin: 0 auto;
    }

    .list {
      width: 317px;
      min-height: 20px;
      margin: 0 auto;
      margin-top: 5px;
    }

    .list>li {
      width: 100%;
      padding: 15px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #F5F5F5;
    }
    .blcakcc{
      font-size: 15px;
      color: #0F0F0F;
    }
    .cccFont{
      width: 225px;
      font-size: 14px;
      color: #838383;
      line-height: 20px;
      text-align: right;
    }
  }
</style>

<template>
  <div class="addAddress">
    <div class="title">
      新增收货地址
      <p @click="goBack()" class="goBack">〈</p>
    </div>
    <div class="bigBox">
      <div class="iptTwo">
        <p class="ipt1">联系人</p>
        <input type="text" placeholder="姓名" class="ipt2">
      </div>
      <div class="twoInfo">
        <p :class="{'fontActive':greenFont=='先生'}" @click="chengColor(1)">先生</p>
        <p :class="{'fontActive':greenFont=='女士'}" @click="chengColor(2)">女士</p>
      </div>
      <div class="iptTwo">
        <p class="ipt1">电 话</p>
        <input type="text" placeholder="手机号码" class="ipt2">
      </div>
      <div class="iptTwo">
        <p class="ipt1">省 份</p>
        <input type="text" placeholder="北京" class="ipt2">
        <p class="choose">></p>
      </div>
      <div class="iptTwo">
        <p class="ipt1">城 市</p>
        <input type="text" placeholder="北京市" class="ipt2">
        <p class="choose">></p>
      </div>
      <div class="iptTwo">
        <p class="ipt1">区 域</p>
        <input type="text" placeholder="东城区" class="ipt2">
        <p class="choose">></p>
      </div>
      <div class="detailsRess">
        <p class="ipt1" style="margin-left: 10px;font-size: 14px;">详细地址</p>
        <div class="bigDiv">
          <input type="text" class="textArea" placeholder="详细地址">
          <div class="fiveP">
            <p class="fiveEver" :class="{'fontActive':fiveColor==item}" v-for="(item,index) in fiveList" :key="index" @click="fiveChangeColor(item)">{{item}}</p>
          </div>
        </div>
      </div>
      <div class="iptTwo">
        <p class="ipt1" style="margin-left: 10px;">邮政编码</p>
        <input type="text" placeholder="邮政编码" class="ipt2">
      </div>
    </div>
    <div class="btnDiv">
      <button class="out">取消</button>
      <button class="go">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        greenFont: '先生',
        fiveList:['家里','学校','公司','住处','其他'],
        fiveColor:'家里'
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      chengColor(a) {
        console.log(a);
        if (a == 1) {
          this.greenFont = '先生'
        } else {
          this.greenFont = "女士"
        }
        console.log(this.greenFont);
      },
      fiveChangeColor(item){
        this.fiveColor = item
        console.log(this.fiveColor);
      }
    }
  }
</script>

<style lang="scss">
  .addAddress {
    width: 100vw;
    background: #f5f5f5;
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

    .iptTwo {
      width: 100vw;
      height: 45px;
      font-size: 14px;
      background: #fff;
      border-bottom: 1px solid #F5F5F5;
    }

    .ipt1 {
      width: 70px;
      height: 45px;
      line-height: 45px;
      float: left;
      text-align: center;
      color: #636363;
    }

    .ipt2 {
      width: 270px;
      height: 45px;
      line-height: 45px;
      border: none;
      outline: none;
      float: left;
    }

    .twoInfo {
      width: 100%;
      height: 48px;
      background: #fff;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #F5F5F5;
    }

    .twoInfo>p:nth-child(1) {
      margin-left: 60px;
    }

    .twoInfo>p {
      width: 36px;
      height: 21px;
      font-size: 10px;
      text-align: center;
      line-height: 21px;
      float: left;
      border: 1px solid #898989;
      margin-left: 12px;
    }
    
    .choose{
      width: 26px;
      height: 100%;
      text-align: center;
      line-height: 48px;
      float: right;
      color: #848484;
    }
    .fontActive {
      border: 1px solid #34A536 !important;
      color: #34A536 !important;
    }
    .detailsRess{
       width: 100vw;
       height: 100px;
       background: #fff;
       border-bottom: 1px solid #F5F5F5;
    }
    .bigDiv{
      width: 270px;
      height: 100%;
      background: #fff;
      float: left;
      margin-left: 5px;
    }
    .textArea{
      width: 100%;
      height: 55px;
      border: none;
      border-bottom: 1px solid #f5f5f5;
      outline: none;
      font-size: 13px;
    }
    .fiveP{
      width: 100%;
      height: 38px;
      display: flex;
      align-items: center;
      background: #fff;
    }
    .fiveEver{
      width: 36px;
      height: 21px;
      font-size: 10px;
      text-align: center;
      line-height: 21px;
      float: left;
      border: 1px solid #898989;
      margin-left: 12px;
    }
    .btnDiv{
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .btnDiv>button{
      width: 165px;
      height: 40px;
      font-size: 13px;
      line-height: 40px;
      text-align: center;
      outline: none;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
    .out{
      background: #F16266;
    }
    .go{
      background: #009400;
    }
  }
</style>

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
    <div class="haveBox" v-if="showFlag">
      <div class="everyAddress" v-for="(item,index) in myAddressData" :key="index">
        <div class="everyAddressTop">
          <div class="eatTop">
            <p class="name">{{item.name}}</p>
            <!-- <p class="sex">{{item.sex}}</p> -->
            <p class="phone">{{item.pone}}</p>
            <p class="address">{{item.res}}</p>
          </div>
          <div class="eatBottom">{{item.ress1}}{{item.ress2}}{{item.ress3}}{{item.ress4}}</div>
        </div>
        <div class="everyAddressBottom">
          <div class="ofj">
            <input type="checkbox" class="trueFlag" v-model="item.status" />
            <p class="isOk">设为默认</p>
          </div>
          <div class="ofj">
            <p class="lh"><img src="../../../static/img/我的首页/我的地址页/pen.png" alt="" @click="changeFn(item)"> 编辑</p>
            <p class="lh"><img src="../../../static/img/我的首页/我的地址页/del.png" alt="" @click="delFn(item.id)"> 删除</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btnBox">
      <button @click="goAddAddress()">+新增地址</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showFlag: true,
        myAddressData: [{
          name: '张锦瑞',
          sex: '先生',
          phone: '15042627415',
          address: '公司',
          detailsAddress: '北京北京市地球村',
          status: true
        }]
      }
    },
    created() {
      setTimeout(() => {
        this.forDataList()
      }, 300)

    },
    mounted() {
      var url = localStorage.url
      console.log(url)
      // if (this.myAddressData[0]) {
      //   this.showFlag = true
      // } else {
      //   this.showFlag = false
      // }
    },
    methods: {
      forDataList() {
        this.axios.post(localStorage.url + 'getress').then((res) => {
          console.log(res.data.ress)
          this.myAddressData = res.data.ress
        })
      },
      goBack() {
        this.$router.push({
          path: '/settingUp'
        })
      },
      goAddAddress() {
        this.$router.push({
          path: '/addAddress'
        })
      },
      delFn(id) {
        this.axios.post(localStorage.url + 'removeress', {
          id: id
        }).then((req) => {
          console.log(req);
          this.forDataList()
        })
      },
      changeFn(item) {
        console.log(item);
        this.$router.push({
          path: '/addAddress',
          query: {
            item
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .myAddress {
    width: 100vw;
    background: #F5F5F5;
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

    .btnBox {
      width: 100%;
      height: 67px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;

      &>button {
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

    .noneBox {
      width: 100vw;
      height: calc(100vh - 40px - 67px);
      border-bottom: 1px solid #E9E9E9;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .haveBox {
      width: 100vw;
      height: calc(100vh - 40px - 67px);
      border-bottom: 1px solid #E9E9E9;
    }

    .ressImg {
      width: 78px;
      height: 100px;
      margin-top: 60px;
    }

    .bigFont {
      font-size: 16px;
      color: #808080;
      margin-top: 20px;
    }

    .smallFont {
      font-size: 13px;
      color: #808080;
      margin-top: 10px;
    }

    .everyAddress {
      width: 100vw;
      height: 114px;
      background: #fff;
      border-bottom: 1px solid #F8F8F8;
    }

    .everyAddressTop {
      width: 100vw;
      height: 68px;
      border-bottom: 1px solid #F8F8F8;
    }

    .eatTop {
      width: 300px;
      height: 38px;
      display: flex;
      align-items: center;
    }

    .eatBottom {
      width: 300px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      color: #969696;
      margin-left: 15px;
    }

    .eatTop>p {
      font-size: 15px;
      color: #4D4D4D;
      margin-left: 15px;
    }

    .address {
      width: 35px;
      height: 21px;
      text-align: center;
      line-height: 21px;
      font-size: 9px !important;
      border: 1px solid #489C4B;
      color: #489C4B !important;
    }

    .everyAddressBottom {
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .ofj {
      width: 140px;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .trueFlag {
      outline: none;
      border: none;
      background: #fff !important;
      width: 20px;
      height: 20px;
      border: 1px solid #D4D4D4;
      border-radius: 50%;
    }

    .isOk {
      font-size: 13px;
      color: #969696;
    }

    .lh {
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
</style>

<template>
  <div class="addAddress">
    <div class="title">
      新增收货地址
      <p @click="goBack()" class="goBack">〈</p>
    </div>
    <div class="bigBox">
      <div class="iptTwo">
        <p class="ipt1">联系人</p>
        <input type="text" placeholder="姓名" class="ipt2" v-model="nowName">
      </div>
      <div class="twoInfo">
        <p :class="{'fontActive':greenFont=='先生'}" @click="chengColor(1)">先生</p>
        <p :class="{'fontActive':greenFont=='女士'}" @click="chengColor(2)">女士</p>
      </div>
      <div class="iptTwo">
        <p class="ipt1">电 话</p>
        <input type="text" placeholder="手机号码" class="ipt2" v-model="telPhone">
      </div>
      <div class="iptTwo" @click="iptOne()">
        <p class="ipt1">省 份</p>
        <input type="text" placeholder="北京" class="ipt2" v-model="s1" disabled="disabled">
        <p class="choose">></p>
      </div>
      <div class="iptTwo" @click="iptTwo()">
        <p class="ipt1">城 市</p>
        <input type="text" placeholder="北京市" class="ipt2" v-model="s2" disabled="disabled">
        <p class="choose">></p>
      </div>
      <div class="iptTwo" @click="iptThree()">
        <p class="ipt1">区 域</p>
        <input type="text" placeholder="东城区" class="ipt2" v-model="s3" disabled="disabled">
        <p class="choose">></p>
      </div>
      <div class="detailsRess">
        <p class="ipt1" style="margin-left: 10px;font-size: 14px;">详细地址</p>
        <div class="bigDiv">
          <input type="text" class="textArea" placeholder="详细地址" v-model="detailsR">
          <div class="fiveP">
            <p class="fiveEver" :class="{'fontActive':fiveColor==item}" v-for="(item,index) in fiveList" :key="index"
              @click="fiveChangeColor(item)">{{item}}</p>
          </div>
        </div>
      </div>
      <div class="iptTwo">
        <p class="ipt1" style="margin-left: 10px;">邮政编码</p>
        <input type="text" placeholder="邮政编码" class="ipt2">
      </div>
    </div>
    <div class="btnDiv">
      <button class="out" @click="blackFn()">取消</button>
      <button class="go" @click="goFn()">确定</button>
    </div>
    <mt-popup v-model="iptOneTrue" position="bottom">
      <mt-picker style="width: 100vw;" :slots="shengData" @change="onValuesChange1"></mt-picker>
    </mt-popup>
    <mt-popup v-model="iptTwoTrue" position="bottom">
      <mt-picker style="width: 100vw;" :slots="shiData" @change="onValuesChange2"></mt-picker>
    </mt-popup>
    <mt-popup v-model="iptThreeTrue" position="bottom">
      <mt-picker style="width: 100vw;" :slots="xianData" @change="onValuesChange3"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
  import addressDataJson from "../../../static/data/address.js"
  export default {
    data() {
      return {
        greenFont: '先生',
        fiveList: ['家里', '学校', '公司', '住处', '其他'],
        fiveColor: '家里',
        addressData: [],
        iptOneTrue: false,
        iptTwoTrue: false,
        iptThreeTrue: false,
        oneIndex: 0,
        twoIndex: 0,
        detailsR: '',
        shengData: [{
          values: []
        }],
        shiData: [{
          values: []
        }],
        xianData: [{
          values: []
        }],
        s1: '北京',
        s2: '北京市',
        s3: '昌平区',
        sexNum: 0,
        nowName: '',
        telPhone: '',
        nowId: null
      }
    },
    methods: {
      goBack() {
        this.$router.push({
          path:'/myAddress'
        })
      },
      chengColor(a) {
        console.log(a);
        if (a == 1) {
          this.greenFont = '先生'
          this.sexNum = 0
        } else {
          this.greenFont = "女士"
          this.sexNum = 1
        }
        console.log(this.greenFont);
      },
      fiveChangeColor(item) {
        this.fiveColor = item
        console.log(this.fiveColor);
      },
      onValuesChange1(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.s1 = values
        this.shengData[0].values.forEach((item, index) => {
          if (values == item) {
            return this.oneIndex = index
          }
        })
        console.log("oneIndex", this.oneIndex);
        this.shiData[0].values = []
        this.addressData[this.oneIndex].city.forEach((item, index) => {
          this.shiData[0].values.push(item.name)
        })
        console.log(this.shiData);


      },
      onValuesChange2(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.s2 = values
        this.shiData[0].values.forEach((item, index) => {
          if (values == item) {
            return this.twoIndex = index
          }
        })
        console.log("twoIndex", this.twoIndex);
        this.xianData[0].values = []
        this.addressData[this.oneIndex].city[this.twoIndex].districtAndCounty.forEach((item, index) => {
          this.xianData[0].values.push(item)
        })


      },
      onValuesChange3(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.s3 = values /*  */
      },
      iptOne() {
        this.iptOneTrue = true
      },
      iptTwo() {
        this.iptTwoTrue = true
      },
      iptThree() {
        this.iptThreeTrue = true
      },
      blackFn() {
        this.$router.push({
          path: '/myAddress'
        })
      },
      goFn() {
        if (this.nowId == false) {
          this.axios.post(localStorage.url + 'address', {
            name: this.nowName,
            pone: this.telPhone,
            ress1: this.s1,
            ress2: this.s2,
            ress3: this.s3,
            ress4: this.detailsR,
            sex: this.sexNum,
            res: this.fiveColor
          }).then((req) => {
            console.log(req);
          })
        } else {
          this.axios.post(localStorage.url + 'setress', {
            id: this.nowId,
            name: this.nowName,
            pone: this.telPhone,
            ress1: this.s1,
            ress2: this.s2,
            ress3: this.s3,
            ress4: this.detailsR,
            sex: this.sexNum,
            res: this.fiveColor
          }).then((req) => {
            console.log(req);
          })
          
        }
        this.$router.push({
          path: '/myAddress'
        })
      }
    },
    created() {
      this.addressData = addressDataJson
      console.log("addressData", this.addressData);
      this.addressData.forEach((item, index) => {
        this.shengData[0].values.push(item.name)
      })
      console.log(this.shengData)
      console.log(this.$route.query.item);
      var item = this.$route.query.item
      if (item) {
        this.nowId = item.id
        this.nowName = item.name
        this.telPhone = item.pone
        this.s1 = item.ress1
        this.s2 = item.ress2
        this.s3 = item.ress3
        this.detailsR = item.ress4
        this.fiveColor = item.res
        this.sexNum = item.sex
        if (item.sex == 0) {
          this.greenFont = '先生'
        } else {
          this.greenFont = '女士'
        }
      } else {
        this.nowId = false
        return
      }
      console.log(this.nowId);
    }
  }
</script>

<style lang="scss">
  .addAddress {
    width: 100vw;
    background: #f5f5f5;
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
      background: #fff;
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

    .choose {
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

    .detailsRess {
      width: 100vw;
      height: 100px;
      background: #fff;
      border-bottom: 1px solid #F5F5F5;
    }

    .bigDiv {
      width: 270px;
      height: 100%;
      background: #fff;
      float: left;
      margin-left: 5px;
    }

    .textArea {
      width: 100%;
      height: 55px;
      border: none;
      border-bottom: 1px solid #f5f5f5;
      outline: none;
      font-size: 13px;
    }

    .fiveP {
      width: 100%;
      height: 38px;
      display: flex;
      align-items: center;
      background: #fff;
    }

    .fiveEver {
      width: 36px;
      height: 21px;
      font-size: 10px;
      text-align: center;
      line-height: 21px;
      float: left;
      border: 1px solid #898989;
      margin-left: 12px;
    }

    .btnDiv {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .btnDiv>button {
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

    .out {
      background: #F16266;
    }

    .go {
      background: #009400;
    }
  }
</style>

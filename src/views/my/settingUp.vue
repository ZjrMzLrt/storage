<template>
  <div class="settingUp">
    <div class="title">
      设置
      <p @click="goBack()" class="goBack">〈</p>
    </div>
    <div class="bigBox">
      <ul class="lsit">
      	<li v-for="(item,index) in btnList" :key="index" @click="gotoPage(item)">
          <img :src="item.src" alt="">
           <p>{{item.title}}</p>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        btnList:[
          {
            title:'收货地址',
            src:'../../../static/img/我的首页/设置页/4-5_03.jpg',
            path:1
          },{
            title:'授权设置',
            src:'../../../static/img/我的首页/设置页/4-5_06.jpg',
            path:2
          },{
            title:'清除缓存',
            src:'../../../static/img/我的首页/设置页/4-5_09.jpg',
            path:3
          },
          
        ]
      }
    },
    methods: {
      goBack() {
        this.$router.push({
          path:'/my'
        })
      },
      gotoPage(item){
        if(item.path == 1){
          this.$router.push({
            path:'/myAddress'
          })
        }else if(item.path == 2){
          alert('授权成功')
        }else if(item.path == 3){
          alert("清除缓存成功")
        }
      }
    }
  }
</script>

<style lang="scss">
  .settingUp{
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
    .bigBox{
      width: 100vw;
      .lsit{
        width: 100%;
        &>li{
          width: 100%;
          height: 50px;
          background: #fff;
          border-bottom: 1px solid #F5F5F5;
          display: flex;
          align-items: center;
          &>img{
            width: 16px;
            height: 16px;
            margin: 0px 12px;
          }
          &>p{
            font-size: 15px;
            color: #646464;
          }
        }
      }
    }
  }
</style>

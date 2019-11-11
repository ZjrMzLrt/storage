<template>
  <div id="teachers">
    <div class="title">
      <span @click='gonext'>〈</span>
      授课老师页
    </div>
    <zScroll class="sideBox">
      <ul>
        <li v-for='(item,index) in teaList' :key='index' @click='godetail(item)'>
          <div class="left">
            <img :src="item.img" alt="">
            <div>
              <p>{{item.name}}</p>
              <p>{{item.career}}</p>
            </div>
          </div>
          <span style="margin-right: 15px;color: #969696;">
            >
          </span>
        </li>
      </ul>
    </zScroll>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        teaList: []
      }
    },
    methods: {
      godetail(item) {
        this.$router.push({
          path: '/teaDetails',
          query: {
            data: JSON.stringify(item)
          }
        })
      },
      gonext() {
        this.$router.go(-1)
      }
    },
    mounted(){
      this.axios.post("http://192.168.43.209:8800/gettea").then((res)=>{
        console.log()
        this.teaList=res.data.ress

      })
    }
  }
</script>
<style lang='scss'>
  #teachers {
    background: #f5f5f5;
    overflow: hidden;

    .sideBox {
      width: 100vw;
      height: calc(100vh - 40px);
      overflow: hidden;
      margin-top: 40px;
    }

    .title {
      width: 375px;
      height: 40px;
      background: rgb(0, 162, 218);
      color: #fff;
      text-align: center;
      line-height: 40px;
      position: relative;
      font-size: 18px;
      position: fixed;
      top: 0;
      left: 0;

      span {
        position: absolute;
        left: 10px;
      }
    }

    ul {
      width: 350px;
      margin:  auto;
      font-size: 14px;

      li {
        display: flex;
        width: 350px;
        height: 90px;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        border-radius: 10px;
        margin-bottom: 10px;

        img {
          width: 55px;
          height: 55px;
          margin: 0 5px 0 15px;
          border-radius: 50%;
          overflow: hidden;
        }

        .left {
          display: flex;
          div {
            margin-left: 10px;

            p {
              margin-top: 10px;
              font-size: 13px;
            }
            p:nth-child(1){
              color: #777
            }
          }
        }
      }
    }
  }
</style>

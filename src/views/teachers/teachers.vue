<template>
  <div id="teachers">
    <div class="title">
      <span @click='gonext'>〈</span>
      授课老师页
    </div>
    <zScroll class="sideBox">
      <ul>
        <li v-for='item,index in teaList' :key='index' @click='godetail(item)'>
          <div class="left">
            <img :src="item.img" alt="">
            <div>
              <p>{{item.name}}</p>
              <p>{{item.tea}}</p>
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
        teaList: [{
          img: '/static/img/首页/授课老师页/1-3_03.jpg',
          name: '蔚蓝云朵艺术学校-胡苏',
          tea: '总校长',
          pic: "/static/img/首页/授课老师页/1.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '段新宇',
          tea: '民族舞讲师',
          pic: "/static/img/首页/授课老师页/2.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '樊鑫敏',
          tea: '声乐讲师',
          pic: "/static/img/首页/授课老师页/3.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '胡颖',
          tea: '古筝讲师',
          pic: "/static/img/首页/授课老师页/4.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '李龙粥',
          tea: '美术讲师',
          pic: "/static/img/首页/授课老师页/5.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '申慧莹',
          tea: '民族舞讲师',
          pic: "/static/img/首页/授课老师页/6.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '王禧歌',
          tea: '美术讲师',
          pic: "/static/img/首页/授课老师页/7.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '张志培',
          tea: '钢琴讲师',
          pic: "/static/img/首页/授课老师页/8.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '赵梓萌',
          tea: '声乐讲师',
          pic: "/static/img/首页/授课老师页/9.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '周梦露',
          tea: '舞蹈讲师',
          pic: "/static/img/首页/授课老师页/10.jpg"
        }, {
          img: '/static/img/tab_05_03.jpg',
          name: '朱鸿涛',
          tea: '吉他讲师',
          pic: "/static/img/首页/授课老师页/11.jpg"
        }]
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
          margin-left: 5px;
          /* margin-top: 15px; */
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

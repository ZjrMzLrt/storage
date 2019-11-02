<template>
	<div id="index">
    <router-view></router-view>
		<ul>
			<router-link v-for='item,index in routerList' :key='index' tag='li' :to='item.path'>
        <img :src="item.sele?item.src2:item.src" alt="" @click='tab(index)'>
        {{item.txt}}
      </router-link>
		</ul>
	</div>
</template>
<script>
	export default{
    mounted(){
      this.routerList[0].sele = true;
    },
    data(){
      return{
        routerList: [
          {
            path: '/home',
            txt: '蔚蓝云朵',
            sele: false,
            src: '/static/img/tab_03.jpg',
            src2: '/static/img/tab_03_03.jpg'
          },
          {
            path: '/news',
            txt: '新闻中心',
            sele: false,
            src: '/static/img/tab_05.jpg',
            src2: '/static/img/tab_05_03.jpg'
          },
          {
            path: '/style',
            txt: '蔚蓝风采',
            sele: false,
            src: '/static/img/tab_06.jpg',
            src2: '/static/img/tab_06_07.jpg'
          },
          {
            path: '/my',
            txt: '我的',
            sele: false,
            src: '/static/img/tab_07.jpg',
            src2: '/static/img/tab_07_05.jpg'
          }
        ]
      }
    },
    methods: {
      tab(index){
        for(let i = 0;i< this.routerList.length;i++){
          this.routerList[i].sele = false;
        }
        this.routerList[index].sele = true;
      }
    }
	}
</script>
<style lang='scss' scoped="">
	ul{
    display: flex;
    width: 100vw;
    height: 5vh;
    justify-content: space-around;
    position: fixed;
    bottom: 25px;
    li{
      text-align: center;
    }
	}
  img{
    width: 10vw;
    display: block;
  }
</style>

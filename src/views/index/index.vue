<template>
	<div id="index">
    <router-view></router-view>
		<ul class='tab'>
			<router-link v-for='item,index in routerList' :key='index' tag='li' :to='item.path'>
        <img :src="item.sele?item.src2:item.src" alt="" @click='tab(index)'>
        <p>{{item.txt}}</p>
      </router-link>
		</ul>
	</div>
</template>
<script>
	export default{
    mounted(){
      for(let i = 0;i<4;i++){
        this.getImg(i);
      }
    },
    data(){
      return{
        aIndex: 0,
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
        this.getImg(this.aIndex);
        this.aIndex = index;
        this.getImg(index)
      },
      getImg(index){
        setTimeout(() => {
          let liList = document.querySelectorAll('#index .tab li');
          if(liList[index].classList.contains('router-link-active')){
            this.routerList[index].sele = true;
            this.aIndex = index;
          }else{
            this.routerList[index].sele = false;
          }
        },100)
      }
    }
	}
</script>
<style lang='scss' scoped="">
	ul{
    display: flex;
    width: 100vw;
    height: 8vh;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    background: #fff;
    li{
      width: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
	}
  img{
    width: 10vw;
    height: 10vw;
    display: block;
  }
</style>
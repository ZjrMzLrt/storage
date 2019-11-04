<template>
    <div id="tasteOf">
        <all-title>
            <span slot="allTitle">体验课列表</span>
        </all-title>
        <div class="tasteOfBox">
            <taste-of-com />
            <p class="downBottom">没有更多了</p>
        </div>
    </div>
</template>

<script>
import AllTitle from '@/components/alltitle'
import TasteOfCom from '@/components/tasteofcom'
export default{
    name:'tasteOf',
    components:{
        AllTitle,
        TasteOfCom
    },
    methods:{
        go2Up(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
#tasteOf{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #f9f9f9;
    .tasteOfBox{
        width: 335px;
        margin: 0 auto;
        .downBottom{
            text-align: center;
            line-height: 40px;
            color: #afafaf;
        }
    }     
}
</style>

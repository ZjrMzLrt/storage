<template>
    <div id="audios">
        <all-title>
            <span slot="allTitle">视频实录列表</span>
        </all-title>
        <div class="tasteOfBox">
                <audios-com />
                <p class="downBottom">没有更多了</p>
        </div>
    </div>
</template>

<script>
import AllTitle from '@/components/alltitle'
import AudiosCom from '@/components/audioscom'
export default{
    name:'audios',
    components:{
        AllTitle,
        AudiosCom
    },
    methods:{
        go2Up(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
#audios{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #f5f5f5;
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

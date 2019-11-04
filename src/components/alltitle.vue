<template>
    <div id="title">
        <slot name="allTitle"></slot>
        <p class="go2Up" @click="go2Up()">〈</p>
    </div>
</template>

<script>
export default{
    name:'alltitle',
    methods:{
        go2Up(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
#title {
        width: 375px;
        height: 40px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        background: #00A3DA;
        line-height: 40px;
        position: relative;
        .go2Up {
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            color: #fff;
            font-weight:bold;
            
        }
    }
</style>

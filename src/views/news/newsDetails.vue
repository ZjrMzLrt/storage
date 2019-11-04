<template>
    <div id="newsDetails">
        <all-title></all-title>
        <all-header-img />
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <newstyledetails :pag='page'>
                    <span slot="asasas">蔚蓝云朵艺术学校</span>
                </newstyledetails>
            </div>
        </div>
            
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import AllTitle from '@/components/alltitle'
import AllHeaderImg from '@/components/allheaderimg'
import newstyledetails from '@/components/newstyledetails'
export default {
    name:'newsDetails',
    components:{
        AllTitle,
        AllHeaderImg,
        newstyledetails
    },
    data(){
        return {
            page:2
        }
    },
    created() {
        this.$nextTick(() => {
        //$refs绑定元素
            if(!this.scroll){
                this.scroll = new BScroll(this.$refs.wrapper, {
                //开启点击事件 默认为false
                click:true
            })
            // console.log(this.scroll)
            }else if(!this.$refs.wrapper){
                return
            }
            else{
                this.scroll.refresh()
            }
        })
    },
    methods: {
        go2Up() {
            this.$router.push({
                path:'/news'
            })
        }
    }
}
</script>
<style lang="scss">
#newsDetails{
    width: 100vw;
    .wrapper{
        height: calc(100vh - 88px);
        overflow: hidden;
    } 
}
</style>
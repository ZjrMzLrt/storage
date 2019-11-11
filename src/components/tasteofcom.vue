<template>
    <div>
        <ul id="tasteOfList">
            <li v-for="(item,index) in tasteData" :key="index" @click="godetails(item.id)">
                <div class="liD1">
                    <p class="ofhP">{{item.title}}</p>
                    <p class="taste-price">￥{{item.price}}</p>
                </div>
                <div>
                    <p class="taste-peo">{{item.people}}人已报名</p>
                    <p class="taste-btn">报名体验</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'TasteOfCom',
    data(){
        return {
            tasteData:[]
        }
    },
    methods:{
        godetails(id) {
            this.$router.push({
                path: '/cosDetails2',
                query:{
                    id
                }
            })
        }
    },
    mounted(){
		var url=localStorage.url
        this.axios.post(url+"getexper").then((res)=>{
            console.log(res.data.data)
            this.tasteData=res.data.data
        })
    }
}
</script>

<style lang="scss">
#tasteOfList{
    li{
        width: 335px;
        height: 105px;
        background: #a19cf8;
        border-radius: 5px;
        margin-top: 10px;
        color: #f2f2f2;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div{
            width: 300px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .ofhP{
                width: 200px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
            .taste-price{
                margin-right: 20px;
            }
            .taste-peo{
                margin-left: 15px;
            }
            .taste-btn{
                width: 96px;
                height: 35px;
                text-align: center;
                line-height: 35px;
                background: #fff;
                color: #a997e8;
                border-radius: 4px;
            }
        }
    }
}
</style>

<template>
    <div>
        <ul id="audioList">
            <li>
                <div>
                    <img src="../../static/img/首页/视频实录列表/1_26.png" alt="">
                </div>
                <p>人要是行 ，干一行行一行 ，一行行行行行。人要是不行，干一行不行一行，一行不行行行不行。</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'AudioCom'
}
</script>

<style lang="scss">
#audioList{
    li{
        width: 335px;
        padding-bottom: 10px;
        background: #fff;
        border-radius: 5px;
        margin-top: 10px;
        div{
           img{
                height: 175px;
                width: 335px;
                border-radius: 5px;
           }
        }
        p{
           color: #646464;
           font-size: 15px;
           line-height: 25px;
           padding: 0 10px;
        }
    }
}
</style>

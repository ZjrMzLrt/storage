<template>
    <div>
        <ul id="tasteOfList">
            <li>
                <div class="liD1">
                    <p class="ofhP">66元体验舞蹈课、美术课yesyesyesyes</p>
                    <p class="taste-price">￥66.00</p>
                </div>
                <div>
                    <p class="taste-peo">-5人已报名</p>
                    <p class="taste-btn">报名体验</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'TasteOfCom'
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

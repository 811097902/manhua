<template>
    <div class="banner-box">
        <div class="banner swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="https://easyread.nosdn.127.net/pic201810104382279ce1984a489897dfa70ce449e0.png?imageView=&thumbnail=750y421&quality=90" alt="">
                        <div class="banner-title">关于我转生变成史莱姆这档事</div>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="https://easyread.nosdn.127.net/pic2018052872f4ef4417f04d999bb96a9adb7a9ab5.jpg?imageView=&type=webp&thumbnail=750y421&quality=90" alt="">
                        <div class="banner-title">仙人在上魔在下</div>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="https://easyread.nosdn.127.net/pic20180528b1efd6a4dd954a8d92807c2b81925385.jpg?imageView=&type=webp&thumbnail=750y421&quality=90" alt="">
                        <div class="banner-title">皇上别碰我</div>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="https://easyread.nosdn.127.net/pic2018052243ce70107fe74c2f93249250fee1b243.jpg?imageView=&type=webp&thumbnail=750y421&quality=90" alt="">
                        <div class="banner-title">吃鸡游戏</div>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="https://easyread.nosdn.127.net/pic20180515d4c5eea8ab8e4630805a57f4b11dfc0f.jpg?imageView=&type=webp&thumbnail=750y421&quality=90" alt="">
                        <div class="banner-title">甜蜜禁忌</div>
                    </a>
                </li>
                <li class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="https://easyread.nosdn.127.net/pic201805042198f49980f94c36a4c12d2e3b14988b.jpg?imageView=&type=webp&thumbnail=750y421&quality=90" alt="">
                        <div class="banner-title">猎行者</div>
                    </a>
                </li>
            </ul>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination banner-btn"></div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        setTimeout(function(){
            var mySwiper1 = new Swiper('.banner', {
                autoplay: 3000,//可选选项，自动滑动
                loop:true,
                pagination : '.banner-btn',
                paginationClickable:true,
                autoplayDisableOnInteraction:false
            })
        },0)
    }
}
</script>

<style lang="stylus">
    .banner-box
        position relative
        overflow hidden
        width 100%
        margin auto
        height 2.1rem
        .banner
            height 100%
            .banner-btn
                position absolute
                width .72rem
                left 50%
                transform translate(-50%, 0%)
                .swiper-pagination-bullet 
                    width 0.06rem 
                    height 0.06rem 
                    margin 0 0.03rem 0 0.03rem
                    opacity 1
                    background rgba(0,0,0,.3)
                    &.swiper-pagination-bullet-active
                        background #ff5f65
            li
                a
                    display block
                    width 100%
                    height 100%
                    .banner-title
                        position absolute
                        left 0
                        bottom 0
                        width 100%
                        line-height .28rem
                        background rgba(0, 0, 0, .3)
                        font-size .14rem
                        color #fff
                        text-align left 
                        padding-left .15rem
                    img 
                        width 100%
                        height 100%
</style>

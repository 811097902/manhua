<template>
    <div class="nav-box">
        <div class="nav-item">
            <router-link to="/rank" tag="a" keep-alive>
                <i class="item-rank"></i>
                <span>排行</span>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/seek" tag="a" keep-alive>
                <i class="item-class"></i>
                <span>分类</span>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/rank" tag="a" keep-alive>
                <i class="item-update"></i>
                <span>更新</span>
            </router-link>
        </div>
        <div class="nav-item">
            <router-link to="/rank" tag="a" keep-alive>
                <i class="item-japan"></i>
                <span>日漫</span>
            </router-link>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    @import '~styles/_border.styl'
    .nav-box
        height 1.13rem
        background #fff
        border 0 0 1px 0,#ccc
        display flex
        .nav-item
            text-align center
            padding .16rem 0
            font-size .12rem
            flex 1
            a
                display flex
                flex-direction column
                .item-rank
                    display inline-block
                    width .54rem
                    height .56rem
                    background-size 1.54rem 1.34rem
                    background-position 0 -0.78rem
                    background-image url('/img/index3x.png')
                    margin 0 auto
                    margin-bottom 0.08rem
                .item-class
                    display inline-block
                    width .56rem
                    height .55rem
                    background-size 1.54rem 1.34rem
                    background-position -0.98rem 0
                    background-image url('/img/index3x.png')
                    margin 0 auto
                    margin-bottom 0.08rem
                .item-update
                    display inline-block
                    width .55rem
                    height .55rem
                    background-size 1.54rem 1.34rem
                    background-position -0.54rem -0.78rem
                    background-image url('/img/index3x.png')
                    margin 0 auto
                    margin-bottom 0.08rem
                .item-japan
                    display inline-block
                    width .57rem
                    height .50rem
                    background-size 1.54rem 1.34rem
                    background-position 0 -0.28rem
                    background-image url('/img/index3x.png')
                    margin 0 auto
                    margin-bottom 0.13rem

</style>

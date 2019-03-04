<template>
    <div class="rank-header">
        <a href="javascript:void(0)" class="navbar-back" @click="back"><i class="icon-back"></i></a>
        <h1>人气排行Top50</h1>
    </div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.go(-1)
        }   
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/_newborder.styl'
    .rank-header
        position fixed
        top 0
        left 0
        width 100%
        display flex
        align-items center
        border-bottom 1px solid #f4f4f4
        width 100%
        height .47rem
        background #fff
        z-index 111
        h1
            font-size .16rem
            flex 1
            color #f75f3a
            font-weight normal
            text-align left 
        .navbar-back
            position static
            padding .13rem .05rem .13rem .14rem
            .icon-back
                background-image url('/img/app3x.png')
                background-size 1.52rem 1.47rem
                background-position -0.75rem -0.96rem
                width .24rem
                height .24rem
                display inline-block
                vertical-align middle
</style>

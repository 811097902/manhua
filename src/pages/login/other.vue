<template>
    <div class="foot-box">
        <div class="login-other">
            <div class="u-line"></div>
            <div class="u-line-text">使用以下账号登录</div>
        </div>
        <div class="login-methods">
            <a href="javascript:void(0)" class="login-em">
                <span></span>
                <div class="methods-text">邮箱</div>
            </a>
            <a href="javascript:void(0)" class="login-qq">
                <span></span>
                <div class="methods-text">QQ</div>
            </a>
            <a href="javascript:void(0)" class="login-wb">
                <span></span>
                <div class="methods-text">微博</div>
            </a>
        </div>
        <div class="login-agree">
            <input id="declaration" class="u-checkbox u-ot" checked="true" type="checkbox">
            我同意
            <a href="javascript:void(0)">“服务条款”</a>
            和
            <a href="javascript:void(0)">“隐私策略”</a>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    @import '~styles/_newborder.styl'
    .foot-box
        margin-top .8rem
        .login-other
            width 2.4rem
            position relative
            margin 0 auto
            .u-line
                width 100%
                border-top 1px solid #e2e2e2
            .u-line-text
                font-size .12rem
                color #afafb0
                position absolute
                top -0.08rem
                left 50%
                background #ffffff
                padding 0 0.02rem
                transform translateX(-50%)
        .login-methods
            width 2.4rem
            margin 0 auto
            display flex
            justify-content space-around
            a
                display inline-block
                margin 0.22rem 0 0
                .methods-text
                        font-size .12rem
                        color rgba(55, 59, 68, .6)
                        margin-top 0.05rem
                &.login-em
                    span
                        display flex
                        justify-content column
                        background-image url('/img/sns.png')
                        background-size 1.32rem 0.88rem
                        background-position -0.88rem 0
                        width .44rem
                        height .44rem
                &.login-qq
                    span 
                        display flex
                        justify-content column
                        background-image url('/img/sns.png')
                        background-size 1.32rem 0.88rem
                        background-position 0 -0.44rem
                        width .44rem
                        height .44rem
                &.login-wb
                    span
                        display flex
                        justify-content column
                        background-image url('/img/sns.png')
                        background-size 1.32rem 0.88rem
                        background-position -0.44rem 0
                        width .44rem
                        height .44rem
        .login-agree
            text-align center
            line-height .12rem
            font-size .12rem
            margin .2rem 0
            color #aeafb0
            vertical-align middle
            .u-checkbox
                vertical-align -0.03rem       
</style>

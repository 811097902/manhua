<template>
    <div class="form-box">
        <div class="login-area">
            <form action="" class="login-classic">
                <div class="control-wrap">
                    <i class="icon sprite-reg-phone"></i>
                    <input type="text" placeholder="手机号" class="phone-input" id="username" name="username">
                </div>
                <div class="control-wrap">
                    <i class="icon sprite-reg-lock"></i>
                    <input type="password" id="password" name="password" class="password-input" placeholder="密码">
                </div>
                <div class="forget">
                    <a href="javascript:void(0)" class="forget-password">忘记密码？</a>
                </div>
                <div class="login-btn">
                    <button>登录</button>
                </div>
                <div class="phone-reg">
                    <router-link to="/register" tag='a' keep-alive>
                        手机号快速注册
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    @import '~styles/_newborder.styl'
    .form-box
        width 2.7rem
        min-height 2.27rem
        margin 0 auto
        margin-top .68rem
        .login-area
            width 2.7rem
            height 2.27rem
            .login-classic
                display block
                margin-left .15rem
                margin-right .15rem
                position relative
                .control-wrap
                    margin-bottom .1rem
                    width 2.4rem
                    height .4rem
                    position relative
                    .icon
                        position absolute
                        left 0.06rem
                        top 25%
                        display inline-block
                        vertical-align middle
                        z-index 100
                        &.sprite-reg-phone
                            background-image url(/img/reg2x.png)
                            background-position -0.24rem 0
                            background-size 0.65rem 0.46rem
                            width .19rem
                            height .22rem
                        &.sprite-reg-lock
                            background-image url(/img/reg2x.png)
                            background-position 0 0
                            background-size 0.65rem 0.46rem
                            width .24rem
                            height .24rem
                    .phone-input
                        width 100%
                        box-sizing border-box
                        border-radius 0.03rem
                        padding .07rem
                        font-size .14rem
                        line-height .24rem
                        border 1px solid #ccc
                        padding-left .3rem
                        position absolute
                        top 0 
                        left 0
                    .password-input
                        width 100%
                        box-sizing border-box
                        border-radius 0.03rem
                        padding .07rem
                        font-size .14rem
                        line-height .24rem
                        padding-left .3rem
                        border 1px solid #ccc
                        position absolute
                        top 0 
                        left 0
                .forget
                    width 2.4rem
                    height .2rem
                    .forget-password       
                        font-size .14rem
                        float right
                .login-btn
                    width 2.4rem
                    height .4rem
                    margin-top .25rem
                    display flex
                    button 
                        width 100%
                        height 100%
                        background #ff5f65
                        letter-spacing 0.08rem
                        border 0
                        color #fff
                        font-size 0.16rem
                        border-radius 0.03rem
                        text-align center
                        font-family "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif
                .phone-reg
                    margin .16rem 0
                    font-size .14rem
                    text-align center
</style>

<template>
    <div class="login-header">
        <h1 class="navbar-heading" >登录网易漫画</h1>
        <a href="javascript:void(0)" class="navbar-back navbar-back--text js-navback" @click="back">返回</a>
    </div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push({path:'/home'})
        }   
    }
}
</script>

<style lang="stylus" scoped>
    .login-header
        height .5rem
        .navbar-heading
            text-align center
            font-size .2rem
            line-height .5rem
            font-weight normal
        .navbar-back--text
            font-size .14rem
            color #373b44
            line-height .16rem
            padding .18rem .16rem
            &.navbar-back
                position absolute
                left 0
                top 0
</style>

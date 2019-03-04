<template>
    <div class="login-box">
        <Header></Header>
        <Form></Form>
        <Other></Other>
    </div>
</template>

<script>
import Header from './Header'
import Form from './form'
import Other from './other'
export default {
    components:{
        Header,Form,Other
    }
}
</script>

<style lang="stylus" scoped>
    .login-box
        font-family "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif
        color #333
</style>

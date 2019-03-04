<template>
    <div class="search-box">
        <Header></Header>
        <Wrap></Wrap>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from './Header'
    import Wrap from './Wrap'
    import Footer from './Footer'
export default {
    components:{
        Header,Wrap,Footer
    }
}
</script>
<style lang="stylus" scoped>
    .search-box
        font-family "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif
</style>

<template>
    <div class="home-box">
        <Header></Header>
        <Banner></Banner>
        <Nav></Nav>
        <List></List>
        <Footer></Footer>
    </div>
</template>


<script>
import Header from './home/Header'
import Nav from './home/Nav'
import List from './home/List'
import Banner from './home/Banner'
import Footer from './home/Footer'

export default {
    components:{
         Header,Nav,List,Banner,Footer
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/_bases.styl'
    .home-box
        display flex
        background $bg-color
        flex-direction column
</style>


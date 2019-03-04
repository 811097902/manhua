<template>
    <div class="rank-box">
        <Header></Header>
        <Nav></Nav>
        <Top></Top>
        <Foot></Foot>
    </div>
</template>

<script>
import Header from './Header'
import Nav from './Nav'
import Top from './Top'
import Foot from './Footer'

export default {
    components:{
        Header,Nav,Top,Foot
    }
}
</script>

<style lang="stylus" scoped>

</style>

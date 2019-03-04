<template>
    <div class="register-box">
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>

import Nav from './nav'
import First from './first'

export default {
    components:{
        Nav,First
    }
}
</script>

<style lang="stylus" scoped>
    .register-box 
        height: 100%;
        color: rgb(55, 59, 68);
        background: #ffffff
</style>


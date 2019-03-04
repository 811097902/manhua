<template>
    <div class="nav-bar">
        <h1 class="navbar-heading">注册网易漫画</h1>
        <a href="javascript:void(0)" class="navbar-back" @click="back">返回</a>
    </div>
</template>
<script>
export default {
    methods: {
        back() {
            this.flag=true
            this.$router.push({path:'/login'})
        }
    }
}
</script>
<style lang="stylus" scoped>
    .nav-bar 
        position: relative
        .navbar-heading 
            text-align: center;
            font-weight: normal;
            line-height: 0.5rem;
            font-size: 0.2rem;
        .navbar-back 
            font-size: 0.14rem;
            color: #373b44;
            line-height: 0.16rem;
            padding: 0.18rem 0.16rem;
            position: absolute;
            top: 0;
            left: 0;
            
        
</style>

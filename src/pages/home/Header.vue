<template>
    <div class="header-box">
        <div class="header-container">
            <a href="#" class="header-logo"><i></i></a>
            <router-link to="/login" class="header-reg" tag="a" keep-alive><i v-if='flag'></i></router-link>
            <router-link to="/seek" class="header-search" tag="a" keep-alive><i></i></router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag:true
        }
    },
    mounted() {
        if(sessionStorage.getItem('msg')){
            this.flag=false
        }else{
            this.flag=true
        }
    }
}
</script>
<style lang="stylus" scoped>
    .header-box
        height .54rem
        background #fff
        display flex
        justify-content space-between
        align-items center
        padding .13rem .13rem
        box-sizing border-box
        .header-container
            height .28rem
            display flex
            .header-search
                display block
                margin-left .32rem
                i 
                    display block
                    width .25rem
                    height .25rem
                    background-size 1.52rem 1.47rem
                    background-image url(/img/app3x.png)
                    background-position -0.26rem -0.96rem
            .header-reg
                display block
                i 
                    display block
                    width .26rem
                    height .26rem
                    background-size 1.52rem 1.47rem
                    background-image url(/img/app3x.png)
                    background-position -1.02rem -0.24rem
            .header-logo
                display block
                width 2.66rem
                i
                    display block
                    width .98rem
                    height .28rem
                    background-image url(/img/index3x.png)
                    background-size 1.54rem 1.34rem
            
                
</style>

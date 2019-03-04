<template>
    <div>
        <div class="top-text">
            <i class="sprite-font-top50"></i>
        </div>
        <div class="top-data" v-for="res in msg" :key="res.id">
            <a href="" class="book-flex">
                <div class="book-img">
                    <a href="" :style="{background:'url('+res.img+') 0px 0px / cover no-repeat transparent'}"></a>
                    <div class="ranking">
                        <img src="@/assets/img/rank.png" alt="">
                        <h1>{{res.id}}</h1>
                    </div>
                </div>
                <div class="book-info">
                    <h1 class="book-title u-ellipsis" id="booktitle1">
                        {{res.name}}
                    </h1>
                    <h2 class="u-ellipsis"><i class="u-repbottom"></i> {{res.author}}</h2>
                    <h2 class="u-ellipsis progress"><i class="rebottom"></i> {{res.update}}</h2>
                    <h2 class="u-ellipsis"><i class="rebottom-fire"></i> {{res.num}}</h2>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    created() {
        fetch('./data/top.json')
        .then(res=>res.json())
        .then(res=>{
            this.msg=res
        })
        .catch(err=>console.log(err))
    }
}
</script>

<style lang="stylus" scoped>
    .top-text
        margin .2rem .15rem 0 .15rem
        color #ff5f65
        font-size .15rem
        font-weight bold
        text-align left 
        .sprite-font-top50
            background-image url('/img/font3x.png')
            background-size 1.4rem .53rem
            background-position 0 -0.17rem
            width 1.09rem
            height .19rem
            display inline-block
    .top-data
        margin-top .15rem
        .book-flex
            display flex
            margin 0 .16rem .1rem .16rem
            color #333
            .book-img
                height 100%
                position relative
                .ranking
                    position absolute
                    top 0 
                    left 0
                    width .21rem
                    height .24rem
                    img 
                        width 100%
                        height 100%
                    h1
                        position absolute
                        color #ffffff
                        font-size .09rem
                        text-align center
                        width 100%
                        height 100%
                        line-height .24rem
                        top 0
                        left 0
                a
                    padding-top 139.5%
                    width .86rem
                    border-radius 0.02rem
                    display block
                    background url('https://easyread.nosdn.127.net/pic2017113015634d31d42442c281512998d24472ec.jpg?imageView=&type=webp&thumbnail=172y239&quality=90') 0px 0px / cover no-repeat transparent
            .book-info
                margin-left .12rem
                flex 1
                text-align left 
                .u-ellipsis
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                .book-title
                    font-size .16rem
                    font-weight bold
                    padding-bottom .08rem
                    color #333
                    width 95%
                h2
                    font-size .12rem
                    font-weight normal
                    margin-bottom .04rem
                    color #999
                    .u-repbottom
                        width .12rem
                        height .12rem
                        background url('/img/manhua.png') -1rem 0
                        background-size 2.75rem auto
                        display inline-block
                        padding-bottom 0.02rem
                        vertical-align middle
                    .rebottom
                        width .12rem
                        height .12rem
                        background url('/img/manhua.png') -1.5rem 0
                        background-size 2.75rem auto
                        display inline-block
                        padding-bottom 0.05rem
                        margin-top 0.04rem
                        vertical-align middle
                    .rebottom-fire
                        width .12rem
                        height .12rem
                        background url('/img/manhua.png') -1.75rem 0
                        background-size 2.75rem auto
                        display inline-block
                        padding-bottom 0.06rem
                        vertical-align middle

                


</style>

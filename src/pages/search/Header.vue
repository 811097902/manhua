<template>
    <div class="Header-box">
        <div class="search-block">
            <a href="javascript:void(0)" class="header-navback">
                <i class="sprite-app-back-white" style="display: block" @click="back"></i>
            </a>
            <div class="search-input-block">
                <div class="search-input">
                    <input @focus="onFocus" @blur="onBlur" class="js-input" v-model="key" type="text" placeholder="搜索漫画名或作者" value="">
                    <span class="btn-clear">
                        <i class="icon-close" @click="clear" v-show="key==''?false:true"></i>
                    </span>
                </div>
            </div>
            <a href="javascript:void(0)" class="btn-search">
                <i class="sprite-app-search-white" style="display: block"></i>
            </a>
        </div>
        <div class="js-mask" v-show="flag"></div>
        <div class="search-history" v-show="key==''?false:true">
            <div class="search-list" >
                <ul>
                    <li class="search-title" v-show="keyWordData.length==0?false:true">
                        <a class="f-pr" href="">包含“<strong>{{key}}</strong>”的漫画</a>
                        <div class="line"></div>
                    </li>
                    <li v-for="value in keyWordData" :key="value.bookId">
                        <a class="f-pr" v-html="value.title" href="">
                        </a>
                        <div class="line"></div>
                    </li>
                    <li class="search-title" v-show="authorData.length==0?false:true">
                        <a class="f-pr" href="">包含“<strong>{{key}}</strong>”的作者</a>
                        <div class="line"></div>
                    </li>
                    <li v-for="item in authorData" :key="item.bookId">
                        <a class="f-pr" v-html="item.name" href=""></a>
                        <div class="line"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import http from "utils/http"
export default {
    data() {
        return {
            key:'',
            keyWordData:[],
            flag:false,
            authorData:[]
        }
    },
    methods: {
        back(){
            this.$router.go(-1)
        },
        clear(){
            this.key=''
        },
        onFocus(){
            this.flag=true
        },
        onBlur(){
            this.flag=false
        }
    },
    watch: {
        async key(){
           let space=/^\s+$/g
           if(this.key!==''&&!space.test(this.key)){
               await http({
                   method:'get',
                   url:'search/book/key/hints.json?key='+this.key
               }).then(res=>{
                    this.keyWordData=res.books.data
                    this.authorData=res.authors.data
               })
           }
       }
   }    
}
</script>


<style lang="stylus" scoped>
    @import '~styles/_newborder.styl'
    .Header-box
        width 100%
        height .5rem
        .js-mask
            position fixed
            z-index 100
            top 0
            left 0
            right 0
            bottom 0
            background rgba(0,0,0,.5)
        .search-history
            position relative
            .search-list
                position absolute
                left 0
                right 0
                background #fff
                z-index 111
                li
                    width 100%
                    height .56rem
                    background #ffffff
                    position relative
                    &.search-title
                        a
                            color #999
                    a
                        display block
                        font-size .16rem
                        padding .17rem .16rem .17rem .42rem
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
                        text-align left
                        strong 
                            color #ff5f65
                            font-weight normal
                li
                    .line
                        display block
                        position absolute
                        bottom 0
                        height 1px
                        width 94%
                        background #ededed
                        margin-left .1rem
        .search-block
            width 100%
            height 100%
            background #ff5f65
            padding .1rem 0
            display flex
            flex-direction row
            box-sizing border-box
            position relative
            z-index 101
            .header-navback
                display inline-block
                margin-left .06rem
                padding 0.03rem 0.08rem
                i 
                    background-image url('/img/app3x.png')
                    background-size 1.52rem 1.47rem
                    background-position -1.28rem 0
                    width .24rem
                    height .24rem
            .btn-search
                display inline-block
                margin-right .06rem
                padding 0.03rem 0.08rem 0.03rem 0.08rem
                i 
                    background-image url('/img/app3x.png')
                    background-size 1.52rem 1.47rem
                    background-position -1.28rem -0.94rem
                    width .23rem
                    height .23rem
            .search-input-block
                flex 1
                position relative
                
                .search-input
                    width 95%
                    height .3rem
                    display flex
                    margin 0 auto
                    .js-input
                        box-sizing border-box
                        height .3rem
                        padding 0.09rem .3rem 0.08rem .2rem
                        width 100%
                        border-radius .2rem
                        border none
                        outline none 
                        font-size 0.13rem
                    .btn-clear
                        position absolute
                        right .1rem
                        top 0
                        bottom 0
                        padding .11rem .11rem
                        i 
                            display block
                            width 0.08rem
                            height 0.08rem
                            background-position -0.25rem -1rem
                            background-image url('/img/manhua.png')
                            background-size 2.75rem auto
</style>
<style lang="stylus">
    .search-list
        strong 
            color red
            font-weight normal
</style>

<template>
    <div class="list-box">
        <div class="list-box-header">
            <img src="img/recommend.png" alt="">
        </div>
        <div class="list-container">
            <div class="recommends">
                <a href="javascript:void(0)" class="recommends-item"
                    v-for="cartoon in result" :key="cartoon.id"
                >
                    <div class="cover">
                        <div class="recommends-img" :style="{background:'url('+cartoon.img+') 0px 0px / cover no-repeat transparent'}"
                            v-lazy='cartoon'
                        ></div>
                    </div>
                    <div class="title f-toe">{{cartoon.title}}</div>
                    <div class="recommends-item--footer">
                        <div class="text f-toe">{{cartoon.sTitle}}</div>
                        <div class="actions">
                            <span class="action-item">
                                <i class="sprite-app-fire icon"></i>{{cartoon.fire}}
                            </span>
                            <span class="action-item" style="margin-left:0.1rem">
                                <i class="sprite-app-comment icon"></i>{{cartoon.comment}}
                            </span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>

<script>
import {Lazyload} from 'mint-ui'

export default {
    data(){
        return{
            result:''
        }
    },
    created() {
        fetch('./data/home.json')
        .then(res=>res.json())
        .then(res=>{
            this.result=res
        }).catch(err=>console.log(err))
    }
}
</script>


<style lang="stylus" scoped>
    @import '~styles/_border.styl'
    .list-box
        margin-top 0.09rem
        background #fff
        border 1px 0 1px 0,#ccc
        display flex
        flex-direction column
        .list-box-header
            text-align center
            margin .2rem 0 .15rem
            display flex
            width 100%
            height .23rem
            justify-content center
            img 
                display flex
                width 0.99rem
                height .21rem
        .list-container
            padding 0 .1rem
            .recommends
                .recommends-item
                    width 100%
                    margin-bottom .18rem
                    display block
                    .recommends-item--footer
                        line-height 0.2rem
                        font-size .12rem
                        display flex
                        .actions
                            flex 1
                            color #999
                            .action-item
                                display inline-flex
                        .f-toe
                            width 2.14rem
                            margin-right .1rem
                            text-align left
                            overflow hidden
                            word-wrap normal
                            white-space nowrap
                            text-overflow ellipsis
                        .sprite-app-fire
                            background-image url('/img/app3x.png')
                            background-size 1.52rem 1.47rem
                            background-position -0.53rem -0.45rem
                            width .19rem
                            height .19rem
                            display inline-block
                        .sprite-app-comment
                            background-image url('/img/app3x.png')
                            background-size 1.52rem 1.47rem
                            background-position -0.72rem -0.45rem
                            width .19rem
                            height .19rem
                            display inline-block
                    .title
                        font-size .16rem
                        line-height .2rem
                        margin 0.09rem 0 0.04rem
                        text-align left
                    .recommends-img
                        padding-top 42.8571%
                        height 0
</style>

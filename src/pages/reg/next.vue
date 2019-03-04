<template>
    <div>
        <div class="password-container">
            <div class="pass-input">
                <input type="password" class="password" placeholder="请输入密码"
                v-model="password"
                >
            </div>
            <div class="repass-input">
                <input type="password" class="password" placeholder="请确认密码"
                v-model="repass"
                >
            </div>
            <button class="pass-btn"
                v-bind:class="{'pass-danger':password==''||repass==''?false:true}"
                @click='suc'
            >
                确认
            </button>
    </div>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data() {
        return {
            password:'',
            repass:''
        }
    },
    methods: {
        suc(){
            let newData={
                "name":this.$route.query.num,
                "pass":this.password
            }
            if(this.password==this.repass&&this.password!=''){
                Toast({
                    message: '注册成功',
                    duration: 1000
                });
                this.$router.push({path:'/home'})
                sessionStorage.setItem('msg',JSON.stringify(newData))
            }else if(this.password!=this.repass){
                Toast({
                    message: '两次密码不一致',
                    duration: 1000
                });
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .password-container
        padding-top 0.6rem
        width 64%
        margin 0 auto
        .pass-input
            margin-top: 0.15rem;
            border: 1px solid rgb(204, 204, 204);
            border-radius: 0.02rem;
            height: 0.38rem;
            line-height: 0.38rem;
            font-size: 0.14rem;
            width: 100%;
            display: table;
            input 
                display: table-cell;
                width: 100%;
                padding: 0.09rem 0 0.1rem 0.1rem;
                border: 0;
                outline: 0;
                background-color: transparent;
        .repass-input
            margin-top: 0.15rem;
            border: 1px solid rgb(204, 204, 204);
            border-radius: 0.02rem;
            height: 0.38rem;
            line-height: 0.38rem;
            font-size: 0.14rem;
            width: 100%;
            display: table;
            input 
                display: table-cell;
                width: 100%;
                padding: 0.09rem 0 0.1rem 0.1rem;
                border: 0;
                outline: 0;
                background-color: transparent;
        .pass-btn
            margin-top: 0.34rem;
            opacity: 0.5;
            cursor: default;
            background: #cccccc;
            color: #ffffff;
            width: 100%;
            height: 0.4rem;
            border: 0;
            text-align: center;
            border-radius: 0.02rem;
    .pass-danger
        background #ff5f65 !important
        color rgb(255, 255, 255)
        opacity 1 !important
</style>


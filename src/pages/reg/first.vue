<template>
  <div class="container-box">
    <div class="reg-container">
            <p class="f-wwb view-bd-content">手机号注册需要验证你的手机号，该号码不会对其他人公开</p>
            <div class="phone-input">
                <input type="tel" class="phoneInput-input js-flag" id="input-phone"
                    v-model="inputVal"
                >
            </div>
            <div class="control-wrap" v-if="inputVal==''?false:true">
                <div class="input-wrap">
                    <input type="text" class="code-input" v-model='codeInput'>
                </div>
                <identify :identifyCode="identifyCode"></identify>
            </div>
            <button class="reg-btn"
                v-bind:class="{'btn-danger':inputVal==''||codeInput==''?false:true}"
                @click='next'
            >
                下一步
            </button>
    </div>
  </div>
</template>

<script>
import identify from 'components/identify.vue'
export default {
    components:{
        identify
    },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      inputVal:'',
      codeInput:''
    };
  },
  methods: {
    next(){
        if((/^1(3|4|5|7|8)\d{9}$/.test(this.inputVal))&&this.codeInput==this.identifyCode){
            this.$router.push({
                path:'/register/next',
                query:{
                    num:this.inputVal
                }
            })
        }else if(this.inputVal!==''&&this.codeInput!==this.identifyCode){
            this.refreshCode()
        }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      console.log(this.identifyCode);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/_newborder.styl';
.code 
        margin: 4rem auto;
        width: 1.14rem;
        height: .4rem;
        border: 1px solid red;
    
  .reg-container 
    padding-top: 0.6rem;
    width: 64%;
    margin: 0 auto;

    p 
      font-size: 0.12rem;
      line-height: 0.18rem;
      text-align: left;
    

    .phone-input 
      margin-top: 0.15rem;
      border: 1px solid rgb(204, 204, 204);
      border-radius: 0.02rem;
      height: 0.38rem;
      line-height: 0.38rem;
      font-size: 0.14rem;
      width: 100%;
      display: table;
    
    .phone-input::before 
      border-right: 1px solid rgb(204, 204, 204);
      display: table-cell;
      content: '+86';
      width: 0.4rem;
      height: 100%;
      text-align: center;
    

    .phoneInput-input 
      display: table-cell;
      width: 100%;
      padding: 0.09rem 0 0.1rem 0.1rem;
      border: 0;
      outline: 0;
      background-color: transparent;
    

    .reg-btn 
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
   
</style>
<style lang="stylus" scoped>
@import '~styles/_newborder.styl';
.control-wrap
    margin-top .2rem
    display flex
    .input-wrap
        display block
        margin-bottom .1rem
        margin-right .05rem
        .code-input
            width 100%
            box-sizing border-box
            padding .08rem .1rem
            font-size .12rem
            line-height .22rem
            border 1px solid #ccc
            border-radius .03rem
            margin-right .1rem
.btn-danger
    background #ff5f65 !important
    color rgb(255, 255, 255)
    opacity 1 !important
</style>

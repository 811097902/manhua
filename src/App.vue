<template>
  <div id="app">
      <router-view>
          <Home></Home>
      </router-view>
  </div>
</template>

<script>
import Home from 'pages/Home'
export default {
    name:'App',
    components:{
        Home
    }
}
</script>
<style lang="stylus">
#app
  font-family "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>

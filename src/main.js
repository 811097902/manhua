import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'

import identify from 'components/identify.vue'
Vue.config.productionTip = false
Vue.use(identify)
Vue.use(Mint)
//引入rem
import './utils/rem'

import './assets/styles/_reset.styl'

import router from './router/index'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

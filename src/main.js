import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/style/common.css' // 公用样式文件
import 'vant/lib/index.css';
import animated from 'animate.css'

Vue.use(Vant);
Vue.use(animated)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

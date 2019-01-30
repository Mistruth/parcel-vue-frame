import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
// 引入注册elementUI
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// filters整体输出
Vue.use(ElementUI, { size: 'small' })
// Vue.use(delBox)
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


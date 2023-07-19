import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: createElement => createElement(App),   // createElement是一个函数，用来创建节点
}).$mount('#app')

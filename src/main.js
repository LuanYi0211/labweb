import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueScrollTo)

new Vue({
  router,//挂载
  render: h => h(App),
}).$mount('#app')

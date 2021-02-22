import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

Vue.use(ElementUI);
Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
Vue.prototype.$axios = axios
Vue.use(VueRouter)

Vue.use(ElementUI);
Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Echarts from 'echarts'
import Axios from 'axios'
import $ from 'jquery' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
 

Vue.config.productionTip = false
Vue.prototype.echarts = Echarts 
Vue.prototype.axios= Axios

Vue.use(Echarts)

/* eslint-disable no-new */   
new Vue({ 
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')

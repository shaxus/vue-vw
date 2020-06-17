// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store/store'
import '@/assets/common/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
Vue.use(MintUI);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false
//lodash
// var _ = require('lodash');

/* eslint-disable no-new */
VueAMap.initAMapApiLoader({
  key: '3834cbd66380a2e3a4a99439a2ee2434',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
VueAMap.initAMapApiLoader({
  key: '3834cbd66380a2e3a4a99439a2ee2434',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  uiVersion: '1.0.11' // 版本号
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

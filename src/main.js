import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(Mint);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

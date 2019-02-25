import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
// import { Button } from 'mint-ui';
import { Tabbar, TabItem, Loadmore } from 'mint-ui';
import router from './router';

Vue.component(Loadmore.name, Loadmore);
Vue.config.productionTip = false;
// Vue.component(Button.name, Button);/
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
// ReactDOM.render(<APP />,dom节点)
// 将虚拟的 vue dom 节点，渲染到真实的 dom 节点上
Vue.use(MintUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app');

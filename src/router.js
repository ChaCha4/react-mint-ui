import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Find from './components/Find';
import Order from './components/Order';
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/order',
      component: Order
    }
  ]
});
export default router;

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//路由懒加载
const Login = () => import('../components/router/Login.vue');
const Register = () => import('../components/router/Register.vue');
import SignComponent from '../components/router/SignComponent'
import ShowInfo from "@/components/router/ShowInfo"
import LeftContent from '@/components/router/LeftContent'
import RightContent from '@/components/router/RightContent'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      component:() => import('../components/example/CheckComponent.vue')
    },
    {
      path:'/VueMap',
      component:() => import('../components/map/VueMap.vue')
    },
    {
      path:'/slot',
      component:() => import('../components/slot/SlotDemo.vue')
    },
    {
      path:'/demo',
      component:() => import('../components/vuex/Demo.vue')
    },
    {
      path: '/Register/:id',
      name: 'Register',
      component: Register
    },
    //动态路由
    {
      //动态路径参数 以冒号开头
      path: '/Login/:id',
      name: 'Login',
      component: Login,
      //解耦
      props: true
    },
    {
      path: '/ShowInfo',
      component: ShowInfo,
      children:[
        {
          path:'',
          component:SignComponent
        },
        {
          path: 'LeftContent',
          component: LeftContent
        },
        {
          path:'RightContent',
          component:RightContent
        }
      ]
    }
  ],
  //滚动行为 ，对于所有路由导航，简单地让页面滚动到顶部。
  scrollBehavior(to, from, savedPosition){
    return {x: 0, y: 0};
  }
  //全局前置守卫
})

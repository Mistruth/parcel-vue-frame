import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout.vue'
import Dashboard from '../views/Dashboard.vue'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true,
    name: '/'
  },
  {
    path: '/dashboard',
    component: Layout,
    alwaysShow: true,
    redirect: '/dashboard/index',
    name: 'dashboard',
    meta: {
      title: '首页',
      icon: 'iconfont icon-shouye',
      istop: true
    },
    children: [
      {
        path: '/dashboard/index',
        component: Dashboard,
        name: 'index',
        meta: {
          title: '首页'
        }
      }
    ]
  },
]

export default new Router({
  routes: constantRouterMap
})

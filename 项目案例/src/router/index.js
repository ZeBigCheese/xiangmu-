import { createRouter, createWebHashHistory } from 'vue-router'

var Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect:'/index',
      component: () => import('../views/Home.vue'),
      children: [
        {
          path: '/index',
          component: () => import('../views/two/index.vue')
        },
        {
          path: '/classify',
          component: () => import('../views/two/classify.vue')
        },
        {
          path: '/cart',
          component: () => import('../views/two/cart.vue')
        },
        {
          path: '/mine',
          component: () => import('../views/two/mine.vue')
        }
      ]
    },
    {
      path:'/detail',
      component:()=>import('../views/detail.vue')
    },
    {
      path:'/weixin',
      component:()=>import('../views/weixin.vue')
    },
    {
      path:'/denglu',
      component:()=>import('../views/denglu.vue')
    },
    {
      path:'/zhuce',
      component:()=>import('../views/zhuce.vue')
    },
    {
      path:'/dingdan',
      component:()=>import('../views/dingdan.vue')
    },
    {
      path:'/classgoods',
      component:()=>import('../views/two/classgoods.vue')
    },
    {
      path:'/search',
      component:()=>import('../views/search.vue')
    },
  ]
})

export default Router
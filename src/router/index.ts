import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// import productRouter from './modules/product.ts'
import layOut from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: layOut,
    children: [
      {
        path: '', // 默认子路由
        // 不能省略 .vue,否则ts不知道是什么类型文件
        component: () => import('../views/home/index.vue')
      }
    ]
  }, {
    path: '/login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound/index.vue'),
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

export default router

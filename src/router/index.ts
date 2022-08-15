import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:catchAll(.*)",
    redirect: "/login"
  },
  {
    path: '/login', 
    name: 'login',
    component: () => import('@/pages/login/index.vue')
  },
  { 
    path: '/404',
    name: '404',
    component:  () => import('@/pages/errorPages/404.vue')
  },
  { 
    path: '/wel',
    name: 'wel',
    component:  () => import('@/views/wel/index.vue')
  },
]

const router: Router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
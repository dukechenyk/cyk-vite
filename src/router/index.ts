import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/energy',
    name: 'energy',
    component: () => import('@/views/energy/index.vue')
  },
  {
    path: '/health',
    name: 'health',
    component: () => import('@/views/health/index.vue')
  },
  {
    path: '/performance',
    name: 'performance',
    component: () => import('@/views/performance/index.vue')
  },
  {
    path: '/synthesize',
    name: 'synthesize',
    component: () => import('@/views/synthesize/index.vue')
  }
]

export default createRouter(
  {
    history: createWebHistory(),
    routes
  }
)
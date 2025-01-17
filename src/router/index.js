import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/send',
    name: 'sendapi',
    component: () => import('../views/SendApi.vue')
  },
  {
    path : '/webframe',
    name: 'webframe',
    component: () => import('../views/FrameWeb.vue')
  },
  {
    path: '/learn',
    name: 'learnjavascript',
    component: () => import('@/views/LearnJS.vue')
  },
  {
    path: '/list',
    name: 'ListApi',
    component: () => import('@/views/ListApi.vue')
  },
  {
    path: '/hget',
    name: 'HTTPGET',
    component: () => import('@/views/HGet.vue')
  },
  {
    path: '/hpost',
    name: 'HTTPPost',
    component: () => import('@/views/HPost.vue')
  },
  {
    path: '/listsearch',
    name: 'ListSearch',
    component: () => import('@/views/ListSearch.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

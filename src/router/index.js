import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Admin', // 後台的外圍板
    component: Admin,
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/Get',
        component: () => import('../views/GetPost.vue')
      },
      {
        path: '/Update',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/PostForm.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

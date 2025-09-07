import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects/:name',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash }
    }

    // return (
    //   savedPosition ||
    //   new Promise((resolve) => {
    //     setTimeout(() => resolve({ top: 0 }), 300)
    //   })
    // )
    return savedPosition || { top: 0 }
  },
})

export default router

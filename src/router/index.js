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
    const delay = 350

    if (to.hash) {
      // No transition, scroll immediately
      if (to.name === from.name) return { el: to.hash }

      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash }), delay)
      })
    }

    return new Promise((resolve) => {
      setTimeout(() => resolve(savedPosition || { top: 0 }), delay)
    })
  },
})

export default router

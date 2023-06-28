import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    /*  meta: { requiresAuth: true }, */
  }
]

const Router = createRouter({
  history: createWebHistory(),
  base: import.meta.env.BASE_URL,
  routes,
})

Router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('this url requires authorization')
  } else {
    next()
  }
})

export default Router

import { createRouter, createWebHistory } from 'vue-router'
import layout from '../views/layout/Layout.vue'
import home from '../views/dashboard/Home.vue'
import favorites from '@/views/favorite/Favorite.vue'
import movieDetail from '@/views/movie/MovieDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/home",
      name: 'layout',
      component: layout,
      children: [
        {
          path: "/home",
          name: "home",
          component: home,
        },
        {
          path: "/favorites",
          name: "favorites",
          component: favorites,
        },
        {
          path: "/detail/:id",
          name: "moviedetail",
          component: movieDetail,
        },

      ]
    },

  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import PeopleList from '../views/PeopleList.vue'

const routes = [
  {
    path: '/',
    name: 'PeopleList',
    component: PeopleList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

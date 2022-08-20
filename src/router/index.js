import { createRouter, createWebHistory } from 'vue-router'
import PeopleList from '../views/PeopleList.vue'
import GStore from '@/store'
import PeopleLayout from '../views/event/PeopleLayout.vue'
import PeopleDetail from '../views/event/PeopleDetail.vue'
import VaccineDetail from '../views/event/VaccineDetail.vue'
import NProgress from 'nprogress'
import EventService from '@/services/EventService.js'
import DoctorView from '../views/event/DoctorView.vue'
const routes = [
  {
    path: '/',
    name: 'PeopleList',
    component: PeopleList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/people/:id',
    name: 'PeopleLayout',
    props: true,
    component: PeopleLayout,
    beforeEnter: (to) => {
      return EventService.getEvent(to.params.id) // Return and params.id
        .then((response) => {
          // Still need to set the data here
          GStore.people = response.data // <--- Store the event
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              // <--- Return
              name: '404Resource',
              params: { resource: 'people' }
            }
          } else {
            return { name: 'NetworkError' } // <--- Return
          }
        })
    },
    children: [
      {
        path: '',
        name: 'PeopleDetail',
        component: PeopleDetail
      },
      {
        path: 'vaccine',
        name: 'VaccineDetail',
        props: true,
        component: VaccineDetail
      },
      {
        path: 'comment',
        name: 'DoctorView',
        props: true,
        component: DoctorView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

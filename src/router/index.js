import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import buyProperty from '../views/buyProperty.vue'
import background from '../components/Footer.vue'
import propertyDetails from '../components/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'buyProperty',
    component: buyProperty
  },
  {
    path: '/components/background.vue',
    name: 'img',
    component: background
  },
  {
    path: '/components/propertyHomeDetails.vue',
    name: 'propertyDetails',
    component: propertyDetails,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login/Login.vue'
import List from '../components/RequestsList/RequestsList.vue'
import RequestForm from '../components/RequestForm/RequestForm.vue'


const routes = [
  {
    name: 'Login',
    path: '/',
    params: true,
    component: Login,
  },
  {
    name: 'List',
    path: '/List',
    params: true,
    component: List,
  },
{
  name: 'RequestForm',
  path: '/RequestForm',
  params: true,
  component: RequestForm,
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

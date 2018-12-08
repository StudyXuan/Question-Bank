import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Regisiter from '@/components/Regisiter'
import Index from '@/components/Index'
import Question from '@/components/Question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regisiter',
      name: 'Regisiter',
      component: Regisiter
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          component: Question
        }
      ]
    }
  ]
})

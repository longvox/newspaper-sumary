import Vue from 'vue'
import Router from 'vue-router'
import NewPaper from '@/components/NewsPaper'
import axios from 'axios'
import VueAxios from 'vue-axios'
import NotFound from '@/components/404'
import HomePage from '@/components/HomePage'
import Search from '@/components/Search'

Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:express/',
      name: 'express',
      component: NewPaper,
      children: [{
        path: ':category',
        name: 'subexpress',
        component: NewPaper
      }]
    },
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})

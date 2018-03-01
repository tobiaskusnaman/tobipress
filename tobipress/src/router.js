import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Author from './views/Author.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/author',
      component: Author
    },
    {
      path: '/',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '*',
      component: Login
    }]
})

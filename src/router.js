import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import Startup from './views/Startup.vue'
import Startup_create from './views/Startup_create.vue'
import Startup_config from './views/Startup_config.vue'
import User from './views/User.vue'
import User_config from './views/User_config.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/startup/:id',
      name: 'startup',
      component: Startup,
      props: true
    },
    {
      path: '/startup/create',
      name: 'startup_create',
      component: Startup_create
    },
    {
      path: '/startup/config',
      name: 'startup_config',
      component: Startup_config
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      props: true
    },
    {
      path: '/user/config',
      name: 'user_config',
      component: User_config
    },
  ]
})

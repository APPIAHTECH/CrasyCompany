import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },


    /**Auth**/
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Auth-dir/Login.vue'),
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "about" */ './views/Auth-dir/Signup.vue'),
    },

    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import(/* webpackChunkName: "about" */ './views/Auth-dir/ForgotPassword.vue'),
    },

    /**Footer pages **/
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/about-dir/About.vue'),
    },

    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "about" */ './views/policy-dir/Privacy.vue'),
    },


    {
      path: '/cookies',
      name: 'cookies',
      component: () => import(/* webpackChunkName: "about" */ './views/policy-dir/Cookies.vue'),
    },

    {
      path: '/security',
      name: 'security',
      component: () => import(/* webpackChunkName: "about" */ './views/policy-dir/Security.vue'),
    },

    {
      path: '/service',
      name: 'service',
      component: () => import(/* webpackChunkName: "about" */ './views/policy-dir/UseService.vue'),
    },

    {
      path: '/csuport',
      name: 'customersuport',
      component: () => import(/* webpackChunkName: "about" */ './views/resources-dir/CustomerSuport.vue'),
    },

    {
      path: '/work',
      name: 'work',
      component: () => import(/* webpackChunkName: "about" */ './views/resources-dir/WorkUs.vue'),
    },

    /** Dashboard pages **/
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "about" */ './views/backend/Dashboard.vue'),
    },

  ],
});

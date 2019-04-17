import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import bar from './views/hezi.vue';

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: 'a',
        component: bar,
      }],

    },
    {
      path: '/aa',
      name: 'hezi',
      component: () => import('./views/hezi.vue'),

    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/login/:id',
      name: 'next',
      component: () => import('./views/login.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/test.vue'),

    },
    {
      path: '/layui',
      name: 'layui',
      component: () => import('./components/layui.vue'),

    },
    {
      path: '/ee/:333',
      name: 'element',
      component: () => import('./views/element.vue'),
      children: [
        {
          path: '111',
          component: () => import('./views/hezi.vue'),
        },
      ],

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: { auth: true },
    },
  ],

});

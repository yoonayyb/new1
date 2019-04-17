import router from './router';
import store from './store';

export default {
  install(Vue) {
    Vue.prototype.$filter = function () {
      return router.beforeEach((to, from, next) => {
        // 根据字段判断是否路由过滤
        if (to.matched.some(record => record.meta.auth)) {
          console.log('数组返回true');
          if (store.state.login && store.state.pwd) {
            next();
          } else {
            // 防止无限循环
            if (to.name === 'login') {
              next();
              return;
            }
            next({
              path: '/login',
            });
          }
        } else {
          console.log('正常跳转');
          next();// 若点击的是不需要验证的页面,则进行正常的路由跳转
        }
      });
    };
  },
};

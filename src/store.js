import Vue from 'vue';
import Vuex from 'vuex';
import { newevent, dd } from './mutation-type';

Vue.use(Vuex);
const a = {
  namespaced: true,
  state: {
    uu: 999,
  },
  mutations: {
    do(state) {
      console.log(state.uu);
    },
  },
  getters: {
    oo(state) {
      return state.uu = 10;
    },
  },
};
const b = {
  state: {
    uu: 888,
  },
  mutations: {
    do(state) {
      console.log(state.uu);
    },
  },
  getters: {
    oo(state) {
      return state.uu = 12;
    },
  },
};
export default new Vuex.Store({
  modules: {
    a,
    b,
  },
  // mutations: {
  //   do(state) {
  //     console.log(state.a);
  //   },
  // },
  state: {
    ss: '123456Q',
    count: 1,
    cc: 1,
    show: 1,
    login: '',
    pwd: '',
  },
  getters: {
    shiyan: state => `${state.ss}999999`,
    aa: state => state.login,
    bb: state => state.pwd,
  },
  mutations: {
    nnn(state, r) {
      state.ss = r;
    },
    login(state, r) {
      state.login = r.login;
      state.pwd = r.pwd;
    },
    [newevent](state, r) {
      console.log(123456);
      console.log(r);
    },
    [dd](state) {
      console.log(state.count);
    },
    commit(stata, r) {
      stata.ss = r.data.subjects[4].casts[0].avatars;
    },
  },
  actions: {
    haha({ commit }, a) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('aaaa', a);
          resolve();
        }, 1000);
      });
    },
    async local({ commit }, prams) {
      window.localStorage.setItem('login', prams.login);
      window.localStorage.setItem('pwd', prams.pwd);
      const login = window.localStorage.getItem('login');
      const pwd = window.localStorage.getItem('pwd');
      commit('login', { login, pwd });
    },
  },
});

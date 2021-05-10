import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_INFO
} from './mutation-type.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || ''
  },
  mutations: {
    [SET_INFO](state, data) {
      for (let key in data) {
        state[key] = data[key]
        localStorage.setItem(key, data[key])
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

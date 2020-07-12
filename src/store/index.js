import Vue from 'vue'
import Vuex from 'vuex'
import { userModule } from './modules/userModule'
const fb = require('../firebaseConfig')

Vue.use(Vuex)

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('user/setCurrentUser', user)
    store.dispatch('user/fetchUserProfile')
  }
})

export const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    clearData({ commit }) {
      commit('user/setCurrentUser', null)
      commit('user/setUserProfile', {})
    }
  },
  modules: {
    user: userModule,
  }
})

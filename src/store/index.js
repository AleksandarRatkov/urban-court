import Vue from 'vue'
import Vuex from 'vuex'
import { userModule } from './modules/userModule'
const fb = require('../firebaseConfig')

Vue.use(Vuex)

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('user/setCurrentUserId', user.uid);
    store.dispatch('user/fetchUserProfile');
  }
})

export const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: userModule,
  }
})

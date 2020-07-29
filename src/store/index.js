import Vue from 'vue'
import Vuex from 'vuex'
import { userModule } from './modules/userModule'

Vue.use(Vuex)

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

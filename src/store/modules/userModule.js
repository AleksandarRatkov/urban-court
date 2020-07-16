import {
  auth,
  usersCollection,
} from '../../firebaseConfig'
const fb = require('../../firebaseConfig')

export const userModule = {
  namespaced: true,
  state: {
    currentUserId: null,
    userProfile: {},
  },
  mutations: {
    setCurrentUserId(state, val) {
      state.currentUserId = val
    },
    setUserProfile(state, val) {
      state.userProfile = val
    },
  },
  actions: {
    async login({ commit, dispatch }, user) {
      const response = await auth.signInWithEmailAndPassword(user.email, user.password)
      commit('setCurrentUserId', response.user.uid);
      await dispatch('fetchUserProfile');
    },
    async fetchUserProfile({ commit, state }) {
      const response = await usersCollection.doc(state.currentUserId).get();
      commit('setUserProfile', { id: response.id, ...response.data() })
    },
    async signup({ dispatch, commit }, user) {
      const response = await auth.createUserWithEmailAndPassword(user.email, user.password)
      commit('setCurrentUserId', response.user.uid);
      await dispatch('addUserToDb',
        {
          uid: response.user.uid,
          fullname: user.fullname,
          email: user.email,
          phoneNumber: user.phoneNumber,
          dateOfBirth: user.dateOfBirth,
          agreedWithTerms: user.agreedWithTerms
        })
    },
    async addUserToDb({ dispatch }, user) {
      await usersCollection.doc(user.uid).set({
        uid: user.uid,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        dateOfBirth: user.dateOfBirth,
        agreedWithTerms: user.agreedWithTerms
      })
      await dispatch('fetchUserProfile');
    },
    async logout({ dispatch }) {
      await auth.signOut();
      await dispatch('clearData');
    },
    clearData({ commit }) {
      commit('setCurrentUserId', null)
      commit('setUserProfile', {})
    }
  }
};
import * as fb from '../../firebaseConfig'
import router from '../../router'

export const userModule = {
  namespaced: true,
  state: {
    userProfile: {},
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },
  actions: {
    async signup({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);

      await dispatch('addUserToDb', {
        uid: user.uid,
        fullname: form.fullname,
        email: form.email,
        phoneNumber: form.phoneNumber,
        dateOfBirth: form.dateOfBirth,
        agreedWithTerms: form.agreedWithTerms
      });
    },
    async addUserToDb({ }, user) {
      await fb.usersCollection.doc(user.uid).set(user);
    },
    async fetchUserProfile({ commit }, user) {
      const response = await fb.usersCollection.doc(user.uid).get();
      commit('setUserProfile', { id: response.id, ...response.data() });
    },
    async login({ }, form) {
      await fb.auth.signInWithEmailAndPassword(form.email, form.password)
    },
    async logout({ dispatch }) {
      await fb.auth.signOut();
      dispatch('clearData');
    },
    clearData({ commit }) {
      commit('setUserProfile', {});
    }
  }
};
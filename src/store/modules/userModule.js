const fb = require('../../firebaseConfig')

export const userModule = {
  namespaced: true,
  state: {
    currentUser: null,
    userProfile: {},
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val
    },
    setUserProfile(state, val) {
      state.userProfile = val
    },
  },
  actions: {
    fetchUserProfile({ commit, state }) {
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
        let user = res.data();
        user.id = res.id;
        commit('setUserProfile', user)
      }).catch(err => {
        console.log(err)
      })
    },
    updateProfile({ state }, data) {
      let name = data.name
      let title = data.title
      let profileImageUrl = data.profileImageUrl

      fb.usersCollection.doc(state.currentUser.uid).update({ name, title, profileImageUrl }).then(() => {
      }).catch(err => {
        console.log(err)
      })
    },
  }
};
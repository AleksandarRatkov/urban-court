import {
  auth,
  usersCollection,
} from '../../firebaseConfig'

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
    // sendVerificationMail({ }) {
    //   auth.currentUser.sendEmailVerification()
    //     .then(() => {
    //       console.log("email sent");
    //     }).catch(error => {
    //       console.log(error);
    //     })

    // },
    // signup({ dispatch, commit }, user) {
    //   auth.createUserWithEmailAndPassword(user.email, user.password).then(response => {
    //     commit('setCurrentUserId', response.user.uid);
    //     dispatch('addUserToDb',
    //       {
    //         uid: response.user.uid,
    //         fullname: user.fullname,
    //         email: user.email,
    //         phoneNumber: user.phoneNumber,
    //         dateOfBirth: user.dateOfBirth,
    //         agreedWithTerms: user.agreedWithTerms
    //       })
    //   })
    // },
    // addUserToDb({ }, user) {
    //   usersCollection.doc(user.uid).set({
    //     uid: user.uid,
    //     fullname: user.fullname,
    //     email: user.email,
    //     phoneNumber: user.phoneNumber,
    //     dateOfBirth: user.dateOfBirth,
    //     agreedWithTerms: user.agreedWithTerms
    //   })
    // },
    fetchUserProfile({ commit, state }) {
      usersCollection.doc(state.currentUserId).get().then(user => {
        commit('setUserProfile', { id: user.id, ...user.data() })
      }).catch(error => {
        console.log(error);
      });
    },
    // login({ commit, dispatch }, user) {
    //   auth.signInWithEmailAndPassword(user.email, user.password).then(response => {
    //     commit('setCurrentUserId', response.user.uid);
    //     dispatch('fetchUserProfile');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // },
    // logout({ dispatch }) {
    //   auth.signOut().then(() => {
    //     dispatch('clearData');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // },
    // clearData({ commit }) {
    //   commit('setCurrentUserId', null)
    //   commit('setUserProfile', {})
    // }
  }
};
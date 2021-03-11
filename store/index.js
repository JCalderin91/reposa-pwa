/*
  Load
  State managment for load
*/


// State object.
const state = () => ({
  isAuthDialog: false,
})
// Getter functions.
const getters = {}

// Actions.
const actions = {}

// Mutations
const mutations = {
  toggleAuthDialog: (state) => {
    state.isAuthDialog = !state.isAuthDialog
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  loading: false
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  showLoading (state) {
    state.loading = true
  },
  hideLoading (state) {
    state.loading = false
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  showLoading: ({ commit }) => commit('showLoading'),
  hideLoading: ({ commit }) => commit('hideLoading')
}

// getters are functions
const getters = {
  getLoadingStatus: state => state.loading
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

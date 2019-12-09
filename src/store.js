import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uiColor: 'light-blue'
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    primary: state => {
      return state.uiColor
    },
    accent: state => {
      return state.uiColor + ' accent-2'
    },
    primaryText: state => {
      return 'white-text'
    },
    accentText: state => {
      return 'white-text'
    }
  }
})

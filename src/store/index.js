import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      password: ''
    },
    token: '',
    loginState: false
  },
  mutations: {
    Login (state) {
      if (localStorage.getItem('token') != null) {
        state.token = localStorage.getItem('token')
        state.loginState = true
      }
    },
    GetUserInfo (state) {
      state.user = JSON.parse(localStorage.getItem('user'))
    }
  },
  actions: {
  },
  modules: {
  }
})

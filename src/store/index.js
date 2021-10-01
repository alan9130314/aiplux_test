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
    loginState: false,
    posts: []
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
    },
    createPosts (state, posts) {
      // state.posts = Object.assign({}, posts)
      state.posts = posts
      console.log(state.posts)
    }
  },
  actions: {
  },
  modules: {
  }
})

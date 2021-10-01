<template>
  <div>
    <Navbar></Navbar>
    <div class="Login">
        <p>請先登入</p>
      <!-- token:{{ $store.state.user  }} -->
      <form  class="form-signin" @submit.prevent="Login">
        <div class="mb-3">
          <input v-model="$store.state.user.username"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="User Name"
          />
        </div>
        <div class="mb-3">
          <input v-model="$store.state.user.password"
            type="text"
            class="form-control"
            id="exampleInputPassword1" placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">登入</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Login',
  components: {
    Navbar
  },
  data () {
    return {
    }
  },
  methods: {
    Login () {
      // mock login
      var axios = require('axios')
      var MockAdapter = require('axios-mock-adapter')

      var mock = new MockAdapter(axios)
      mock.onPost('/api/v1/login', {
        params: {
          user: {
            username: 'test',
            password: 'test'
          }
        }
      }).reply(200, {
        user: {
          id: 1,
          username: 'test',
          email: 'test@aiplux.com'
        },
        token: 'fake-token'
      })
      this.$http.post('/api/v1/login', { params: { user: { username: this.$store.state.user.username, password: this.$store.state.user.password } } }).then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)
        this.$store.commit('Login')
        this.$router.push('/')
        mock.restore()
      }).catch((error) => {
        alert(`登入失敗 ${error}`)
      })
    }

  }
}
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  text-align: center;
}
body {
  align-items: center;
  justify-content: center;
  // 背景混色模式
  // background-color: rgba(0, 0, 0, .8);
  // background-blend-mode: multiply;
  // background-image: url(~@/assets/bg-cafe.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.Login {
  // display: flex;
  width: 300px;
  // margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

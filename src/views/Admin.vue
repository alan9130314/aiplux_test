<template>
  <div class="Admin">
    <Navbar></Navbar>
    <router-view  />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data () {
    return {

    }
  },
  created () {
    console.log('admin')
    this.$store.commit('Login')
    if (this.$store.state.token) {
      if (this.$store.state.token === null) {
        console.log('Token驗證失敗')
        this.$router.push('/login')
      } else if (this.$store.state.token === 'fake-token') {
        console.log('Token驗證成功')
        this.$store.commit('GetUserInfo')
      }
    } else {
      console.log('無Token 轉向登入頁')
      this.$router.push('/login')
    }
  }
}
</script>

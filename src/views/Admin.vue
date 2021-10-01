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
    this.$store.commit('Login')
    if (this.$store.state.token) {
      if (this.$store.state.token === null) {
        this.$router.push('/login')
      } else if (this.$store.state.token === 'fake-token') {
        this.$store.commit('GetUserInfo')
      }
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

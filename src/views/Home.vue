<template>
  <div class="home">
    <p>登入狀態： {{ $store.state.loginState }}</p>
    <p v-if="$store.state.user.username != ''">UserName : {{ $store.state.user.username }}</p>
    <p v-else>尚未登入</p>
    <p>token :  {{ $store.state.token }}</p>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
    }
  }
  // created () {
  //   this.$store.commit('Login')
  //   if (this.$store.state.token) {
  //     if (this.$store.state.token === null) {
  //       console.log('Token驗證失敗')
  //       this.$router.push('/login')
  //     } else if (this.$store.state.token === 'fake-token') {
  //       console.log('Token驗證成功')
  //       this.$store.commit('GetUserInfo')
  //     }
  //   } else {
  //     this.$router.push('/login')
  //   }
  // }
}
</script>

<template>
  <div class="home">
    <p>登入狀態： {{ $store.state.loginState }}</p>
    <p v-if="$store.state.user.username != ''">UserName : {{ $store.state.user.username }}</p>
    <p v-else>尚未登入</p>
    <p>token :  {{ $store.state.token }}</p>
    <br>
    <a class="btn btn-secondary mb-3" href="#" role="button" @click.prevent="getPosts">Get Posts</a>
    <PostForm></PostForm>
  </div>
</template>

<script>
// @ is an alias to /src
import PostForm from '@/components/PostForm.vue'

export default {
  name: 'Home',
  components: {
    PostForm
  },
  data () {
    return {
    }
  },
  methods: {
    getPosts () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        this.$store.commit('createPosts', response.data)
      })
    }
  }
}
</script>
<style lang="scss">
.post-title {
  width : 100%;
  display : -webkit-box;
  overflow : hidden;
  text-overflow : ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>

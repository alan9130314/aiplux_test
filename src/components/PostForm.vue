<template>
  <div class="PostForm">
    PostForm
    <br>
    <div class="container">
      <div class="row">
        <div class="col-3 mb-3"  v-for="post in $store.state.posts" :key="post.id">
          <div class="card"  >
            <div class="card-body text-start">
              <label  class="form-label">id : {{post.id}}</label>
              <br>
              <label  class="form-label">userId : {{post.userId}}</label>
              <br>
              <div class="mb-3">
                <label  class="form-label">title : </label>
                <input type="text" class="form-control" name="" id="" v-model="post.title">
              </div>
              <button type="submit" class="btn btn-primary"
              @click="updatePost(post.id)">更新</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'PostFom',
  components: {
    // HelloWorld
  },
  methods: {
    updatePost (postId) {
      this.$http.patch('https://jsonplaceholder.typicode.com/posts/1',
        {
          id: this.$store.state.posts[postId - 1].id,
          title: this.$store.state.posts[postId - 1].title,
          body: this.$store.state.posts[postId - 1].body,
          userId: this.$store.state.posts[postId - 1].userId
        })
        .then((response) => {
          console.log(response.data)
        }).catch((error) => {
          console.log('error', error)
        })
    }
  }
}
</script>

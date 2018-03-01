<template>
  <div class="">
    <div class="content">
      <div class="container">
        <div class="jumbotron">
          <h1 class="display-3">tobiPress</h1>
            <fieldset>
              <legend>Please login!</legend>
              <div class="form-group">
                <input v-model="username" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter username">
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <button type="button" class="btn btn-primary" @click='login'>Submit</button>
            </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login () {
      let self = this
      this.$axios.post('/login', {
        username: self.username,
        password: self.password
      })
        .then(user => {
          localStorage.setItem('token', user.data.data[0])
          this.$store.commit('setUser', user.data.data[1])
          this.$store.dispatch('getAllArticle')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

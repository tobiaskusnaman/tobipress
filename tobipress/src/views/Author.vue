<template lang="html">
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <!-- <Category/> -->
          <!-- <SideBarHome/> -->
        </div>
        <div class="col-sm-9">
          <h1>Hi {{user.username}} !</h1>
            <!-- <ContentHome/> -->
            <button v-if="!isWrite" type="button" class="btn btn-primary" @click='writeReady'>Ready to write?</button>
              <form v-else class="" action="index.html" method="post">
                <div class="form-group">
                 <input type="text" class="form-control" v-model='title' placeholder="Title">
               </div>
               <div class="form-group">
                 <textarea class="form-control" v-model='content' placeholder="Write your content here" style="height:500px"></textarea>
               </div>
               <button type="button" class="btn btn-primary" @click="addArticle()">Submit</button>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      user: this.$store.state.user,
      userArticle: null,
      title: null,
      content: null,
      isWrite: false
    }
  },
  methods: {
    writeReady () {
      this.isWrite = true
    },
    addArticle () {
      let self = this
      this.$axios.post('/authors/article/create', {
        title: self.title,
        content: self.content,
        authorId: self.$store.state.author._id
      }, {
        headers: {
          token: self.$store.state.authorToken
        }
      })
        .then(article => {
          self.title = null
          self.content = null
          self.isWrite = false
          self.$store.commit('setNewArticle', article.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getArticleByAuthorId () {
      let self = this
      this.$axios.get(`articles/getArticle/${this.user._id}`, {
        headers: {
          token: this.$store.state.authorToken
        }
      })
        .then(articles => {
          console.log(articles)
          self.userArticle = articles.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    '$store.state.articles': function (val) {
      this.getArticleByAuthorId()
    }
  },
  created: function () {
    this.$store.dispatch('getInfo')
    this.$store.dispatch('getAllArticle')
  }
}
</script>

<style lang="css">
</style>

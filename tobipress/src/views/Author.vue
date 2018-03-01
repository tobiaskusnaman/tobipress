<template lang="html">
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <!-- <Category/> -->
          <SideBarAuthor/>
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
                 <input type="text" class="form-control" v-model='category' placeholder="Category">
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
import SideBarAuthor from '@/components/SideBarAuthor'
export default {
  components: {
    SideBarAuthor
  },
  data: function () {
    return {
      user: this.$store.state.user,
      userArticle: null,
      title: null,
      content: null,
      isWrite: false,
      category: null
    }
  },
  methods: {
    writeReady () {
      this.isWrite = true
    },
    addArticle () {
      let self = this
      this.$axios.post('/articles/create', {
        title: self.title,
        content: self.content,
        userId: self.$store.state.user._id,
        category: self.category.toLowerCase()
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(article => {
          self.title = null
          self.content = null
          self.category = null
          self.isWrite = false
          // self.$store.commit('addNewArticle', article.data.data)
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

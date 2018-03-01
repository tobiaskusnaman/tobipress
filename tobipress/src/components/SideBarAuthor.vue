<template lang="html">
  <div class="">
    <div class="list-group" style="margin-top: 15px;">
      <a class="list-group-item list-group-item-action active" style='color:white'>
          TITLE
      </a>
        <router-link v-for="(article, index) in articles" :key="index" class="list-group-item list-group-item-action" :to="{ path: `/author/edit/${article._id}` }">
          {{article.title}}
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      userId: this.$store.state.user._id,
      userArticle: null
    }
  },
  methods: {
    getArticleByAuthorId () {
      let self = this
      this.$axios.get(`articles/getArticle/${this.user._id}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(articles => {
          self.userArticle = articles.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getArticle () {
      let self = this
      this.$axios.get('/articles')
        .then(articles => {
          console.log('INI ARTICLES', articles)
          self.$store.commit('setArticle', articles.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created: function () {
    this.getArticle()
    this.getArticleByAuthorId()
  },
  watch: {
    '$store.state.articles': function (val) {
      this.getArticleByAuthorId()
    }
  }
}
</script>

<style lang="css">
</style>

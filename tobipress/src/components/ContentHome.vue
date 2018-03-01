<template lang="html">
  <div class="">
    <div class="card border-primary mb-9" style="margin-top:15px" v-for="(article, index) in articles" :key="index">
      <div class="card-header">
        <h3> {{article.title}} </h3>
      </div>
      <div class="card-body">
        <h6 class="card-title"> BY: {{article.userId.username}} </h6>
        <p class="card-text"> {{article.content.substring(0,400)}}... </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style lang="css">
p {
  text-align: justify;
}
</style>

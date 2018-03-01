<template lang="html">
  <div class="list-group" style="margin-top: 15px;">
    <a class="list-group-item list-group-item-action active" style='color:white'>
        TITLE
    </a>
      <router-link v-for="(article, index) in articles" :key="index" class="list-group-item list-group-item-action" :to="{ path: `/${article._id}` }">
        {{article.title}}
      </router-link>
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
</style>

<template lang="html">
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <Category/>
          <SideBarHome/>
        </div>
        <div class="col-sm-9">
          <h1>Welcome in tobiPress</h1>
            <ContentHome/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarHome from '@/components/SideBarHome'
import ContentHome from '@/components/ContentHome'
import Category from '@/components/Category'
export default {
  components: {
    SideBarHome,
    ContentHome,
    Category
  },
  created: function () {
    this.$store.dispatch('getAllArticle')
  }
}
</script>

<style lang="css">
</style>

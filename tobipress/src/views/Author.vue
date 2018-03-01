<template lang="html">
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <Category/>
          <SideBarHome/>
        </div>
        <div class="col-sm-9">
          <h1>Hi {{user}}</h1>
            <ContentHome/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  created: function () {
    return this.$store.dispatch.getInfo
  }
}
</script>

<style lang="css">
</style>

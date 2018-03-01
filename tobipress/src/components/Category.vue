<template lang="html">
  <div class="list-group" style="margin-top: 15px;">
    <a class="list-group-item list-group-item-action active" style='color:white'>
        FILTER BY CATEGORY
    </a>
      <router-link class="list-group-item list-group-item-action" :to="{ path: `/` }">
        TRAVEL
      </router-link>
      <router-link class="list-group-item list-group-item-action" :to="{ path: `/` }">
        HISTORY
      </router-link>
      <router-link class="list-group-item list-group-item-action" :to="{ path: `/` }">
        ECONOMY
      </router-link>
      <router-link class="list-group-item list-group-item-action" :to="{ path: `/` }">
        TECH
      </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

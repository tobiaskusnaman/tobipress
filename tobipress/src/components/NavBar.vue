<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">tobiPress</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav navbar-right">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/', params: {} }"> Home </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/author', params: {} }"> Author </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/login', params: {} }"> Log Out </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

<template>
  <div id="app">
    <appHeader></appHeader>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>


<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      'appHeader': Header
    }
  }
</script>

<style lang="scss">
  @import './assets/styles/style.scss';
</style>

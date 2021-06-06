<template>
  <div class="app">
      <BaseModal ref="baseModal" />
      <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import BaseModal from '@/components/ui/BaseModal'
export default {
  components: {
    BaseModal
  },
  mounted () {
    Vue.prototype.$modal = this.$refs.baseModal
  }
}
</script>

<style lang="scss">
@import '~@sweetalert2/theme-bulma/bulma.scss';
body {
  margin: 0;
  padding: 0;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  background-color: $color-background;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div class="home">
    <h1 class="api-key">JWT: {{jwt}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import jwt_decode from "jwt-decode";
export default {
  name: 'ApiKey',
  components: {
  },
  data () {
    return {
      jwt: '',
      apiKey: ''
    }
  },

  async mounted () {
    this.jwt = this.$store.getters.getJWT
    this.apiKey = jwt_decode(this.jwt)
  }
}
</script>

<style lang="scss" scoped>
.api-key {
  font-size: 2rem;
}
</style>

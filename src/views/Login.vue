<template>
  <div class="login__container">
    <div class="card card-pad-rg card-login">
      <h2> Iniciar sesión</h2>
      <p> {{ contador }} </p>
      <p> {{ sumarAlContador }} </p>
      <button @click="sumar" class="btn btn-fit btn-success"> Sumar </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },

  data () {
    return {
      contador: 0
    }
  },

   computed: {
     sumarAlContador () {
       return this.contador + 1
     }
  },

  methods : {
    sumar () {
      this.contador += 1
    }
  }
}
</script>

<style lang="scss">
.login__container {
  display:flex;
  flex-direction: column;
  .card-login {
    background-color: $color-primary
  }
}
</style>
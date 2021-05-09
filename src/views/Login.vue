<template>
  <div class="login__container">
    <div class="card card-pad-rg card-login">
      <h2 class="section-title">Re-seña! - Iniciar sesión</h2>
      <br />
      <br />
      <div>
        <form @submit.prevent="handleSubmit">
          <input
            v-model="username"
            placeholder="Usuario"
            class="form-label"
            required
          />
          <br />
          <input
            v-model="password"
            placeholder="Contraseña"
            class="form-label"
            type="password"
            required
          />
          <br />
          <br />
          <button type="submit" class="btn btn-fit btn-success">
            Ingresar
          </button>
        </form>
      </div>
      <br />
      <p>Username is: {{ username }}</p>
      <p>Password is: {{ password }}</p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      alert(this.username + " " + this.password);
    },
  },
};
</script>

<style lang="scss">
.login__container {
  display: flex;
  flex-direction: column;
  .card-login {
    background-color: $color-primary;
  }
  .btn {
    width: 15%;
  }
  input {
    width: 10%;
  }
  .section-title {
    color: cornsilk;
  }
}
</style>

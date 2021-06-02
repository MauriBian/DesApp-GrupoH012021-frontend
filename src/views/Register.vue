<template>
<div>
  <div class="login__container">
    <div class="card-login card card-pad-rg card-login card-elevation-xl">
      <h2 class="login__title mt-md">¡Registrate en Re-Seña!</h2>
      <div class="p-lg">
        <BaseFormInput
          id="login__username-input"
          type="text"
          v-model="username"
          label="Nombre de usuario" />
        <BaseFormInput
          class="mt-md"
          id="login__password-input"
          type="text"
          v-model="password"
          label="Contraseña" />
        <BaseFormInput
          class="mt-md"
          id="login__platform-name-input"
          type="text"
          v-model="platformName"
          label="Nombre de la plataforma" />
          <div class="login__buttons">
            <button
              type="submit"
              class="btn btn-success btn-md mt-md mb-rg"
              @click.prevent="submit">
              <span>Registrate</span>
            </button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BaseFormInput from '@/components/ui/BaseFormInput'
import axios from 'axios'
export default {
  name: "Register",
  components: {
    BaseFormInput
  },
  data() {
    return {
      username: '',
      password: '',
      platformName: '',
    }
  },
  computed: {},

  methods: {

    submit() {
      axios.post('https://frozen-garden-00911.herokuapp.com/api/clientplatforms', {
        username: this.username,
        password: this.password,
        platformName: this.platformName
      }).then(response => {
        this.$router.push({ name: 'Home', params: { jwt: response.data.apiKey }});
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login__container {
  width: 100vw;
  height: 100vh;
  background-image: $color-background-public;
  display: flex;
  flex-flow: column;
  box-shadow: 0 0 95px -38px rgba(59,25,119,.61);
  .card-login {
    width: 32%;
    .login__title {
      font-size: 2rem;
    }
  }

  .card-login {
    align-self: center;
    margin-top: $m-xl + $m-lg;
  }

  .login-page__header {
    display: flex;
    align-items: right;
    font-family: $font-family-primary;

    & > div {
      flex: 1;

      &.login-page__header-left {
        text-align: left;
      }

      &.login-page__header-right {
        text-align: right;

        span {
          font-size: 0.85rem;
          font-weight: 400;
        }

        .btn-sign-up {
          -webkit-box-shadow: 0 5px 15px rgba($color-shadow, 0.25);
          -moz-box-shadow: 0 5px 15px rgba($color-shadow, 0.25);
          box-shadow: 0 5px 15px rgba($color-shadow, 0.25);

          &:hover {
            transform: scale(1.1);
            -webkit-box-shadow: 0 5px 18px rgba($color-shadow, 0.15);
            -moz-box-shadow: 0 5px 18px rgba($color-shadow, 0.15);
            box-shadow: 0 5px 18px rgba($color-shadow, 0.15);
          }
        }
      }
    }
  }

}

</style>

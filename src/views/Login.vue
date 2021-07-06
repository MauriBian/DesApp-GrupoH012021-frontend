<template>
<div>
  <div class="login__container">
    <div class="login-page__header px-md py-md">
      <div class="login-page__header-left">
        <BaseFormSelect
          class="leng-select"
          v-model="$i18n.locale"
          :options="languageOptions"
          :label="$t('message.language')"/>
      </div>
      <div class="login-page__header-right">
        <span class="mr-sm">{{$t("message.noAccount")}}</span>
        <router-link to="/signup" tag="button" class="btn btn-success-alt btn-rg btn-fit btn-sign-up">{{$t("message.register")}}</router-link>
      </div>
    </div>
    <div class="card-login card card-pad-rg card-login card-elevation-xl">
      <h2 class="login__title mt-md">{{$t("message.hello")}}</h2>
      <div class="p-lg">
        <BaseFormInput
          id="login__username-input"
          type="text"
          v-model="username"
          :label="$t('message.username')" />
        <BaseFormInput
          class="mt-md"
          id="login__password-input"
          type="password"
          v-model="password"
          :label="$t('message.password')"/>
          <div class="login__buttons">
            <button
                type="submit"
                class="btn btn-success btn-md mt-md mb-rg"
                @click.prevent="submit">
                <span>{{$t("message.login")}}</span>
            </button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BaseFormInput from '@/components/ui/BaseFormInput'
import BaseFormSelect from '@/components/ui/BaseFormSelect'
export default {
  name: "Login",
  components: {
    BaseFormInput,
    BaseFormSelect
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    languageOptions () {
      return [
      { label: 'English', code:'en' },
      { label: 'Japanese', code: 'ja'},
      { label: 'Spanish', code:'es' }
      ]
    } 
  },

  methods: {
    async submit() {
      const response = await this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
      if (!response) {
        this.$modal.error({
          title: this.$t("message.wrongUser"), // 'Formulario incompleto',
          cancelButtonText: 'Cerrar',
          showCancelButton: true,
          showConfirmButton: false
        })
      } else {
        this.$store.commit('setUsername', { username: this.username })
        this.$router.push({ name: 'Home'})
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login__container {
  background-image: $color-background-public;
  display: flex;
  flex-flow: column;
  height: 100vh;
  box-shadow: 0 0 95px -38px rgba(59,25,119,.61);
  .card-login {
    width: 32%;
    .login__title {
      font-size: 2rem;
    }
  }

  .card-login {
    align-self: center;
  }

  .login-page__header {
    display: flex;
    align-items: right;
    font-family: $font-family-primary;

    .leng-select{
      width: 100%;
    }

    & > div {
      flex: 1;

      &.login-page__header-left {
        text-align: left;
        max-width: 15%;
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

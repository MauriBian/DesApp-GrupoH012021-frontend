<template>
<div>
  <div class="register__container">
    <div class="register-page__header px-md py-md">
      <div class="register-page__header-left">
        <BaseFormSelect
          class=""
          v-model="$i18n.locale"
          :options="languageOptions"
          :label="$t('message.language')"/>
      </div>
    </div>
    <div class="card-register card card-pad-rg card-register card-elevation-xl">
      <h2 class="register__title mt-md">{{$t('message.registerHello')}}</h2>
      <p class=" mt-rg">{{$t('message.only')}} {{ $n(100, 'currency', $i18n.locale) }}</p>
      <div class="p-lg">
        <BaseFormInput
          id="register__username-input"
          type="text"
          v-model="username"
          :label="$t('message.username')" />
        <BaseFormInput
          class="mt-md"
          id="register__password-input"
          type="password"
          v-model="password"
          :label="$t('message.password')" />
        <BaseFormInput
          class="mt-md"
          id="register__platform-name-input"
          type="text"
          v-model="platformName"
          :label="$t('message.platformName')" />
          <div class="register__buttons">
            <button
              type="submit"
              class="btn btn-success btn-md mt-md mb-rg"
              @click.prevent="submit">
              <span>{{$t("message.register")}}</span>
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
import axios from 'axios'
export default {
  name: "Register",
  components: {
    BaseFormInput,
    BaseFormSelect
  },
  data() {
    return {
      username: '',
      password: '',
      platformName: '',
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
    
    submit() {
      if (this.username && this.password && this.platformName) {
        axios.post('https://frozen-garden-00911.herokuapp.com/api/clientplatforms', {
          username: this.username,
          password: this.password,
          platformName: this.platformName
        }).then(response => {
          this.$router.push({ name: 'Home', params: { jwt: response.data.apiKey }});
        }).catch( response => {
          console.log(response)
          this.$modal.error({
            title: this.$t("message.userAlreadyExist"), // 'Formulario incompleto',
            text: this.$t("message.userAlreadyExistDescription"),
            cancelButtonText: 'Cerrar',
            showCancelButton: true,
            showConfirmButton: false
          })
        })
        } else {
          this.$modal.error({
            title: this.$t("message.incompleteForm"), // 'Formulario incompleto',
            text: this.$t("message.incompleteFormDescription"),
            cancelButtonText: 'Cerrar',
            showCancelButton: true,
            showConfirmButton: false
          })
      }

    },
  },
}
</script>

<style lang="scss" scoped>
.register__container {
  width: 100vw;
  height: 100vh;
  background-image: $color-background-public;
  display: flex;
  flex-flow: column;
  box-shadow: 0 0 95px -38px rgba(59,25,119,.61);
  .card-register {
    width: 32%;
    .register__title {
      font-size: 2rem;
    }
  }

  .card-register {
    align-self: center;
    margin-top: $m-rg;
  }

  .register-page__header {
    display: flex;
    align-items: right;
    font-family: $font-family-primary;

    & > div {
      flex: 1;

      &.register-page__header-left {
        text-align: left;
        max-width: 10%;
      }

      &.register-page__header-right {
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

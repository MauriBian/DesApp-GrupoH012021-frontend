<template>
  <div class="home">
    <div class="home-page__header px-md py-md">
      <div class="home-page__header-right">
        <span class="mr-sm">{{$t("message.subscribeMessage")}}</span>
        <router-link to="/signup" tag="button" class="btn btn-success-alt btn-rg btn-fit btn-sign-up">{{$t("message.subscribe")}}</router-link>
      </div>
    </div>
      <h1 class=""> {{$t("message.platformUsage")}} </h1>
    <div class="p-md">
      <table class="kf-table" >
      <thead>
        <tr>
          <th>ID</th>
          <th>{{$t("message.action")}}</th>
          <th>{{$t("message.platform")}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usage,index) in platformUsage" :key="index">
          <td> {{usage.id}}</td>
          <td> {{usage.action}}</td>
          <td>{{usage.platformName}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      jwt: '',
      platformUsage: []
    }
  },

  async mounted () {
    this.jwt = this.$store.getters.getJWT
    const result = await this.$store.dispatch('platformUsage')
    if (result === 'Error'){
      this.$modal.error({
          title: this.$t("message.wrongApiKey"), // 'Formulario incompleto',
          text:this.$t("message.wrongApiKeyDescription"),
          cancelButtonText: 'Cerrar',
          showCancelButton: true,
          showConfirmButton: false
        })
    } else {
      this.platformUsage = result
    }

  }
}
</script>

<style lang="scss" scoped>

  .home-page__header {
    display: flex;
    align-items: right;
    font-family: $font-family-primary;

    & > div {
      flex: 1;

      &.home-page__header-left {
        text-align: left;
        max-width: 10%;
      }

      &.home-page__header-right {
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
.api-key {
  font-size: 2rem;
}
</style>

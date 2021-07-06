<template>
  <div class="home">
    <div class="home-page__header px-md py-md">
      <div class="home-page__header-left">
        <button @click="loadJWT" tag="button" class="btn btn-success-alt btn-rg btn-fit btn-sign-up">{{$t("message.loadApiKey")}}</button>
      </div>
      <div class="home-page__header-right">
        <span class="mr-sm">{{$t("message.subscribeMessage")}}</span>
        <button @click="subscribe" tag="button" class="btn btn-success-alt btn-rg btn-fit btn-sign-up">{{$t("message.subscribe")}}</button>
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
    <SubscriptionSidePanel ref="sidePanel"></SubscriptionSidePanel>
    <JWTSidePanel ref="jwtSidePanel"></JWTSidePanel>
  </div>
</template>

<script>
// @ is an alias to /src
import SubscriptionSidePanel from '@/components/SubscriptionSidePanel.vue'
import JWTSidePanel from '@/components/JWTSidePanel.vue'
export default {
  name: 'Home',
  components: {
    SubscriptionSidePanel,
    JWTSidePanel
  },
  data () {
    return {
    }
  },

  computed: {
    platformUsage () {
      return this.$store.getters.getPlatformUsage
    }
  },

  methods: {

  async subscribe () {
    this.$refs.sidePanel.open()
  },

  async loadJWT () {
    this.$refs.jwtSidePanel.open()
  }

  },
  async mounted () {
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
        max-width: 15%;

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

<template>
  <BaseSidePanel
    class="subscription-panel"
    ref="sidePanel"
    :closeOnOutsideClick="true"
    :title="title">
    <template v-slot:header>
    </template>
    <template v-slot:main>
      <div class="mt-sm">
        <BaseFormInput v-model="apiKey" label="Api key"></BaseFormInput>
      </div>
      <div class="form-row mt-md mb-rg">
        <button
          type="button"
          class="btn btn-abort btn-rg btn-fit px-lg mr-sm"
          @click.prevent="close"
          >
          <span>{{$t("message.cancel")}}</span>
        </button>
        <button
          type="submit"
          class="btn btn-success btn-rg btn-fit px-lg"
          @click.prevent="submit"
            >
          <span >{{$t("message.load")}}</span>
      </button>
    </div>
    </template>
  </BaseSidePanel>
</template>

<script>
import BaseSidePanel from '@/components/ui/BaseSidePanel.vue'
import BaseFormInput from '@/components/ui/BaseFormInput'
export default {
  data () {
    return {
      title: this.$t("message.loadApiKey"),
      apiKey:'',
    }
  },

  computed: {
  },

  components: {
    BaseSidePanel,
    BaseFormInput
  },

  methods: {
   

    open () {
      this.$refs.sidePanel.open()
    },

    close () {
      this.$refs.sidePanel.close()
    },

    cancel () {
      this.close()
    },

    async submit () {
      this.$store.commit('setJWT', {
        jwt: this.apiKey,
      })
    const result = await this.$store.dispatch('platformUsage')
    if (result === 'Error'){
      this.$modal.info({
          title: this.$t("message.wrongApiKey"), // 'Formulario incompleto',
          text:this.$t("message.wrongApiKeyDescription"),
          cancelButtonText: 'Cerrar',
          showCancelButton: true,
          showConfirmButton: false
        })
    }
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

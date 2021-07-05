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
        <BaseFormSelect :options="options" v-model="selectedMovie" :label="labelSelector"></BaseFormSelect>
        <BaseFormInput v-model="url" label="Url"></BaseFormInput>
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
          <span >{{$t("message.subscribe")}}</span>
      </button>
    </div>
    </template>
  </BaseSidePanel>
</template>

<script>
import BaseSidePanel from '@/components/ui/BaseSidePanel.vue'
import BaseFormSelect from '@/components/ui/BaseFormSelect'
import BaseFormInput from '@/components/ui/BaseFormInput'
export default {
  data () {
    return {
      title: this.$t("message.subscribeModalTitle"),
      selectedMovie: '',
      url:'',
      labelSelector: this.$t("message.labelSelector")
    }
  },

  computed: {
    options () {
      return [{ code: 3, label: 'Aladdin and the Wonderful Lamp',  },
      { code: 2, label: 'The Ball Game'},
      { code: 1, label: 'Le saut à la couverture'} ]
    }
  },

  components: {
    BaseSidePanel,
    BaseFormSelect,
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
      this.$store.dispatch('subscribe', {
        selectedMovie: this.selectedMovie,
        url: this.url
      })
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

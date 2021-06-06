<template>
  <div class="base-select" :class="{'no-margin': noMargin}">
    <div class="base-select__label" v-if="label">{{ label }}</div>
    <vSelect
      :inputId="id"
      ref="vSelect"
      :options="options"
      v-model="selectedValue"
      :disabled="disabled"
      :placeholder="placeholder"
      class="base-select__control">

      <template #no-options="{ search }">
        <template v-if="search && search !== ''">
          No se ha encontrado <b>"{{ search }}"</b> en la lista
        </template>
        <template v-else>
          No hay registros disponibles
        </template>
      </template>

    </vSelect>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/src/scss/vue-select.scss'
// import 'vue-select/dist/vue-select.css'

export default {
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    options: {
      type: Array,
      required: false
    },
    value: {
      type: [String, Number, Object],
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    noMargin: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    selectedValue: {
      get: function () {
        return this.options.find(item => item.code === this.value)
      },
      set: function (newValue) {
        this.$emit('input', (newValue) ? newValue.code : null)
      }
    }
  },

  components: {
    vSelect
  },

  methods: {
    clearSelection () {
      this.$refs.vSelect.clearSelection()
    }
  }
}
</script>

<style lang="scss" scoped>

.base-select {
  position: relative;
  width: 100%;
  // margin-bottom: px;
  margin-bottom: $m-rg;
  text-align: left;

  &.no-margin {
    margin-bottom: 0px;
  }

  .base-select__label {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 11px;
    font-family: $font-family-secondary;
    color: $color-grey-700;
    padding: 0 0 8px 2px;
  }
  .base-select__control {
     background-color: white;
  }
}

</style>

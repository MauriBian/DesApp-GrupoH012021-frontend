<template>
  <div class="base-input-iconized">
    <div class="base-input-iconized__label" v-if="label">{{ label }}</div>
    <input
      class="base-input-iconized__input"
      :id="id"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      :disabled="disabled"
      autofocus=""
      :placeholder="placeholder"
      :type="type">
    <!-- <div id="email-error" class="cu-form__error">
      <div class="cu-form__error-icon">
        <div class="cu-icon cu-icon_warning"></div>
      </div>
      <div id="email-error-text" class="cu-form__error-text"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: String,
      required: false
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
    }
  }
}
</script>

<style lang="scss" scoped>

.base-input-iconized {
  position: relative;
  width: 100%;
  margin-bottom: $m-rg;
  text-align: left;

  .base-input-iconized__label {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 11px;
    font-family: $font-family-secondary;
    color: $color-grey-700;
    padding: 0 0 8px 2px;
  }

  input {
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 22px;
    font-family: $font-family-secondary;
    width: 100%;
    border: 1px solid $color-form-input-border;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px 10px 8px 10px;
    color: $color-form-input-text;
  }

  .base-input-iconized__icon {
    position: absolute;
    left: 12px;
    top: 29px;
    width: 18px;
    height: 18px;
    text-align: center;

    i {
      color: $color-form-input-icon;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
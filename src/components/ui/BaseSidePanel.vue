<template>
  <transition
    name="side-panel"
    tag="div"
    ref="side-panel">
    <div
      class="side-panel"
      v-if="show"
      :key="id"
      :style="{ width: `${width}px` }">
      <header class="side-panel__header px-md pt-md pb-rg">
        <button
          type="button"
          class="side-panel__header-action-close"
          @click="close">
          <i class="fal fa-times"></i>
        </button>
        <div class="side-panel__header-row">
          <h2>{{ title }}</h2>
          <slot name="header-actions" class="side-panel__header-actions"></slot>
        </div>
        <slot name="header"></slot>
      </header>
      <main class="side-panel__main px-md pb-md pt-md">
        <slot name="main"></slot>
      </main>
      <footer class="side-panel__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    widthDefaultValue: {
      type: Number,
      required: false,
      default: 600 // In pixels
    },
    widthReductionFactor: {
      type: Number,
      required: false,
      default: 6 // In pixels
    },
    closeOnOutsideClick: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data () {
    return {
      show: false
    }
  },

  computed: {

    width: function () {
      // Adjust panel width relatively to the panels which are already opened
      const numberOfOpenedPanels = document.querySelectorAll('.side-panel').length
      return this.widthDefaultValue - this.widthReductionFactor * numberOfOpenedPanels
    }
  },

  methods: {
    open () {
      this.show = true

      // Listener to catch when a click is made outside the side-panel
      document.documentElement.addEventListener('click', this.onDocumentClick, true)
    },

    close () {
      this.$emit('closed')
      this.show = false
    },

    onDocumentClick (e) {
      // If the option is disabled, do not go on
      if (!this.closeOnOutsideClick) {
        return
      }

      // Check if the clicked element is descendent of the side panel container
      if (this.isDescendant(this.$el, e.target)) {
        return
      }

      this.close()
    },

    removeDocumentEvent () {
      document.documentElement.removeEventListener('click', this.onDocumentClick, false)
    }
  },

  created: function () {
    /**
     * Check if an element 'child' is descendent of an
     * element 'parent'.
     * @return {Boolean}  True if child is descendent of parent
     */
    this.isDescendant = function (parent, child) {
      var node = child.parentNode
      while (node !== null) {
        if (node === parent) {
          return true
        }
        node = node.parentNode
      }
      return false
    }
  },

  beforeDestroy () {
    this.removeDocumentEvent()
  }
}
</script>

<style lang="scss" scoped>

.side-panel {
  background: white;
  -webkit-box-shadow: 0 5px 15px rgba($color-shadow, 0.25);
  -moz-box-shadow: 0 5px 15px rgba($color-shadow, 0.25);
  box-shadow: 0 5px 15px rgba($color-shadow, 0.25);
  color: $color-grey-800;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  transition:
    transform 0.3s 0.3s,
    box-shadow .4s cubic-bezier(.785,.135,.15,.86) 0s;
  transition-delay: -100ms;
  z-index: 1000;

  &.side-panel-enter-active {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
  }
  &.side-panel-leave-active {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
  }

  .side-panel__header {
    background-color: $color-grey-100;
    position: relative;

    .side-panel__header-action-close {
      position: absolute;
      top: 10px;
      right: 15px;
      border: 0;
      box-shadow: none;
      background: transparent;
      font-size: 1.2rem;
      color: $color-grey-400;
      cursor: pointer;

      &:hover {
        color: $color-grey-600;
      }
    }

    .side-panel__header-row {
      display: flex;
      width: 100%;
      align-items: flex-end;
    }

    h2 {
      font-family: $font-family-primary;
      font-size: 1.2rem;
      font-weight: 600;
      color: $color-success;
      flex: 1;
    }

    .side-panel__header-actions {
      width: auto;
    }
  }

  main {
    overflow-y: auto;
    height: 100%;
  }
}

</style>

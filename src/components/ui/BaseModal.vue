<template>
  <div class="base-modal__container">
  </div>
</template>

<script>

export default {

  data () {
    return {
      errorButtons: this.$swal.mixin({
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-fit btn-rg btn-danger ml-sm',
          cancelButton: 'btn btn-fit btn-rg btn-abort',
          footer: 'footer-modal'
        }
      }),
      infoButtons: this.$swal.mixin({
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-fit btn-rg btn-default ml-sm',
          cancelButton: 'btn btn-fit btn-rg btn-abort'
        }
      }),
      warningButtons: this.$swal.mixin({
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-fit btn-rg btn-warning ml-sm',
          cancelButton: 'btn btn-fit btn-rg btn-abort'
        }
      }),
      successButtons: this.$swal.mixin({
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-fit btn-rg btn-success ml-sm',
          cancelButton: 'btn btn-fit btn-rg btn-abort'
        }
      })
    }
  },

  methods: {
    error ({ title, text, showCancelButton, showConfirmButton, confirmButtonText, cancelButtonText, confirmAction, confirmActionParams = null, footer, html }) {
      this.errorButtons.fire({
        text: text,
        title: title,
        icon: 'error',
        showCancelButton: showCancelButton,
        showConfirmButton: showConfirmButton,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        focusCancel: true,
        reverseButtons: true,
        footer: footer,
        html: html
      }).then(result => {
        if (result.isConfirmed) {
          confirmAction(confirmActionParams)
        }
      })
    },

    info ({ title, text, showCancelButton, showConfirmButton, confirmButtonText, cancelButtonText, confirmAction, confirmActionParams = null, footer }) {
      this.infoButtons.fire({
        text: text,
        title: title,
        icon: 'info',
        showCancelButton: showCancelButton,
        showConfirmButton: showConfirmButton,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        reverseButtons: true,
        footer: footer
      }).then(result => {
        if (result.isConfirmed) {
          confirmAction(confirmActionParams)
        }
      })
    },

    warning ({ title, text, showCancelButton, showConfirmButton, confirmButtonText, cancelButtonText, confirmAction, confirmActionParams = null, footer }) {
      this.warningButtons.fire({
        text: text,
        title: title,
        icon: 'warning',
        showCancelButton: showCancelButton,
        showConfirmButton: showConfirmButton,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        reverseButtons: true,
        footer: footer
      }).then(result => {
        if (result.isConfirmed) {
          confirmAction(confirmActionParams)
        }
      })
    },

    success ({ title, text, showCancelButton, showConfirmButton, confirmButtonText, cancelButtonText, confirmAction, confirmActionParams = null, footer }) {
      this.successButtons.fire({
        text: text,
        title: title,
        icon: 'success',
        showCancelButton: showCancelButton,
        showConfirmButton: showConfirmButton,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        reverseButtons: true,
        footer: footer
      }).then(result => {
        if (result.isConfirmed) {
          confirmAction(confirmActionParams)
        }
      })
    }

  }
}
</script>

<style lang="scss" scope>
.footer-modal {
  font-size: 0.9rem !important;
  color: $color-grey-600 !important;
}
</style>

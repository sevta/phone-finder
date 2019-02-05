<template>
  <div class="popup-wrapper" @click="popupBackdropClick">
    <div class="inner-popup" @click="innerPopupClick">
      <div class="container mx-auto max-w-lg">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",

  props: {
    title: {
      type: String,
      required: false,
      default: "Title"
    },

    description: {
      type: String,
      required: false,
      default: "Description"
    }
  },

  methods: {
    popupBackdropClick() {
      this.$store.commit("setTogglePopup", false);
    },

    innerPopupClick(e) {
      e.stopPropagation();
    }
  }
};
</script>

<style lang="postcss" scoped>
.popup-wrapper {
  @apply fixed pin-x pin-y;
  background-color: rgba(0, 0, 0, 0.8);
  .inner-popup {
    @apply bg-white w-full fixed pin-b py-5 px-3;
    h1 {
      @apply mb-3;
    }
    p {
      @apply font-sans text-sm leading-normal;
    }
  }
}
</style>



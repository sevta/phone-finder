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
import { mapState } from "vuex";
export default {
  name: "popup",

  data() {
    return {
      show: false
    };
  },

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

  computed: {
    ...mapState(["togglePopup"])
  },

  watch: {
    togglePopup(val) {
      console.log("toggle", val);
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
  transition: all 0.4s ease;
  @apply fixed pin-x pin-y;
  background-color: rgba(0, 0, 0, 0.8);
  .inner-popup {
    transition: all 0.3s ease;
    transform: translateY(150px);
    @apply bg-white w-full fixed pin-b py-5 px-3;
    &.active {
      transform: translateY(0);
    }
    h1 {
      @apply mb-3;
    }
    p {
      @apply font-sans text-sm leading-normal;
    }
  }
}
</style>



<template>
  <div class="card-item" @click="onCardSelected">
    <h4 class="card-item--name">{{item.name}}</h4>
    <!-- <p class="card-item--desc">{{item.description}}</p> -->
    <!-- <p class="card-item--desc" v-if="item.description == null">no description</p> -->
    <p class="card-item--year">{{item.release_year}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "card-item",

  computed: {
    ...mapState(["togglePopup"])
  },

  props: {
    name: {
      type: String,
      required: false
    },

    item: {
      type: Object,
      required: true
    },

    desc: {
      type: String,
      required: false
    },

    releaseYear: {
      type: Number,
      required: false
    }
  },

  mounted() {
    console.log(this.item);
  },

  methods: {
    onCardSelected() {
      console.log("select", this.item);
      this.$store.commit("setTogglePopup", !this.togglePopup);
      this.$store.commit("setPhoneView", this.item);
    }
  }
};
</script>

<style lang="postcss" scoped>
.card-item {
  flex: 43%;
  @apply py-5 cursor-pointer bg-grey-lightest rounded px-5 mx-1 my-2 border-b flex flex-col justify-center items-center;
  &--name {
    @apply mb-3;
  }
  &--desc {
    @apply text-xs text-grey-darker font-sans text-left leading-normal;
  }
  &--year {
    @apply mt-2 text-xs rounded text-white bg-teal p-1 self-center;
  }
}
</style>



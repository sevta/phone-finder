<template>
  <div class="card">
    <div class="card-container">
      <card-item v-for="(item , i) in items" :key="i" :item="item"></card-item>
    </div>
    <h3 v-if="items.length == 0">no result</h3>
  </div>
</template>

<script>
import cardItem from "./card-item";
export default {
  name: "card",

  components: {
    cardItem
  },

  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.card {
  padding: 0px 20px;
  @apply p-6 my-2 pt-0 mt-3;
  .card-container {
    @apply flex flex-wrap;
  }
}
</style>


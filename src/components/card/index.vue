<template>
  <div class="card">
    <transition-group
      name="staggered-fade"
      tag="div"
      class="card-container"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <card-item :data-index="i" v-for="(item , i) in items" :key="'item' + i" :item="item"></card-item>
    </transition-group>

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
  },

  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(-20px) scale(.8)";
    },

    enter(el) {
      let delay = el.dataset.index * 60;
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0px) scale(1)";
      }, delay);
    },

    leave(el) {
      let delay = el.dataset.index * 60;
      setTimeout(() => {
        el.style.opacity = 0;
        el.style.transform = "translateY(-20px) scale(.8)";
      }, delay);
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


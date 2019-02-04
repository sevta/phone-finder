<template>
  <div class="card-item">
    <h4 class="card-item--name">{{name}}</h4>
    <p class="card-item--desc">{{desc}}</p>
    <p class="card-item--desc" v-if="desc == null">no description</p>
    <p class="card-item--year">{{releaseYear}}</p>
  </div>
</template>

<script>
export default {
  name: "card-item",

  props: {
    name: {
      type: String,
      required: false
    },

    desc: {
      type: String,
      required: false
    },

    releaseYear: {
      type: Number,
      required: false
    }
  }
};
</script>

<style lang="postcss" scoped>
.card-item {
  width: 100%;
  @apply py-5 px-5 m-1 my-0 pl-0 border-b flex flex-col justify-center;
  &--name {
    @apply mb-3;
  }
  &--desc {
    @apply text-xs text-grey-darker font-sans text-left leading-normal;
  }
  &--year {
    @apply mt-3 text-xs rounded text-white bg-teal p-1 self-start;
  }
}
</style>



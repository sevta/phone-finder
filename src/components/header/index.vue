<template>
  <div class="header">
    <div class="header--text">header</div>
    <form @submit.prevent="onSubmit(searchValue)">
      <div class="input-container">
        <icon name="search"></icon>
        <input type="text" placeholder="Search" class="header--input" v-model="searchValue">
      </div>
      <checkbox :items="years" :on-selected="onYearsSelect" text="All Years"></checkbox>
      <checkbox :items="brands" :on-selected="onBrandsSelect" text="All Brands"></checkbox>
    </form>
  </div>
</template>

<script>
import checkbox from "@/components/checkbox";
export default {
  name: "headerApp",

  components: {
    checkbox
  },

  props: {},

  data() {
    return {
      searchValue: "",
      years: ["2017", "2016", "2015", "2014", "2013"],
      brands: ["samsung", "apple", "lenovo", "xiaomi", "lg"]
    };
  },

  watch: {
    searchValue(val) {
      this.$store.commit("setSearchVal", val);
    }
  },

  methods: {
    onSubmit() {},

    onYearsSelect(value) {
      this.$store.commit("setCheckedYears", value);
    },
    onBrandsSelect(value) {
      this.$store.commit("setCheckedBrands", value);
    }
  }
};
</script>


<style lang="postcss" scoped>
.header {
  @apply bg-white text-grey-darkest py-6 px-6 pb-0;
  &--text {
    @apply text-3xl font-bold capitalize font-primary;
  }
  &--input {
    @apply w-full bg-transparent py-3 outline-none text-grey-darkest;
  }

  .container-btn-checkbox {
    @apply flex justify-between;
    .btn-checkbox {
      @apply text-black rounded mt-2 shadow outline-none bg-white py-2 px-8 text-sm cursor-pointer;
      transition: all 0.3s ease;
      &.active {
        @apply bg-teal text-white;
      }
    }
  }

  .selected-years {
    @apply flex mt-4;
    &--item {
      @apply mr-2 my-4 bg-teal font-bold rounded text-white p-1 px-2 text-xs;
    }
  }

  .checkbox-container {
    @apply bg-white shadow mt-6 p-4;
    label {
      @apply cursor-pointer w-full mb-4 flex items-center;
    }
  }

  .input-container {
    @apply mt-3 mb-2 flex items-center;
    .icon {
      @apply mr-3;
    }
  }

  label:last-child {
    @apply mb-0;
  }
}
</style>

<template>
  <div class="header">
    <div class="header--text">header</div>
    <form @submit.prevent="onSubmit(searchValue)">
      <input type="text" placeholder="Search" class="header--input" v-model="searchValue">
      <button
        class="btn-checkbox"
        @click="expandedYearsCheckbox"
        :class="{active: checkedYears.length !== 0}"
      >{{checkBoxTitle}}</button>
      <div class="checkbox-container" v-if="toggleCheckbox">
        <label v-for="(year ,i)  in years" :key="i">
          <input type="checkbox" :value="year" v-model="checkedYears">
          <span class="text-sm ml-5">{{year}}</span>
        </label>
      </div>
      <div class="selected-years">
        <div
          class="selected-years--item"
          v-for="(year , i) in checkedYears"
          :key="i + 'checkedYears'"
        >{{year}}</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "headerApp",

  props: {
    onSubmit: {
      type: Function,
      required: false
    }
  },

  data() {
    return {
      searchValue: "",
      years: ["2017", "2016", "2015", "2014", "2013"],
      checkedYears: [],
      toggleCheckbox: false,
      checkBoxTitle: "all years"
    };
  },

  watch: {
    searchValue(val) {
      this.$store.commit("setSearchVal", val);
    },

    checkedYears(val) {
      console.log("checked years", val);
      if (val.length) {
        this.checkBoxTitle = "selected";
      } else {
        this.checkBoxTitle = "all years";
      }
    }
  },

  methods: {
    expandedYearsCheckbox() {
      this.toggleCheckbox = !this.toggleCheckbox;
    }
  }
};
</script>


<style lang="postcss" scoped>
.header {
  @apply bg-white text-grey-darkest py-5 px-5 pb-0;
  &--text {
    @apply text-3xl font-bold capitalize font-primary;
  }
  &--input {
    @apply w-full mt-4 py-3 bg-transparent outline-none text-grey-darkest;
  }
  .btn-checkbox {
    @apply text-black mt-4 shadow outline-none bg-white py-2 px-8 text-sm cursor-pointer;
    transition: all 0.3s ease;
    &.active {
      @apply bg-purple text-white;
    }
  }

  .selected-years {
    @apply flex mt-4;
    &--item {
      @apply mr-2 my-4 bg-purple rounded text-white p-1 text-sm;
    }
  }

  .checkbox-container {
    @apply bg-white shadow mt-6 p-4;
    label {
      @apply cursor-pointer w-full mb-4 flex items-center;
    }
  }

  label:last-child {
    @apply mb-0;
  }
}
</style>

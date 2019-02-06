<template>
  <div class="checkbox-wrapper">
    <button @click="expandCheckbox" class="btn-checkbox">{{expandedText}}</button>
    <transition name="fade">
      <div class="expanded-checkbox" v-if="toggleCheckbox">
        <label v-for="(item , i) in items" :key="i">
          <input type="checkbox" :value="item" v-model="selected" @change="onSelected(selected)">
          <span class="expanded-text">{{item}}</span>
        </label>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "checkbox",

  props: {
    items: {
      type: Array,
      required: false
    },

    onSelected: {
      type: Function,
      required: false
    },

    text: {
      type: String,
      required: false,
      default: "All"
    }
  },

  data() {
    return {
      toggleCheckbox: false,
      // items: ["tes1", "tes2", "tes3"],
      selected: [],
      expandedText: this.text
    };
  },

  watch: {
    selected(val) {
      if (val.length) {
        this.expandedText = "selected";
      } else {
        this.expandedText = this.text;
      }
    }
  },

  methods: {
    expandCheckbox() {
      this.toggleCheckbox = !this.toggleCheckbox;
    }
  }
};
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transform: translateY(0px);
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.checkbox-wrapper {
  @apply my-2;
}

.btn-checkbox {
  @apply bg-white py-1 px-2 text-teal mr-10;
}

.expanded-checkbox {
  @apply flex flex-col p-3 shadow;
  label {
    @apply my-2 cursor-pointer;
    input {
      @apply mr-3;
    }
  }
}
</style>


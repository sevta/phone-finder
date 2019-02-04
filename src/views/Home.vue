<template>
  <div class="home">
    <header-app></header-app>
    <card :items="items"></card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import headerApp from "@/components/header";
import card from "@/components/card";

export default {
  name: "home",

  data() {
    return {
      loading: false,
      items: []
    };
  },

  computed: {
    ...mapState(["searchVal", "phones", "filteredPhones"])
  },

  components: {
    headerApp,
    card
  },

  watch: {
    searchVal(value) {
      let filter = this.filterItems(this.phones, value).byName();
      this.items = filter;
      this.$store.commit("setFilteredPhones", filter);
    },

    filteredPhones(val) {
      console.log("filtered phones", val);
    },

    phones(val) {
      this.items = val;
    }
  },

  mounted() {
    if (this.phones.length == 0) {
      this.fetchPhones();
    }
  },

  methods: {
    fetchPhones() {
      this.loading = true;
      fetch("../data/phones.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.loading = false;
          this.$store.commit("setPhones", data.phones);
        })
        .catch(err => console.log(err));
    },

    filterItems(items, value) {
      return {
        byName() {
          return items.filter(
            item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          );
        }
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.home {
  h2 {
    @apply text-white;
  }
}
</style>


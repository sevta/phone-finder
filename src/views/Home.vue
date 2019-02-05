<template>
  <div class="home">
    <header-app></header-app>
    <card :items="items"></card>
    <popup v-if="togglePopup" :title="phoneView.name" :description="phoneView.description"></popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
import headerApp from "@/components/header";
import card from "@/components/card";
import popup from "@/components/popup";
import phones from "../phone.json";
export default {
  name: "home",

  data() {
    return {
      loading: false,
      items: []
    };
  },

  computed: {
    ...mapState([
      "searchVal",
      "phones",
      "filteredPhones",
      "checkedYears",
      "checkedBrands",
      "togglePopup",
      "phoneView"
    ])
  },

  components: {
    headerApp,
    card,
    popup
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
    },

    checkedBrands(val) {
      let filtered = this.filterByBrands(this.phones, val);
      this.items = filtered;

      console.log("filtered", val, filtered);
    },

    checkedYears(years) {
      console.log("checked years", years, this.phones);
      let filtered = this.filterByCategory(this.phones, years);
      this.items = filtered;

      console.log("filtered", filtered);
    },

    togglePopup(val) {
      console.log("toggle popup", val);
    },

    phoneView(val) {
      console.log("phone view", val);
    }
  },

  mounted() {
    // console.log("phones", phones);
    this.items = phones.phones;
    this.$store.commit("setPhones", phones.phones);
    if (this.phones.length == 0) {
      // this.fetchPhones();
    }
  },

  methods: {
    fetchPhones() {
      this.loading = true;
      fetch("../phones.json", {
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

    filterByCategory(items, years) {
      return items.filter(item => {
        if (years.length == 0) {
          return [];
        }

        if (years.indexOf(item.release_year.toString()) == -1) {
          return false;
        }

        return true;
      });
    },

    filterByBrands(items, brands) {
      return items.filter(item => {
        if (brands.length == 0) {
          return [];
        }

        if (brands.indexOf(item.brand.toLowerCase()) == -1) {
          return false;
        }

        return true;
      });
    },

    filterItems(items, value) {
      let $this = this;
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


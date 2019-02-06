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
import { filtered } from "../helper";
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
      this.items = filtered(
        this.phones,
        {
          brand: this.checkedBrands,
          release_year: this.checkedYears
        },
        {
          name: value
        }
      );
    },

    filteredPhones(val) {
      console.log("filtered phones", val);
    },

    phones(val) {
      this.items = val;
    },

    checkedBrands(val) {
      this.items = filtered(
        this.phones,
        {
          brand: val,
          release_year: this.checkedYears
        },
        {
          name: this.searchVal
        }
      );
      console.log("check years", this.checkedYears);
    },

    checkedYears(years) {
      this.items = filtered(
        this.phones,
        {
          brand: this.checkedBrands,
          release_year: years
        },
        {
          name: this.searchVal
        }
      );
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

    // test
    let data = [
      {
        name: "iphone 7",
        brand: "Apple",
        year: 2016
      },
      {
        name: "iphone 8",
        brand: "Apple",
        year: 2017
      },
      {
        name: "iphone x",
        brand: "Apple",
        year: 2018
      },
      {
        name: "iphone xx",
        brand: "Apple",
        year: 2018
      },
      {
        name: "iphone xxx",
        brand: "Apple",
        year: 2018
      },
      {
        name: "galaxy s8",
        brand: "Samsung",
        year: 2017
      },
      {
        name: "galaxy s9",
        brand: "Samsung",
        year: 2018
      },
      {
        name: "mi 5",
        brand: "Xiaomi",
        year: 2015
      }
    ];

    // test
    let result = filtered(
      this.phones,
      {
        year: [2016],
        brand: ["apple", "samsung"]
      },
      {
        name: "ga"
      }
    );

    console.log("result", result);
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


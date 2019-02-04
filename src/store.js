import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchVal: "",
    phones: [],
    filteredPhones: []
  },
  mutations: {
    setSearchVal(state, payload) {
      state.searchVal = payload;
    },

    setPhones(state, payload) {
      state.phones = payload;
    },

    setFilteredPhones(state, payload) {
      state.filteredPhones = payload;
    }
  },
  actions: {}
});

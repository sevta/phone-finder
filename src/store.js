import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchVal: "",
    phones: [],
    checkedYears: [],
    checkedBrands: [],
    filteredPhones: [],
    togglePopup: false,
    phoneView: {}
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
    },

    setCheckedYears(state, payload) {
      state.checkedYears = payload;
    },

    setCheckedBrands(state, payload) {
      state.checkedBrands = payload;
    },

    setTogglePopup(state, payload) {
      state.togglePopup = payload;
    },

    setPhoneView(state, payload) {
      state.phoneView = payload;
    }
  },
  actions: {}
});

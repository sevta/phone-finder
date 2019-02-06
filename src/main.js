import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/tailwind.css";
import "@/assets/css/tailwind.css";
import feather from "vue-icon";

Vue.use(feather, {
  name: "icon"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

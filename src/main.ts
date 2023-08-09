import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Camera from "so_plugin";

Vue.config.productionTip = false;
Vue.use(Camera, { store });

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

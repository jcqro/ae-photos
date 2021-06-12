import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

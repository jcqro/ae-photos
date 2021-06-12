import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    loginerror: "",
    error: "",
    key: JSON.parse(localStorage.getItem("key") || "{}"),
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, key) {
      state.status = "success";
      state.key = JSON.parse(key);
      state.loginerror = "";
    },
    auth_error(state, error) {
      state.status = "error";
      state.loginerror = error;
      state.key = "{}";
    },
    ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    login({ commit }, key) {
      return new Promise((resolve) => {
        commit("auth_request");
        Vue.axios
          .post("/auth", key)
          .then((resp) => {
            let keyJSON = resp.data;
            localStorage.setItem("key", JSON.stringify(keyJSON));
            commit("auth_success", JSON.stringify(keyJSON));
            resolve(resp);
          })
          .catch((err) => {
            if (err.response.data) {
              const error = err.response.data.error;
              commit("auth_error", error);
              localStorage.removeItem("key");
            }
          });
      });
    },
    tokenerror({ commit }, error) {
      return new Promise((resolve) => {
        localStorage.removeItem("key");
        commit("auth_error", error);
        resolve();
      });
    },
    error({ commit }, error) {
      return new Promise((resolve) => {
        commit("ERROR", error);
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.key.token,
    authStatus: (state) => state.status,
    showError: (state) => state.loginerror,
    key: (state) => state.key,
  },
});

import Vue from "vue";
export default {
  getImages(pag) {
    return Vue.axios.get("/images", {
      params: {
        page: String(pag),
      },
    });
  },
};

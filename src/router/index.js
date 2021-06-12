import Vue from "vue";
import VueRouter from "vue-router";
import AgileEnginePhotos from "../components/AgileEnginePhotos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AgileEnginePhotos",
    component: AgileEnginePhotos,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

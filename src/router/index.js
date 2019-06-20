import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
});

export default router;

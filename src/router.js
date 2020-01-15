import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
import Login from "./pages/login";
import Index from "./pages/index";
import Product from "./pages/product";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "index",
          component: Index
        },
        {
          path: "/product/:id",
          name: "/product",
          component: Product
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

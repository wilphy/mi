import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
// import Login from "./pages/login";
import Index from "./pages/index";
// import Product from "./pages/product";
// import Detail from "./pages/detail";
// import Cart from "./pages/cart";
// import Order from "./pages/order";
// import OrderConfirm from "./pages/orderConfirm";
// import OrderList from "./pages/orderList";
// import OrderPay from "./pages/orderPay";
// import AliPay from "./pages/alipay";

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
          component: resolve => require(["./pages/product.vue"], resolve)
        },
        {
          path: "/detail/:id",
          name: "/detail",
          component: resolve => require(["./pages/detail.vue"], resolve)
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./pages/login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./pages/register.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./pages/cart.vue")
    },
    {
      path: "/order",
      name: "order",
      component: () => import("./pages/order.vue"),
      children: [
        {
          path: "confirm",
          name: "order-confirm",
          component: () => import("./pages/orderConfirm.vue")
        },
        {
          path: "list",
          name: "order-list",
          component: () => import("./pages/orderList.vue"),
        },
        {
          path: "pay",
          name: "order-pay",
          component: () => import("./pages/orderPay.vue")
        },
        {
          path: "alipay",
          name: "alipay",
          component: () => import("./pages/alipay.vue")
        }
      ]
    }
  ]
});

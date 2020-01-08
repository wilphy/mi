<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },

  mounted() {
    this.getUser();
    this.getCartCount();
  },

  methods: {
    // 获取用户信息
    getUser() {
      this.axios.get("/user").then(() => {
        //todo 保存到vuex
      });
    },

    //获取购物车数量信息
    getCartCount() {
      this.axios.get("/carts/products/sum").then(() => {
        //todo 保存到vuex
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>

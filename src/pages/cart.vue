<template>
  <div>
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终订单页面为准</span>
      </template>
    </order-header>
    购物车
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from "./../components/NavFooter";
import OrderHeader from "./../components/OrderHeader";
export default {
  name: "index",
  components: {
    NavFooter,
    OrderHeader
  }
};
</script>

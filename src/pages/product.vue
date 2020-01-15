<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>

    <div class="h">123123123</div>
    <div class="h">123123123</div>
    <div class="h">123123123</div>
    <div class="h">123123123</div>
    <div class="h">123123123</div>
    <div class="h">123123123</div>
    <div class="h">123123123</div>
    <div class="h">123123123</div>
  </div>
</template>

<script>
import ProductParam from "../components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParam
  }
};
</script>

<style lang="scss" scoped>
.product {
  .h {
    height: 200px;
    // background-color: green;
  }
  button {
    margin-left: 10px;
  }
}
</style>

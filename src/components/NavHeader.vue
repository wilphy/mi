<template>
  <div class="header">
    <!-- 顶部栏 -->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"
            ><span class="icon-cart"></span>购物车({{ cartCount }})</a
          >
        </div>
      </div>
    </div>

    <!-- 导航栏 -->
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>

        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a href="" target="_blank">
                    <div class="pd-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pd-name">{{ item.name }}</div>
                    <div class="pd-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米 </span>
            <div class="children" style="text-align: center; font-size: 20px">
              暂无此类产品
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="" />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="header-searchbar">
          <div class="wrapper">
            <input type="text" name="keyword" v-model="keyword" />
            <a href="javascript:;" @click="handleSearch"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui"
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
      keyword: "",
    }
  },
  computed: {
    username() {
      return this.$store.state.username
    },
    cartCount() {
      return this.$store.state.cartCount
    },
  },
  filters: {
    currency(val) {
      if (!val) return "0.00"
      return "￥" + val.toFixed(2) + "元"
    },
  },
  mounted() {
    this.getProductList()

    let params = this.$route.params
    if (params && params.from == "login") {
      this.getCartCount()
    }
  },
  methods: {
    //登录
    login() {
      this.$router.push("/login")
    },
    // 退出登录
    logout() {
      this.axios.post("/user/logout").then(() => {
        this.$message.success("退出成功")
        this.$cookie.set("userId", "", { expires: "-1" })
        this.$store.dispatch("saveUserName", "")
        this.$store.dispatch("saveCartCount", "0")
      })
    },
    //获取商品信息
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6,
          },
        })
        .then((res) => {
          this.phoneList = res.list
        })
    },

    //获取购物车数量信息
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res) => {
        // 保存到vuex
        this.$store.dispatch("saveCartCount", res)
      })
    },

    //跳转购物车
    goToCart() {
      this.$router.push("/cart")
    },

    // 搜索
    handleSearch() {
      if (!this.keyword) {
        Message.warning("请输入搜索关键字")
      } else {
        Message.warning("暂无搜索功能")
      }
    },
  },
}
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }

  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-menu {
        display: inline-block;
        width: 600px;
        padding-left: 290px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px 0px rgba(0, 0, 0, 0.1);
            z-index: 10;
            transition: all 0.5s;
            background-color: #fff;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pd-img {
                height: 137px;
              }
              .pd-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pd-price {
                color: $colorA;
              }
            }
          }
        }
      }
      .header-searchbar {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            display: inline-block;
            margin-left: 10px;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              left: -12px;
              top: -16px;
              right: -12px;
              bottom: -16px;
            }
          }
        }
      }
    }
  }
}
</style>

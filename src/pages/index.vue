<template>
  <div class="index">
    <div class="container">
      <!-- 轮播区域 -->
      <div class="swiper-box">
        <!-- 左侧轮播图内的菜单栏 -->
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img v-lazy="sub.img || '/imgs/item-box-1.png'" alt="" />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>

        <!-- 轮播图 -->
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <!-- 第一张和最后一张轮播图不进行懒加载 -->
              <img
                :src="item.img"
                v-if="index == 0 || index == slideList.length - 1"/>
              <img v-else v-lazy="item.img"
            /></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>

      <!-- 广告栏 -->
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="(item, id) in adsList"
          :key="id"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>

      <!-- banner -->
      <div class="banner">
        <a :href="'/#/product/30'">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>

    <!-- 产品栏 -->
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="" />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span :class="{ 'new-pd': j % 2 == 0 }">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addToCart(item.id)">
                    {{ item.price }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>

    <!-- 弹框 -->
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="gotoCart"
      @cancel="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal,
  },
  data() {
    return {
      //轮播图配置
      swiperOption: {
        autoplay: true, //自动播放
        loop: true, //无线循环
        effect: "fade", //切换效果
        fadeEffect: {
          crossFade: true,
        },
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        //控制前进后退
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      //轮播图列表
      slideList: [
        {
          id: "42",
          img: "./imgs/slider/slide-1.jpg",
        },
        {
          id: "42",
          img: "./imgs/slider/slide-2.jpg",
        },
        {
          id: "42",
          img: "./imgs/slider/slide-3.jpg",
        },
        {
          id: "42",
          img: "./imgs/slider/slide-4.jpg",
        },
        {
          id: "42",
          img: "./imgs/slider/slide-5.jpg",
        },
      ],
      //菜单列表
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "RedMi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G",
          },
        ],
        [1, 1, 1, 1],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ],
      //广告列表
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      //手机产品列表
      phoneList: [],

      //弹框
      showModal: false,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    //获取商品数据
    init() {
      this.axios
        .get("/products", {
          params: {
            categaryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },

    //加入购物车
    addToCart(id) {
      this.axios
        .post("/carts", {
          productId: id,
          selected: true,
        })
        .then((res) => {
          this.showModal = true;
          this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
        });
    },

    //跳转去购物页面
    gotoCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: "";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #e5e5e5;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                width: 241px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 26px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin: 26px 0 20px;
  }
  .product-box {
    background-color: $colorJ;
    padding-top: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 42px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            transition: transform 0.5s;
            &:hover {
              transform: scale(1.05);
              border: 1px solid #f06;
            }
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              color: $colorG;
            }
            .new-pd {
              background-color: #7ecf68;
            }
            .kill-pd {
              background-color: #e82626;
            }
            .item-img {
              img {
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: "";
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

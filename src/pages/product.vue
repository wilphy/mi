<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>

    <div class="content">
      <div class="item-video">
        <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI
          精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg"></div>
        <div class="video-box">
          <div class="overlay"></div>
          <div class="video">
            <span class="icon-close"></span>
            <video
              src="/imgs/product/video.mp4"
              muted
              autoplay
              controls="controls"
            ></video>
          </div>
        </div>
      </div>
    </div>

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
@import "../assets/scss/mixin.scss";
.product {
  .h {
    height: 200px;
    // background-color: green;
  }
  button {
    margin-left: 10px;
  }
  .video-box {
    .overlay {
      @include position(fixed);
      background-color: #333;
      opacity: 0.4;
    }
    .video {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      .icon-close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        z-index: 11;
        @include bgImg(20px, 20px, "/imgs/icon-close.png");
      }
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        outline: none;
      }
    }
  }
}
</style>

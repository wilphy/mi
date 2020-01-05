<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <div class="footer-content">
        <p>
          小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 | 音乐 | 路由器 | 米粉卡 |
          政企服务 | 小米天猫店 | 小米集团隐私政策 |
          小米商城隐私政策 | 小米商城用户协议 | 问题反馈 | 廉正举报 | 诚信合规
        </p>
        <p>
          © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号<br />
          京网文[2017]1530-131号 （京）网械平台备字（2018）第00005号
          互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照<br />
          违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉
          本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </p>
      </div>
    </div>
    <div class="footer-link"></div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss">
.footer {
  padding-top: 30px;
  height: 234px;
  border-top: 3px solid #ff6600;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  img {
    width: 70px;
    height: 50px;
    padding: 20px;
  }
}
</style>

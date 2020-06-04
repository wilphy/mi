<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""/></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
              @keyup.enter="login"
            />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <!-- <div class="sms" @click="register">手机短信登录/注册</div> -->
            <div class="reg" @click="goToRegister">去注册</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">111</a><span>|</span>
        <a href="javascript:;">222</a><span>|</span>
        <a href="javascript:;">333</a><span>|</span>
        <a href="javascript:;">444</a>
      </div>
      <p class="copyright">
        Copyright ©2020 mi.com All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      username: "",
      password: "",
      userId: "",
    };
  },
  methods: {
    login() {
      if (this.username.length == 0) {
        Message.warning("请输入用户名");
        return;
      } else {
        let { username, password } = this; //解构赋值
        this.axios
          .post("/user/login", {
            username,
            password,
          })
          .then((res) => {
            this.$cookie.set("userId", res.id, { expires: "Session" });
            // 保存用户名
            this.$store.dispatch("saveUserName", res.username);
            this.$router.push({
              // 1、query传参
              // path: "/index",
              // query: {
              //   from: "login"
              // }

              // 2、param传参
              name: "index",
              params: {
                from: "login",
              },
            });
          });
      }
    },
    // register() {
    //   this.axios
    //     .post("/user/register", {
    //       username: "admin1",
    //       password: "admin1",
    //       email: "admin1@163.com"
    //     })
    //     .then(() => {
    //       Message.info("注册成功");
    //     });
    // }
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="scss">
.login {
  & > .container {
    height: 113px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      height: 576px;
      position: relative;
      .login-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: #ffffff;
        position: absolute;
        bottom: 29px;
        right: 0;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked {
            color: #ff6600;
          }
          .sep-line {
            margin: 0 32px;
          }
        }
        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn {
          width: 100%;
          line-height: 50px;
          margin-top: 10px;
          font-size: 16px;
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color: #ff6600;
          }
          .reg {
            color: #999999;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-link {
      a {
        color: #999999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      margin-top: 13px;
    }
  }
}
</style>

<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""/></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <el-form
          :model="ruleForm"
          :rules="ruleForm"
          ref="ruleForm"
          class="login-form"
        >
          <h3>
            <span class="checked">账号注册</span>
          </h3>
          <el-form-item
            prop="username"
            class="input"
            :rules="[
              { required: true, message: '不能为空', trigger: 'change' },
              {
                min: 3,
                max: 8,
                message: '长度在 3 到 8 个字符',
                trigger: 'change',
              },
            ]"
          >
            <el-input
              ref="inputRef"
              clearable
              type="text"
              placeholder="请输入帐号"
              v-model="ruleForm.username"
            />
          </el-form-item>
          <el-form-item
            prop="password"
            class="input"
            :rules="[
              { required: true, message: '不能为空', trigger: 'change' },
              {
                min: 3,
                max: 8,
                message: '长度在 3 到 8 个字符',
                trigger: 'change',
              },
            ]"
          >
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="ruleForm.password"
              show-password
              clearable
              @keyup.enter.native="register"
            />
          </el-form-item>
          <div class="btn-box">
            <!-- <a href="javascript:;" class="btn" @click="submitForm(formName)">注册</a> -->
            <a href="javascript:;" class="btn" @click="register">注册</a>
          </div>
          <div class="tips">
            <!-- <div class="sms" @click="register">手机短信登录/注册</div> -->
            <div class="reg" @click="goToLogin">去登录</div>
          </div>
        </el-form>
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
      ruleForm: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {
    this.$refs.inputRef.$el.children[0].focus();
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    register() {
      if (
        (this.ruleForm.username.length < 3 &&
          this.ruleForm.username.length > 8) ||
        (this.ruleForm.password.length < 3 && this.ruleForm.password.length > 8)
      ) {
        Message.warning("用户名或密码长度在 3 到 8 个字符");
      } else {
        this.axios
          .post("/user/register", {
            username: this.ruleForm.username,
            password: this.ruleForm.password,
          })
          .then(() => {
            Message.success("注册成功，即将跳转至登录页");
            setTimeout(() => {
              this.$router.push("login");
            }, 1500);
          });
      }
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
          // height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          // input {
          //   width: 100%;
          //   height: 100%;
          //   border: none;
          //   padding: 18px;
          // }
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

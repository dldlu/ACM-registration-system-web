<template>
  <div v-loading="loading">
    <div class="postList">
      <form class="user">
        <span class="font"
        >昵称</span
        >
        <el-input
            placeholder="请填写昵称,不能透露个人信息,请勿输入生僻字、emoji表情等,下同"
            v-model="form.nickname"
            name="Uname"
            v-validate="'required|Uname'"
        ></el-input>

        <span class="error-msg">{{ errors.first("Uname") }}</span>

        <span class="font">姓名</span>
        <el-input
            v-model="form.name"
            placeholder="请填写真实姓名"
            v-validate="'required|Tname'"
            name="Tname"
        ></el-input>
        <span class="error-msg">{{ errors.first("Tname") }}</span>

        <span class="font">性别</span>

        <el-select
            v-model="form.gender"
            placeholder="请选择性别"
            name="sex"
            v-validate="'required'"
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
          </el-option>
        </el-select>
        <span class="error-msg">{{ errors.first("sex") }}</span>

        <span class="font">专业班级</span>
        <el-input
            placeholder="请填写真实班级,例如:计科221,外校同学填学校"
            v-model="form.clas"
            v-validate="'required|class'"
            name="class"
        ></el-input>
        <span class="error-msg">{{ errors.first("class") }}</span>

        <span class="font">学号</span>
        <el-input
            placeholder="请填写真实学号,外校同学填88888888"
            v-model="form.stuid"
            v-validate="'required|number'"
            name="number"
        ></el-input>
        <span class="error-msg">{{ errors.first("number") }}</span>

        <span class="font">手机</span>
        <el-input
            placeholder="请填写有效手机号,外校同学填18888888888"
            v-model="form.phone"
            v-validate="'required|phone'"
            name="phone"
        ></el-input>
        <span class="error-msg">{{ errors.first("phone") }}</span>

        <span class="font">QQ</span>
        <el-input
            v-model="form.qq"
            placeholder="请填写有效QQ"
            v-validate="'required|qq'"
            name="qq"
        ></el-input>
        <span class="error-msg">{{ errors.first("qq") }}</span>

        <span class="font">邮箱</span>
        <el-input
            v-model="form.email"
            placeholder="请填写有效邮箱"
            v-validate="'required|email'"
            name="email"
        ></el-input>
        <span class="error-msg">{{ errors.first("email") }}</span>
      </form>
      <div id="captcha-element"></div>
      <el-button class="btn" @click="back">上一步</el-button>
      <el-button
          ref="captcha"
          id="button"
          class="captcha"
          v-preventReClick
      ></el-button>
      <el-button @click="goSubmit" style="float: right">立即报名</el-button>
    </div>
  </div>
</template>

<script>
import {captchaVerifyCallback,getInstance,onBizResultCallback} from "@/plugins/captcha";

export default {
  data() {
    return {
      captcha:{},
      that: this,
      loading: false,
      ip: "",
      form: {
        nickname: "",
        name: "",
        gender: "",
        clas: "",
        stuid: "",
        phone: "",
        qq: "",
        email: "",
      },
      options: [
        {
          value: "男",
          label: "男",
        },
        {
          value: "女",
          label: "女",
        },
      ],
    };
  },
  methods: {
    goSubmit() {
      // console.log(this)
      this.$validator.validate().then((result) => {
        if (!result) {
          this.$alert(this.errors.all()[0], "提示", {
            confirmButtonText: "确定",
          });
          return false
        } else {
          this.$refs.captcha.$el.click()
          return true
        }
      });
    },
    back() {
      this.$router.push("/apply/reading");
    }
  },
  mounted() {},
};
</script>

<style scoped>
@media only screen
and (min-device-width : 768px){
  .font {
    font-size: 14px;
  }
  .btn {
    margin-bottom: 10px;
  }
  .postList {
    margin-left: 10px;
    margin-right: 10px;
  }
  .error-msg {
    font-size: 14px;
    height: 20px;
    color: red;
  }
  .user {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
}
@media only screen
and (max-device-width : 768px) {
  .font {
    font-size: 14px;
  }
  .btn {
    margin-bottom: 10px;
  }
  .postList {
    margin-left: 10px;
    margin-right: 10px;
  }
  .error-msg {
    font-size: 14px;
    height: 20px;
    color: red;
  }
  .user {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
}
</style>

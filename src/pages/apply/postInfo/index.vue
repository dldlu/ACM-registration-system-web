<template>
  <div v-loading="loading">
    <div class="postList">
      <form class="user">
        <span class="font"
          >昵称（昵称不能透露个人信息）（数据库为utf-8编码，请勿输入奇怪的文字（例如生僻字、emoji表情等），下同</span
        >
        <el-input
          v-model="form.nickname"
          name="Uname"
          v-validate="'required|Uname'"
        ></el-input>

        <span class="error-msg">{{ errors.first("Uname") }}</span>

        <span class="font">姓名</span>
        <el-input
          v-model="form.name"
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

        <span class="font">专业班级（例如：“计科221”，外校同学填学校）</span>
        <el-input
          v-model="form.clas"
          v-validate="'required|class'"
          name="class"
        ></el-input>
        <span class="error-msg">{{ errors.first("class") }}</span>

        <span class="font">学号（外校同学填88888888）</span>
        <el-input
          v-model="form.stuid"
          v-validate="'required|number'"
          name="number"
        ></el-input>
        <span class="error-msg">{{ errors.first("number") }}</span>

        <span class="font">手机（外校同学填18888888888）</span>
        <el-input
          v-model="form.phone"
          v-validate="'required|phone'"
          name="phone"
        ></el-input>
        <span class="error-msg">{{ errors.first("phone") }}</span>

        <span class="font">QQ（连大同学请务必加群811467283）</span>
        <el-input
          v-model="form.qq"
          v-validate="'required|qq'"
          name="qq"
        ></el-input>
        <span class="error-msg">{{ errors.first("qq") }}</span>

        <span class="font">邮箱</span>
        <el-input
          v-model="form.email"
          v-validate="'required|email'"
          name="email"
        ></el-input>
        <span class="error-msg">{{ errors.first("email") }}</span>
      </form>
      <el-button class="btn" @click="back">上一步</el-button>
      <el-button
        class="btn"
        style="float: right"
        @click="goSubmit"
        v-preventReClick
        >立即报名</el-button
      >
    </div>
  </div>
</template>

<script>
import { postInfo } from "@/api";
export default {
  data() {
    return {
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
    back() {
      this.$router.push("/apply/reading");
    },
    goSubmit() {
      this.$validator.validate().then((result) => {
        if (!result) {
          this.$alert(this.errors.all()[0], "提示", {
            confirmButtonText: "确定",
          });
        } else {
          this.ip = returnCitySN["cip"];
          let that = this;
          let info = {};
          info.nickName = this.form.nickname;
          info.studentName = this.form.name;
          info.studentNumber = this.form.stuid;
          info.majorClass = this.form.clas;
          info.sex = this.form.gender;
          info.qq = this.form.qq;
          info.email = this.form.email;
          info.phone = this.form.phone;
          info.lastIp = this.ip;
          grecaptcha.ready(function () {
            grecaptcha.execute("6Ldd11UbAAAAANj6G_YMMMJUlRAo8v7gsy_gP-js", {
                action: "submit",
              })
              .then(async function (token) {
                // Add your logic to submit to your backend server here.
                that.loading = true;
                let result = await postInfo(JSON.stringify(info), token);
                if (result.code === 200) {
                  that.$alert("报名成功", "提示", {
                    confirmButtonText: "确定",
                    callback: () => {
                      that.loading = false;
                    },
                  });
                  await that.$router.push("/inquire");
                } else {
                  that.$alert(result.message, "提示", {
                    confirmButtonText: "确定",
                    callback: () => {
                      that.loading = false;
                    },
                  });
                }
              });
          });
        }
      });
    },
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

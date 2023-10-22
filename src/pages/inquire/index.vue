<template>
  <div
    style="display: flex; flex-direction: column"
    v-loading.fullscreen.lock="loading"
  >
    <div class="title">
      <h1>报名信息查询</h1>
    </div>
    <div
      style="display: flex; flex-direction: row; align-self: center"
      class="search"
    >
      <label class="font">学号：</label>
      <div style="display: flex; flex-direction: column">
        <el-input
          class="input"
          v-model="number"
          v-validate="'required|number'"
          name="number"
        >
        </el-input>
        <span class="error-msg">{{ errors.first("number") }}</span>
      </div>

      <label class="font">姓名：</label>
      <div style="display: flex; flex-direction: column">
        <el-input
          class="input"
          v-model="name"
          v-validate="'required|Tname'"
          name="Tname"
        >
        </el-input>
        <span class="error-msg">{{ errors.first("Tname") }}</span>
      </div>
      <el-button class="btn" @click="inquire" v-preventReClick>查询</el-button>
    </div>

    <div class="main">
      <el-table :data="Info" border style="width: 100%">
        <el-table-column prop="studentNumber" label="学号" >
        </el-table-column>
        <el-table-column prop="studentName" label="姓名" >
        </el-table-column>
        <el-table-column prop="nickName" label="昵称" >
        </el-table-column>
      </el-table>
      <el-table :data="Info" border style="width: 100%">
        <el-table-column prop="sex" label="性别" > </el-table-column>
        <el-table-column prop="majorClass" label="专业班级" >
        </el-table-column>
        <el-table-column prop="qq" label="qq" > </el-table-column>
      </el-table>
        <el-table :data="Info" border style="width: 100%">
          <el-table-column prop="email" label="邮箱" >
          </el-table-column>
        <el-table-column prop="phone" label="手机号" >
        </el-table-column>
        <el-table-column prop="signTime" label="注册时间" > </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { inquireInfo } from "@/api";
export default {
  data() {
    return {
      loading: "",
      number: "",
      name: "",
      Info: [
        {
          studentNumber: "",
          studentName: "",
          nickName: "",
          majorClass: "",
          sex: "",
          qq: "",
          email: "",
          phone: "",
          signTime: "",
        },
      ],
    };
  },
  methods: {
    inquire() {
      this.$validator.validate().then(async (result) => {
        if (!result) {
          await this.$alert(this.errors.all()[0], "提示", {
            confirmButtonText: "确定",
          });
        } else {
          let that = this;
          grecaptcha.ready(function () {
            grecaptcha.execute("6Ldd11UbAAAAANj6G_YMMMJUlRAo8v7gsy_gP-js", {
                action: "submit",
              })
              .then(async function (token) {
                that.loading = true;
                let result = await inquireInfo(that.number, that.name, token);
                if (result.data) {
                  that.$alert("查询成功", "提示", {
                    confirmButtonText: "确定",
                    callback: () => {
                      that.loading = false;
                    },
                  });
                  that.Info[0].studentNumber = result.data.studentNumber;
                  that.Info[0].studentName = result.data.studentName;
                  that.Info[0].nickName = result.data.nickName;
                  that.Info[0].majorClass = result.data.majorClass;
                  that.Info[0].sex = result.data.sex;
                  that.Info[0].qq = result.data.qq;
                  that.Info[0].email = result.data.email;
                  that.Info[0].phone = result.data.phone;
                  that.Info[0].signTime = result.data.signTime;
                } else {
                  that.$alert("无数据", "提示", {
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
};
</script>

<style scoped>
@media only screen
and (min-device-width : 768px){
  .search {
    margin-top: 20px;
  }
  .font {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }
  .title {
    margin-top: 80px;
    align-self: center;
  }
  .input {
    width: 120px;
  }
  .btn {
    height: 40px;
    margin-left: 20px;
    min-width: 60px;
    padding: 5px 8px;
    background: #fff;
    color: #4daff9;
    border: 1px solid #4daff9;
  }
  .btn:hover {
    color: #fff;
    background: #0a90f5;
  }
  .btn:focus {
    color: #fff;
    background: #0a90f5;
    outline: none;
  }
  .error-msg {
    font-size: 14px;
    height: 20px;
    color: red;
  }
  .main {
    margin-top: 30px;
    margin-bottom: 100px;
    align-self: center;
    width: 900px;
    background-color: #fdfdfd;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

}
@media only screen
and (max-device-width : 768px) {
  .search {
    margin-top: 20px;
  }
  .font {
    font-size: 12px;
    height: 40px;
    line-height: 40px;
  }
  .title {
    margin-top: 80px;
    align-self: center;
  }
  .input {
    width: 100px;
  }
  .btn {
    height: 40px;
    margin-left: 20px;
    min-width: 60px;
    padding: 5px 8px;
    background: #fff;
    color: #4daff9;
    border: 1px solid #4daff9;
  }
  .btn:hover {
    color: #fff;
    background: #0a90f5;
  }
  .btn:focus {
    color: #fff;
    background: #0a90f5;
    outline: none;
  }
  .error-msg {
    font-size: 14px;
    height: 20px;
    color: red;
  }
  .main {
    margin-top: 30px;
    margin-bottom: 100px;
    align-self: center;
    width: 350px;
    background-color: #fdfdfd;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
}
</style>

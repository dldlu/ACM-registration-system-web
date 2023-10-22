<template>
  <div style="display: flex; flex-direction: column">
    <div class="step">
      <el-steps :active="act" finish-status="success">
        <el-step title="阅读并同意参赛要求"></el-step>
        <el-step title="填写报名信息"></el-step>
      </el-steps>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      act: 0,
    };
  },
  methods: {
    active() {
      if (
        this.$route.path.substring(this.$route.path.lastIndexOf("/") + 1) ===
        "reading"
      ) {
        this.act = 0;
      } else {
        this.act = 1;
      }
    },
  },
  mounted() {
    this.active();
  },
  watch: {
    $route() {
      this.active();
    },
  },
};
</script>

<style scoped>
@media only screen
and (min-device-width : 768px){
  .step {
    margin-top: 80px;
    align-self: center;
    width: 1000px;
  }
  .main {
    margin-top: 30px;
    margin-bottom: 100px;
    align-self: center;
    width: 1000px;
    min-height: 700px;
    background-color: #fdfdfd;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
}
@media only screen
and (max-device-width : 768px) {
  .step {
    margin-top: 80px;
    align-self: center;
    width: 350px;
  }
  .main {
    margin-top: 30px;
    margin-bottom: 100px;
    align-self: center;
    width: 350px;
    min-height: 700px;
    background-color: #fdfdfd;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
}

</style>

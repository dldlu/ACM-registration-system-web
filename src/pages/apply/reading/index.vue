<template>
  <div style="display: flex; flex-direction: column">
    <div style="display: flex; flex-direction: column">
      <div class="text" >
        比赛时间：<br />
        热身赛:{{ words.content.rs }}<br />
        正式赛:{{ words.content.zs }}<br />
        想参赛的外校同学请发邮件到support@dluacm.cn商讨相关事宜。<br />
        参赛选手必须仔细阅读<a :href="words.url" target="_blank"
          >参赛要求</a
        >，了解比赛规则，并已学习评测系统的使用。
      </div>
      <img
        src="http://dluacm.cn/wp-content/uploads/2022/02/wp_editor_md_b96983a26d11ad6c7bf3c65a3fb804c8.jpg"
        data-original="http://dluacm.cn/wp-content/uploads/2022/02/wp_editor_md_b96983a26d11ad6c7bf3c65a3fb804c8.jpg"
        alt=""
        style=""
      /><br />
      <img
        src="http://dluacm.cn/wp-content/uploads/2022/02/wp_editor_md_49cc9630ec167cce9a285af092ded8db.jpg"
        data-original="http://dluacm.cn/wp-content/uploads/2022/02/wp_editor_md_49cc9630ec167cce9a285af092ded8db.jpg"
        alt=""
        style=""
      /><br />
      <img
        src="http://dluacm.cn/wp-content/uploads/2022/02/wp_editor_md_0e87ce743f932f10ba32d8ce3dd25e6d.jpg"
        data-original="http://dluacm.cn/wp-content/uploads/2022/02/wp_editor_md_0e87ce743f932f10ba32d8ce3dd25e6d.jpg"
        alt=""
        style=""
      /><br />
      <img
        src="http://dluacm.cn/wp-content/uploads/2022/02/wp_editor_md_332911e17a6a9e27bb1de6bee276b451.jpg"
        data-original="http://dluacm.cn/wp-content/uploads/2022/02/wp_editor_md_332911e17a6a9e27bb1de6bee276b451.jpg"
        alt=""
        style=""
      /><br />
    </div>
    <el-checkbox class="check" v-model="checked" @change="chg"
      >我已仔细阅读并同意以上要求</el-checkbox
    >
    <el-button class="next" :disabled="disable" @click="next">下一步</el-button>
  </div>
</template>

<script>
//获取外部链接
let confapi = window.server;
console.log(confapi)

export default {
  data() {
    return {
      words: confapi,
      checked: false,
      disable: true,
    };
  },
  methods: {
    chg() {
      this.disable = this.checked !== true;
    },
    next() {
      this.$router.push("/apply/postInfo");
    },
  },
};
</script>

<style scoped>
@media only screen
and (min-device-width : 768px){
  .text {
    margin-left: 10px;
  }
  img {
    align-self: center;
    width: 950px;
  }
  .check {
    align-self: center;
  }
  .next {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 120px;
    align-self: center;
  }
}
@media only screen
and (max-device-width : 768px) {
  .text {
    margin-left: 10px;
  }
  img {
    align-self: center;
    width: 300px;
  }
  .check {
    align-self: center;
  }
  .next {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 120px;
    align-self: center;
  }

}

</style>

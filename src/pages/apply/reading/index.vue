<template>
  <div style="display: flex; flex-direction: column">
    <div style="display: flex; flex-direction: column">
      <div class="text" v-html="words.content">
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
    <el-checkbox class="check" v-model="checked" @change="chg">
      我已仔细阅读并同意
    </el-checkbox><a v-bind:href="words.url" style="align-self: center;text-decoration: none">《参赛要求》</a>
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

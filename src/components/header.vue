<template>
  <div class="menu">
    <el-row>

        <el-menu
            :default-active="act"
            class="el-menu-demo"
            mode="horizontal"
            @select="turn"
        >
            <el-menu-item index="apply">
              <i class="el-icon-user-solid"></i>
              <span slot="title">报名</span>
            </el-menu-item>
            <el-menu-item index="inquire" class="item">
              <i class="el-icon-s-tools"></i>
              <span slot="title">查询</span>
            </el-menu-item>


          <span class="title">ACM校赛报名系统</span>
        </el-menu>


    </el-row>
  </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return{
      act:''
    }
  },
  methods:{
    turn(indexPath){
      this.$router.push(`/${indexPath}`);
    },
    active(){
      if(this.$route.path.substring(this.$route.path.lastIndexOf('/')+1)==='reading'||this.$route.path.substring(this.$route.path.lastIndexOf('/')+1)==='postInfo'){
        return 'apply'
      }else{
        return 'inquire'
      }
    }

  },
  mounted() {
    this.act=this.active()
},
  watch: {
    $route() {
      this.active()
    },
  },
}
</script>

<style scoped>
@media only screen
and (min-device-width : 768px){
  div{
    width: 100%;
    z-index: 1000;
    position: fixed;

  }
  .title{
    float: right;

    font-size: 40px;
  }

}
@media only screen
and (max-device-width : 768px) {
  div{
    width: 100%;
    z-index: 1000;
    position: fixed;

  }
  .title{
    display: none;
    float: right;

    font-size: 40px;
  }
}
</style>

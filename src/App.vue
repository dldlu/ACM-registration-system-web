<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>


<script>
import Header from "@/components/header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
body {
  background-color: #eee;
}
.grecaptcha-badge {
  display: none;
}
</style>

<template>
    <el-menu router :default-active="activeRoutePath" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/group">群组</el-menu-item>
        <el-menu-item index="/order">订单</el-menu-item>
    </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeRoutePath: '',
      };
    },
    mounted(){
      console.log(this.$router.options.routes[1].children);
      this.activeRoutePath = this.$route.path
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
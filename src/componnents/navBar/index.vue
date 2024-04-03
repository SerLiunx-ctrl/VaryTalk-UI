<template>
  <div>
    <el-menu router :default-active="activeRoutePath" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/index">首页</el-menu-item>
      <el-menu-item index="/group">群组</el-menu-item>
      <el-menu-item index="/order">订单</el-menu-item>
      <div class="login">
        <el-button type="primary" @click="$refs.loginForm.openDialog()" style="">登录</el-button>
        <el-button type="success" style="">去注册！</el-button>
      </div>
    </el-menu>
    <loginForm ref="loginForm"/>
  </div>
</template>
<script>

import loginForm from "@/componnents/home/loginForm.vue";

export default {
  components: {
    loginForm,
  },

  data() {
    return {
      activeRoutePath: '',
    };
  },
  mounted() {
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

<style lang="scss" scoped>
.el-menu-demo {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  width: 100vw;
  height: 60px;
  padding: 0 15vw;
}
.login{
  position: absolute;
  top: 0;
  right: 15vw;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>

<template>
  <el-dialog
      title="提示"
      :visible.sync="open"
      width="30%">
    <el-form :label-position="labelPosition" label-width="80px" :model="loginForm">
      <el-form-item label="账号">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="loginForm.captcha"></el-input>
      </el-form-item>
      <div>{{ captcha }}</div>
    </el-form>
  </el-dialog>
</template>

<script>

import {getLoginCaptchaApi} from '@/common/auth.js'

export default {
  data() {
    return {
      open: false,
      labelPosition: 'right',
      //本次会话id
      uuid: null,
      //验证码
      captcha: null,
      loginForm: {
        username: null,
        password: null,
        uuid: null,
        captcha: null
      }
    };
  },

  created() {

  },

  methods:{
    //重置表单信息
    reset(){
      this.loginForm = {
        username: null,
        password: null,
        uuid: null,
        captcha: null
      }
    },

    //获取验证码
    getCaptcha(){
      // 执行查询
      getLoginCaptchaApi().then((res) => {
        this.uuid = res.uuid;
        this.captcha = res.captchaCode;
      }).catch(err => {

      })
    },

    //显示登录窗口
    openDialog(){
      this.getCaptcha();
      this.reset();
      this.open = true
    }
  }
}
</script>

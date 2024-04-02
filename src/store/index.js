import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import user from "./user/index";

export default new Vuex.Store({
  state: {
    // 状态数据定义
  },
  mutations: {
    // 状态更改函数定义
  },
  actions: {
    // 异步操作和逻辑封装
  },
  getters: {
    // 计算派生状态
  },
  modules: { user },
});

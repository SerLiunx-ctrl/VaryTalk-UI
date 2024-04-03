import Vue from "vue";
import App from "./App.vue";

//路由引入
import router from "./router";

//element引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//全局样式引入
import '@/assets/style/global.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

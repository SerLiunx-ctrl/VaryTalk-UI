import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      component: () => import("@/pages/index.vue"),
      children: [
        {
          path: "/index",
          component: () => import("@/pages/home/index.vue"),
          meta: { title: "首页" },
        },
        {
          path: "/group",
          component: () => import("@/pages/group/index.vue"),
          meta: { title: "群组" },
        },
        {
          path: "/order",
          component: () => import("@/pages/order/index.vue"),
          meta: { title: "订单" },
        }
      ],
    },
  ],
});

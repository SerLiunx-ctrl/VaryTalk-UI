const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/dev-api": {
        target: "http://192.168.2.160:9999",
        // pathRewrite: {
        //   "^/api": "",
        // },
        ws: false, // 转发websocket
        changeOrigin: true, // 更改来源
      },
    },
  },
});

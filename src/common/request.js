import axios from "axios";

const baseURL = "http://192.168.2.160:9999/dev-api"; //IP

// axios实例
const service = axios.create({
  baseURL, // api的base_url
  timeout: 200000, // 请求超时时间
});
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 可以在这里添加请求头等信息
    return config;
  },
  (error) => {
    // 请求错误处理
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做处理，例如只返回data部分
    const res = response.data;
    // 如果返回的状态码为200，说明成功，可以直接返回数据
    if (res.status === 200) {
      return res.data;
    } else {
      // 其他状态码都当作错误处理
      // 可以在这里进行错误处理或者提示
      return Promise.reject(res.message || "error");
    }
  },
  (error) => {
    // 服务器状态码不为200时的错误处理
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;

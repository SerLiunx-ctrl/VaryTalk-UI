import request from "./request.js";

export const get = () => {
  return request({
    url: "/auth/captcha",
    method: "GET"
  });
};

export const post = (data) => {
  return request({
    url: "",
    method: "POST",
    data,
  });
};

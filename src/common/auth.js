import request from "./request.js";

export function getLoginCaptchaApi() {
    return request({
        url: "/auth/captcha",
        method: "GET"
    });
}

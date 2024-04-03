import request from "./request.js";

export function getForumCategoryApi() {
    return request({
      url: "/forum-category/list-simple",
      method: "GET"
    });
}

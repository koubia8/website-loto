import request from "@/utils/request";

export function listPostCommunity() {
  return request({
    url: "/posts",
    method: "get",
  });
}

export function savePostCommunity(data) {
  return request({
    url: "/posts",
    method: "post",
    data,
  });
}

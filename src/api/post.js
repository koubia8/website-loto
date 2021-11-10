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

export function postComment(data) {
  return request({
    url: "/comments",
    method: "post",
    data,
  });
}

export function getCommentPost(postId) {
  return request({
    url: `/comments/post/${postId}`,
    method: "get",
  });
}

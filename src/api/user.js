import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/auth/login",
    method: "post",
    data,
  });
}

export function newUser(data) {
  return request({
    url: "/auth/signup",
    method: "put",
    data,
  });
}

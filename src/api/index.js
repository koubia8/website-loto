import request from "@/utils/request";

export function getAllMatch() {
  return request({
    url: "/teams-ranks",
    method: "get",
  });
}

export function getAllStreams() {
  return request({
    url: "/stream-events",
    method: "get",
  });
}

export function getAllVirtualSoccer() {
  return request({
    url: "/virtual-soccer",
    method: "get",
  });
}

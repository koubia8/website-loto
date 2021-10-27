import request from "@/utils/request";

export function getAllMatch() {
  return request({
    url: "/teams-ranks",
    method: "get",
  });
}

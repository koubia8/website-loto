import md5 from "md5";
import { getUsername } from "./storage";

export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function upperCase(string) {
  return string.toUpperCase();
}
const username = getUsername() !== undefined ? getUsername() : "guest";
console.log(username);
export function uchatData() {
  let time = Date.now();
  let icone = "../assets/guest.gif";
  let has = md5("9a6f4afab3716556b8f58a6af6bb70e5");
  return `nick ${username} |other nosync|room sport-tv|time ${time}|hash ${has} | icons ${icone}`;
}

import Cookies from "js-cookie";
const TokenKey = "token_access";
const Username = "UserName";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getUsername() {
  return Cookies.get(Username);
}

export function setUsername(username) {
  return Cookies.set(Username, username);
}

export function removeUsername() {
  return Cookies.remove(Username);
}

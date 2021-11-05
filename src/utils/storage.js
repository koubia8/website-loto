const TokenKey = "token_access";
const Username = "UserName";

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}

export function getUsername() {
  return localStorage.getItem(Username);
}

export function setUsername(username) {
  return localStorage.setItem(Username, username);
}

export function removeUsername() {
  return localStorage.removeItem(Username);
}

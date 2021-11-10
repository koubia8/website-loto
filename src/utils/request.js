import axios from "axios";
import { getToken } from "@/utils/storage";
// creation du service axios instance

const service = axios.create({
  baseURL: "http://139.59.251.142:3000/",
  timeout: 60000,
});

// intercepteur de request

service.interceptors.request.use(
  (config) => {
    if (getToken() !== undefined) {
      config.headers["Authorization"] = "Bearer " + getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

// intercepteur de la reponse

service.interceptors.response.use(
  (response) => {
    const res = response;
    if (res.status !== 200) {
      // complete avec des traitement
      return Promise.reject("error");
    } else {
      return res;
    }
  },
  (error) => {
    const errorMessage = { error: error.response };
    return Promise.reject(errorMessage);
  }
);

export default service;

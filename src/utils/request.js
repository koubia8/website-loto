import axios from "axios";

// creation du service axios instance

const service = axios.create({
  baseURL: "https://kr-api.sn:3001",
  timeout: 40000,
});

// intercepteur de request

service.interceptors.request.use(
  (config) => {
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

import axios from "axios";
import { getCookie } from "utils/cookie";

const api = axios.create({
  baseURL: "http://localhost:3400/",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const accToken = getCookie("accessToken");
    if (accToken) {
      request.headers["Authorization"] = `bearer ${accToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

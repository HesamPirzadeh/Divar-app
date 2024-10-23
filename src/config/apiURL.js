import axios from "axios";
import { newAccToken } from "services/refreshToken";
import { setCookie } from "utils/cookie";
import { getCookie } from "utils/cookie";

const api = axios.create({
  baseURL: "http://localhost:3400/",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  async (request) => {
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

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const result = await newAccToken();
      if (!result?.response) return;
      setCookie(result.response.data);

      return api(originalRequest);
    }
  }
);

export default api;

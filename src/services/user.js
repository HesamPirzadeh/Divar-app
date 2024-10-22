import api from "config/api";
import { getCookie } from "utils/cookie";

console.log(getCookie("accessToken"))

const getProfile = () => api.get("user/whoami");

export { getProfile };

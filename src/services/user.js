import api from "config/apiURL";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

const getDashboard =()=> api.get("post/my")

export { getProfile ,getDashboard};

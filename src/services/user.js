import api from "config/apiURL";

const getProfile = () => api.get("user/whoami");

export { getProfile };

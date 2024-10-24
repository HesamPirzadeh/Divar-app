import api from "config/apiURL";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

export { getProfile };

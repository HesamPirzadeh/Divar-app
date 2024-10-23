import api from "config/apiURL";
import { getCookie } from "utils/cookie";

const newAccToken = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;

  try {
    const response = await api.post("auth/check-refresh-token", { refreshToken });
    console.log(response)
    return { response };
  } catch (error) {
    return { error };
  }
};

export { newAccToken };

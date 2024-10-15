import api from "../config/api";

const sendOtp = async (mobiles) => {
  console.log(mobiles);
  try {
    const responses = await api.post("auth/send-otp", { mobiles });
    return { responses };
  } catch (error) {
    return { error };
  }
};

export { sendOtp };

import api from "../config/api";

const sendOtp = async (mobile) => {
  console.log(mobile);
  try {
    const response = await api.post("auth/send-otp", { mobile});
    
    return {response}
  } catch (error) {
    return { error };
  }
  
};

export { sendOtp };

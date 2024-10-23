import api from "config/apiURL";


const sendOtp = async (mobile) => {
  console.log(mobile);
  try {
    const response = await api.post("auth/send-otp", { mobile });
    console.log(response);
    return { response };
  } catch (error) {
    return { error };
  }
};

const checkOtp = async (mobile, code) => {
  console.log(mobile, code);
  try {
    const responses = await api.post("auth/check-otp", { mobile, code });
    console.log(responses)
    return { responses };
  } catch (error) {
    return { error };
  }
};

export { sendOtp, checkOtp };

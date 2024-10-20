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

const checkOtp = async (mobile,code)=>{
  console.log(mobile,code)
  try {
    const responses = await api.post("auth/check-otp",{mobile,code})
    return {responses}
  } catch (error) {
    return {error}
  }
}



export { sendOtp,checkOtp };

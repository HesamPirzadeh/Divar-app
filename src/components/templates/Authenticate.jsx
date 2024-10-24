import { setCookie } from "src/utils/cookie";
import { checkOtp } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";

function Authenticate({ sms, setSms, setStep, mobile }) {
  const { refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getProfile,
  });

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log({ sms, mobile });
    if (sms.length !== 5) return;

    const { responses, error } = await checkOtp(mobile, sms);
    console.log({ responses });
    if (responses) setCookie(responses.data);
    navigate("/");
    refetch()
    if (error) console.log(error.message);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>تایید کد اس ام اس شده</p>
        <span>{`${mobile}`}-کد فرستاده شده به شماره </span>
        <br />
        <label htmlFor="input">کد تایید را وارد کنید</label>
        <input
          type="text"
          id="input"
          placeholder="کد را وارد کنید"
          value={sms}
          onChange={(e) => setSms(e.target.value)}
        />
        <button onClick={() => setStep(1)}>تغییر شماره</button>
        <button type="submit">تایید کد</button>
      </form>
    </div>
  );
}

export default Authenticate;

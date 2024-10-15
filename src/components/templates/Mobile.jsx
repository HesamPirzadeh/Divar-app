import React from "react";
import { sendOtp } from "../../services/auth";

function Mobile({ setMobile, mobiles, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobiles.length !== 11) return;

    const { response, error } = await sendOtp(mobiles);
    if (response) setStep(2);
    console.log({ response,error });
    if (error) console.log(error.message);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>وزود به حساب کاربری</p>
        <p>
          برای استفاده از امکانات دیوار,لطفا شماره موبایل خود را وارد کنید. کد
          تایید به این شماره پیامک خواهد شد.
        </p>
        <label htmlFor="input">شماره را وارد کنید</label>
        <input
          type="text"
          id="input"
          placeholder="شماره را وارد کنید..."
          value={mobiles}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">کلیک کنید</button>
      </form>
    </div>
  );
}

export default Mobile;

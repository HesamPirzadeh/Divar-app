import React from "react";
import { sendOtp } from "../../services/auth";

import styles from "css/Mobile.module.css"

function Mobile({ setMobile, mobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    if (response)setStep(2);
    console.log({ response,error });
    if (error) console.log(error.message);
  };
  return (
    <div>
      <form onSubmit={submitHandler} className={styles.form}>
        <p>ورود به حساب کاربری</p>
        <span>
          برای استفاده از امکانات دیوار,لطفا شماره موبایل خود را وارد کنید. کد
          تایید به این شماره پیامک خواهد شد.
        </span>
        <label htmlFor="input">شماره را وارد کنید</label>
        <input
          type="text"
          id="input"
          placeholder="شماره را وارد کنید..."
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default Mobile;

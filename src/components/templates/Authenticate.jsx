import React from "react";

function Authenticate({ sms, setSms, setStep, mobile }) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ sms, mobile });
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

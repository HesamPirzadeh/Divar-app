import React, { useState } from "react";

function Category() {
  const [input, setInput] = useState({ name: "", icon: "", slug: "" });

  const changeHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(input)
  };

  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3>دسته بندی </h3>
      <label htmlFor="name">نام دسته بندی را وارد کنید</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit">ایجاد</button>
    </form>
  );
}

export default Category;

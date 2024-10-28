import React, { useState } from "react";

import styles from "css/Category.module.css";
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "services/admin";

function Category() {
  const [input, setInput] = useState({ name: "", icon: "", slug: "" });
  const { mutate, isLoading, error, data } = useMutation(addCategory);

  console.log({ isLoading, error, data });

  const changeHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.name || !input.slug || !input.icon) return;

    mutate(input);
    console.log(input);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      {error && <p>مشکلی پیش آمده است</p>}
      <h3>دسته بندی </h3>
      {data?.status === 201 && <p>دسته بندی ایجاد شد</p>}

      <label htmlFor="name">نام دسته بندی را وارد کنید</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit" disabled={isLoading}>
        ایجاد
      </button>
    </form>
  );
}

export default Category;

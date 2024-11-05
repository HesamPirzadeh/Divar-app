import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCategory } from "services/admin";

import styles from "css/AddPost.module.css";
import axios from "axios";
import { getCookie } from "utils/cookie";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: "",
    city: "",
    category: null,
    file: null,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: getCategory,
  });

  console.log(data);

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "file") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      setForm({ ...form, [name]: e.target.files[0] });
    }
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log(form);

    const newForm = new FormData();
    for (const i in form) {
      newForm.append(i,form[i]);
    }
    const token = getCookie("accessToken");

    axios
      .post(`http://localhost:3400/post/create`, newForm, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `brear ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>ایجاد آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />
      <label htmlFor="amount">قیمت</label>
      <input type="number" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="file">عکس</label>
      <input type="file" id="file" name="file" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
}

export default AddPost;

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCategory } from "services/admin";
import axios from "axios";
import { getCookie } from "utils/cookie";
import toast from "react-hot-toast";

import styles from "css/AddPost.module.css";
function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: "",
    city: "",
    category: null,
    file: null,
  });
  console.log(getCookie("accessToken"))

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

  const addHandler = async (e) => {
    e.preventDefault();
    console.log(form);

    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");

    const BASE_URL = "http://localhost:3400/";

    axios
      .post(`${BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => console.log(toast.success(res.data.message)))
      .catch((error) => toast.error("با مشکل برخورد"));
  }

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

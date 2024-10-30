import { useQuery } from "@tanstack/react-query";
import Loader from "module/Loader";
import React from "react";
import { getCategory } from "services/admin";

import styles from "css/CategoryList.module.css";
import { deleteCategory } from "services/admin";

function CategoryList() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["admin"],
    queryFn: getCategory,
  });
  

  console.log(data);

  const deleteHandler = (e) => {
    const filterdeItem = data?.data.filter((i) => {
      i._id === e.target.id;
    });
    if (filterdeItem) deleteCategory(e.target.id);
  };

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <h3>{i.name}</h3>
            <img src={`${i.icon}.svg`} />
            <button id={i._id} onClick={deleteHandler}>
              حذف
            </button>
            <p>{i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;

import { useQuery } from "@tanstack/react-query";
import Loader from "module/Loader";
import React from "react";
import { getCategory } from "services/admin";

import styles from "css/CategoryList.module.css"

function CategoryList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin"],
    queryFn: getCategory,
  });
  console.log(data);



  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <h3>{i.name}</h3>
            <img src={`${i.icon}.svg`} />
            <p>{i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;

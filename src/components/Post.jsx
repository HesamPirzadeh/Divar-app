import { useQuery } from "@tanstack/react-query";
import Loader from "module/Loader";
import React from "react";
import { getDashboard } from "services/user";
import { sp } from "utils/number";

import styles from "../css/Post.module.css";

function Post() {
  const baseURL = "http://localhost:3400/";
  const { data, isLoading } = useQuery({
    queryKey: ["post-dash"],
    queryFn: getDashboard,
  });
  console.log(data);
  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>آگهی های شما</h3>
          {data.data.posts.map((i) => (
            <div key={i._id} className={styles.posts}>
              <div>
                <p> {i.options.title}</p>
                <span>{i.options.content}</span>
              </div>
              <div className={styles.price}>
                <p>{new Date(i.createdAt).toLocaleDateString("fa-IR")}</p>
                <span>{sp(i.amount)} تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Post;

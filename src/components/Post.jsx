import { useQuery } from "@tanstack/react-query";
import Loader from "module/Loader";
import React from "react";
import { getDashboard } from "services/user";

function Post() {
  const baseURL = "http://localhost:3400/";
  const { data, isLoading } = useQuery({
    queryKey: ["post-dash"],
    queryFn: getDashboard,
  });
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data.data.posts.map((i) => (
            <div key={i._id}>
              <h3>آگهی های شما</h3>
              <div>
                <p> {i.options.title}</p>
                <span>{i.options.content}</span>
                <div>
                  <p>{i.createdAt}</p>
                  <span>{i.amount} تومان</span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Post;

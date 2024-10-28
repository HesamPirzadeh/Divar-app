import { useQuery } from "@tanstack/react-query";
import Category from "components/templates/Category";
import React from "react";
import { category } from "services/admin";

function Admin() {
  // const {data,isLoading,error} = useQuery({ queryKey: ["admin"], queryFn: category });
  // console.log({data,error,isLoading})
  return (
    <div>
      <Category />
    </div>
  );
}

export default Admin;

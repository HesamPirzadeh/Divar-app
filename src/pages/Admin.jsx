import { useQuery } from "@tanstack/react-query";
import Category from "components/templates/Category";
import CategoryList from "components/templates/CategoryList";
import React from "react";

function Admin() {
  
  return (
    <div>
      <CategoryList/>
      <Category />
    </div>
  );
}

export default Admin;

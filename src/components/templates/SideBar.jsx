import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";

import styles from "../../css/SideBar.module.css"

function SideBar({data}) {
  
  console.log(data);


  return (
    <div className={styles.sidebar}>
      <h4>دسته بندی</h4>
      <div>
        {data?.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

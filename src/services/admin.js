import api from "config/apiURL";
import { getCookie } from "utils/cookie";


const addCategory = (data) => api.post("category", data);

const getCategory = () => api.get("category");

const deleteCategory = (id) => api.delete(`category/${id}`);



export { addCategory, getCategory, deleteCategory,  };

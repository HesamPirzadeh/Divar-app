import api from "config/apiURL";

const addCategory =(data) => api.post("category",data)

const getCategory =()=> api.get("category")




export {addCategory,getCategory}
import api from "config/apiURL";

const category =async (data) => await api.post("/category",data)


export {category}
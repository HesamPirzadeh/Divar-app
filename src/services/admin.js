import api from "config/apiURL";

const category = async () => {
  try {
    const res = await api.get("/category")
  console.log(res)
  return {res}
  } catch (error) {
    return{error}
  }
};


export {category}
import axios from "axios";

export const productLoader = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data; 
};

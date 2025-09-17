import axios from "axios";

export const cartLoader = async () => {
  const response = await axios.get("http://localhost:3000/cart");
  return response.data;
};

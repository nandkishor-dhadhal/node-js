import axios from "axios";
import type { LoaderFunctionArgs } from "react-router-dom";

export const editProductLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  const response = await axios.get(`http://localhost:3000/edit-product/${id}`);
  return response.data;
};

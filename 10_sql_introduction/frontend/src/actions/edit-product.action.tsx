import axios from "axios";
import { redirect } from "react-router-dom";

export const editProductAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const id = formData.get("id");

  const productData = {
    name: formData.get("name"),
    image: formData.get("image"),
    description: formData.get("description"),
    isInCart: false,
  };

  await axios.patch(`http://localhost:3000/edit-product/${id}`, productData);

  return redirect("/");
};

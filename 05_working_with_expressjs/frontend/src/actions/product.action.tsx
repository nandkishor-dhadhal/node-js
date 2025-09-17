import axios from "axios";
import { redirect } from "react-router-dom";

export const productAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const product = {
    name: formData.get("name"),
    image: formData.get("image"),
    description: formData.get("description"),
  };

  await axios.post("http://localhost:3000/add-product", product);

  return redirect("/");
};

import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  isInCart: boolean;
}
const Products = () => {
  const navigate = useNavigate();
  const products = useLoaderData() as Product[];
  const addToCartButtonHandler = async (id: number) => {
    await axios.post(`http://localhost:3000/add-in-cart/${id}`);
    navigate("cart");
  };
  const editButtonHandler = async (id: number) => {
    console.log(id);
    navigate(`edit-product/${id}`);
  };
  const deleteButtonHandler = async (id: number) => {
    const verifyDeleteAction = confirm("Are you sure?");
    if (verifyDeleteAction) {
      try {
        await axios.delete(`http://localhost:3000/delete-product/${id}`);
        location.reload();
        alert("Product deleted successfully.");
      } catch (error) {
        console.error("Failed to delete product:", error);
        alert("Error deleting product.");
      }
    }
  };

  const productsLength = products.length;
  return productsLength > 0 ? (
    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded shadow p-4 flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="mt-2 text-gray-600 text-center">
            {product.description}
          </p>
          <div>
            <button
              className="border-2 p-2 m-2 hover:bg-amber-200 cursor-pointer"
              onClick={() => {
                addToCartButtonHandler(product.id);
              }}
            >
              Add to Cart
            </button>
            <button
              className="border-2 p-2 m-2 hover:bg-amber-200 cursor-pointer"
              onClick={() => {
                editButtonHandler(product.id);
              }}
            >
              Edit
            </button>
            <button
              className="border-2 p-2 m-2 hover:bg-amber-200 cursor-pointer"
              onClick={() => {
                deleteButtonHandler(product.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex justify-center">
      <h1>Product Not Found</h1>
    </div>
  );
};

export default Products;

import axios from "axios";
import { useLoaderData } from "react-router-dom";

interface Product {
  id: number;
  isInCart: boolean;
  name: string;
  image: string;
  description: string;
}

const removeFromCartHandler = async (item: Product) => {
  try {
    await axios.post(`http://localhost:3000/remove-from-cart/${item.id}`);
    window.location.reload();
  } catch (error) {
    console.error("Failed to remove from cart:", error);
  }
};

const Cart = () => {
  const products = useLoaderData() as Product[];
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
              onClick={() => removeFromCartHandler(product)}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex justify-center">
      <h1>No Products in Cart</h1>
    </div>
  );
};

export default Cart;

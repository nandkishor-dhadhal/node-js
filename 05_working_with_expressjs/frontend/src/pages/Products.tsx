import { useLoaderData } from "react-router-dom";

interface Product {
  name: string;
  image: string;
  description: string;
}

const Products = () => {
  const products = useLoaderData() as Product[];

  return (
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
          <p className="mt-2 text-gray-600 text-center">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;

import { Form, useLoaderData } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  isInCart: boolean;
}

const EditProduct = () => {
  const productItem = useLoaderData() as Product;

  return (
    <Form
      method="PATCH"
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Product</h2>

      <input type="hidden" name="id" value={productItem.id} />

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Product Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={productItem.name}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Image URL
        </label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={productItem.image}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          defaultValue={productItem.description}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-400 text-white py-2 rounded hover:bg-amber-500 transition"
      >
        Save Changes
      </button>
    </Form>
  );
};

export default EditProduct;

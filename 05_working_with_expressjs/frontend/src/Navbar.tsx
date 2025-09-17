import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-amber-200 p-4 shadow-md">
      <div className="container mx-auto flex items-center space-x-6">
        <Link
          to="/add-product"
          className="text-gray-800 font-medium hover:text-gray-600 transition"
        >
          Add Product
        </Link>
        <Link
          to="/"
          className="text-gray-800 font-medium hover:text-gray-600 transition"
        >
          Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

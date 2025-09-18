import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-amber-200 p-4 shadow-md">
      <div className="container mx-auto flex items-center space-x-6">
        <NavLink
          to="/add-product"
          className={({ isActive }) =>
            `text-gray-800 font-medium hover:text-gray-600 m-2 p-2 transition ${
              isActive ? "border-2 border-gray-800" : ""
            }`
          }
        >
          Add Product
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-800 font-medium hover:text-gray-600 m-2 p-2 transition ${
              isActive ? "border-2 border-gray-800" : ""
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `text-gray-800 font-medium hover:text-gray-600 m-2 p-2 transition ${
              isActive ? "border-2 border-gray-800" : ""
            }`
          }
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

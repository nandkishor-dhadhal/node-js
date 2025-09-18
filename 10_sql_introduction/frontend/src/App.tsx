import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProduct";
import { productAction } from "./actions/product.action";
import { productLoader } from "./loaders/product.loader";
import Cart from "./pages/Cart";
import { cartLoader } from "./loaders/cart.loader";
import { Suspense } from "react";
import EditProduct from "./pages/EditProduct";
import { editProductAction } from "./actions/edit-product.action";
import { editProductLoader } from "./loaders/edit-product.loader";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<h1>Loading.....</h1>}>
              <Products />
            </Suspense>
          ),
          loader: productLoader,
        },
        {
          path: "add-product",
          element: (
            <Suspense fallback={<h1>Loading.....</h1>}>
              <AddProducts />,
            </Suspense>
          ),
          action: productAction,
        },
        {
          path: "cart",
          element: (
            <Suspense fallback={<h1>Loading.....</h1>}>
              <Cart />
            </Suspense>
          ),
          loader: cartLoader,
        },
        {
          path: "/edit-product/:id",
          loader: editProductLoader,
          action: editProductAction,
          element: <EditProduct />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default App;

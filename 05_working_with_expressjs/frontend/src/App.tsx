import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProduct";
import { productAction } from "./actions/product.action";
import { productLoader } from "./loaders/product.loader";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Products />,
          loader: productLoader,
        },
        {
          path: "add-product",
          element: <AddProducts />,
          action: productAction,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default App;

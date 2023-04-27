import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Order from "./Component/Order/Order.jsx";
import Shop from "./Component/Shop/Shop.jsx";
import Inventory from "./Component/Inventory.jsx";
import CartProduct from "./Loaders/cart&product.js";
import Login from "./Component/Login/Login.jsx";
import Singup from "./Component/Singup/Singup.jsx";
import AuthProvider from "./Component/Provider/AuthProvider.jsx";
import CheckOUt from "./Component/CheckOUt.jsx";
import PriverRoute from "./Component/PriverRouter/PriverRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader: () => fetch("/Data.json"),
      },
      {
        path: "/orders",
        element: <Order></Order>,
        loader: CartProduct,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/checkout",
        element: <PriverRoute><CheckOUt></CheckOUt></PriverRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <Singup></Singup>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

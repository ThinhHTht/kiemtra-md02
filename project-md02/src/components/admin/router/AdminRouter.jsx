import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Customer from "../pages/Customer";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/manager-product" element={<Products />}></Route>
      <Route path="/manager-order" element={<Orders />}></Route>
      <Route path="/manager-customers" element={<Customer />}></Route>
      <Route
        path="/manager-product/add-product"
        element={<AddProduct />}
      ></Route>
      <Route
        path="/manager-product/edit-product/:id"
        element={<EditProduct />}
      ></Route>
    </Routes>
  );
}

export default AdminRouter;

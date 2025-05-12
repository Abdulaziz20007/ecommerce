import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/Home";
import CategoryDetails from "./pages/Category/";
import Sale from "./pages/Sale/Sale";
import New from "./pages/New/New";
import Brands from "./pages/Brands/Brands";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="sale" element={<Sale />} />
          <Route path="new" element={<New />} />
          <Route path="brands" element={<Brands />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

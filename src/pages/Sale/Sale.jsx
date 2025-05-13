import React from "react";
import { ProductCard } from "../../components";
import { useProducts } from "../../hooks/useProducts";
import "./Sale.scss";
import { Breadcrumb } from "../../components";
import { Link } from "react-router-dom";
import FilterSidebar from "../Category/CategoryDetails/FIlterSidebar";

function Sale() {
  const { data: products, isLoading } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>No products found</div>;
  }

  return (
    <div className="container">
      <div className="products-header">
        <h1>Sale</h1>
      </div>
      <Breadcrumb />
      <div className="sale-page">
        <div className="sidebar">
          <FilterSidebar />
        </div>
        <div className="products-container">
          <div className="products">
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <ProductCard product={product} image={product.images[0]} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;

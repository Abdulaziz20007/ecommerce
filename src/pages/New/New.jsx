import React from "react";
import { ProductCard } from "../../components";
import { useProducts } from "../../hooks/useProducts";
import "./New.scss";
import { Breadcrumb } from "../../components";
import { Link, useLocation } from "react-router-dom";
import FilterSidebar from "../Category/CategoryDetails/FIlterSidebar";
import { parseQueryParams } from "../../utils";

function New() {
  const location = useLocation();
  const queryParams = parseQueryParams(location.search);

  const { data: products, isLoading } = useProducts(queryParams);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>No products found</div>;
  }

  const productCount = products.length;

  return (
    <div className="container">
      <div className="products-header">
        <h1>New Arrivals</h1>
        <p className="products-count">{productCount} products found</p>
      </div>
      <Breadcrumb />
      <div className="new-page">
        <div className="sidebar">
          <FilterSidebar />
        </div>
        <div className="products-container">
          {productCount === 0 ? (
            <div className="no-products">
              <p>No products match your criteria. Try changing the filters.</p>
            </div>
          ) : (
            <div className="products">
              {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`}>
                  <ProductCard product={product} image={product.images[0]} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default New;

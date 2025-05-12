import React from "react";
import { ProductCard } from "../../components";
import { useProducts } from "../../hooks/useProducts";
import "./New.scss";
import { Breadcrumb } from "../../components";
import { Link } from "react-router-dom";

function New() {
  const { data: products, isLoading } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>No products found</div>;
  }

  return (
    <div className="container">
      <div className="products-container">
        <div className="products-header">
          <h1>New Arrivals</h1>
        </div>
        <Breadcrumb />
        <div className="products">
          {products.map((product) => (
            <Link to={`/products/${product.id}`}>
              <ProductCard
                key={product.id}
                product={product}
                image={product.images[0]}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default New;

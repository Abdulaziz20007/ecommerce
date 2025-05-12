import React from "react";
import { ProductCard } from "../../../components";
import { useProducts } from "../../../hooks/useProducts";
import { useLocation, useParams } from "react-router-dom";
import { parseQueryParams } from "../../../utils";
import "./CategoryProducts.scss";

function CategoryProducts() {
  const location = useLocation();
  const { categoryId } = useParams();
  const queryParams = parseQueryParams(location.search);
  const params = {
    ...queryParams,
    category: categoryId || queryParams.category,
  };

  const { data: products, isLoading } = useProducts(params);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(products);

  return (
    <div className="CategoryProducts">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          image={product.images[0]}
        />
      ))}
    </div>
  );
}

export default CategoryProducts;

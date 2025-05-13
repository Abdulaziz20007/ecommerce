import React, { useEffect } from "react";
import { ProductCard } from "../../../components";
import { useProducts } from "../../../hooks/useProducts";
import { data, Link, useLocation, useParams } from "react-router-dom";
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

  useEffect(() => {
    window.scroll(0, 0);
  }, [products]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(products);

  return (
    <div className="CategoryProducts">
      {products?.map((product) => (
        <Link to={`/products/${product.id}`}>
          <ProductCard
            key={product.id}
            product={product}
            image={product.images[0]}
          />
        </Link>
      ))}
    </div>
  );
}

export default CategoryProducts;

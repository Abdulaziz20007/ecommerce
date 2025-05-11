import React, { useState, useEffect } from "react";
import "./NewArrivals.scss";
import { useProducts } from "../../../../hooks/useProducts";
import { ProductCard } from "../../../../components";
import { Link } from "react-router";

function NewArrivals() {
  const [products, setProducts] = useState([]);

  const { data } = useProducts({ category: "Pants" });

  useEffect(() => {
    if (data) {
      // Format products to match ProductCard component props
      const formattedProducts = data.slice(0, 4).map((product) => ({
        id: product.id,
        title: product.title,
        image: product.images[0],
        rating: 4.5,
        totalRatings: "45+",
        price: product.price,
        originalPrice: product.price + 10,
        discount: 20,
      }));
      setProducts(formattedProducts);
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="new-arrivals-item">
        <h2>NEW ARRIVALS</h2>
      </div>
      <div className="item-cards">
        {products.map((product) => (
          <Link
            to={`/productDetail/${product.id}`}
            key={product.id}
            className="product-link"
          >
            <ProductCard product={product} />
          </Link>
        ))}
        <br />
        <button>View All</button>
      </div>
      <hr />
    </div>
  );
}

export default NewArrivals;

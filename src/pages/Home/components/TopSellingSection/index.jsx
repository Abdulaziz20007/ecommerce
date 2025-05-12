import React, { useState, useEffect } from "react";
import "./TopSelling.scss";
import { useProducts } from "../../../../hooks/useProducts";
import { ProductCard } from "../../../../components";
import { Link } from "react-router";

function TopSelling() {
  const [products, setProducts] = useState([]);

  const { data } = useProducts({ category: "T-shirt" });

  useEffect(() => {
    if (data) {
      const formattedProducts = data.slice(0, 4).map((product) => ({
        id: product.id,
        title: product.title,
        image: product.images[0],
        rating: 5.0,
        totalRatings: "50+",
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
      <div className="top-selling-h2">
        <h2>Top Selling</h2>
      </div>
      <div className="item-cards">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="product-link"
          >
            <ProductCard product={product} image={product.image} />
          </Link>
        ))}
        <br />
        <button>
          <Link style={{ textDecoration: "none", color: "white" }} to="/sale">
            View All
          </Link>
        </button>
      </div>
    </div>
  );
}

export default TopSelling;

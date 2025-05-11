import React, { useState, useEffect } from "react";
import "./TopSelling.scss";
import { BiSolidStar } from "react-icons/bi";
import { useProducts } from "../../../../hooks/useProducts";
import { Link } from "react-router";

function TopSelling() {
  const [products, setProducts] = useState([]);

  const { data } = useProducts({ category: "T-shirt" });

  useEffect(() => {
    if (data) {
      setProducts(data.slice(0, 4));
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(products);

  return (
    <div className="container">
      <div className="top-selling-h2">
        <h2>Top Selling</h2>
      </div>
      <div className="item-cards">
        {products.map((product) => (
          <Link
            to={`/productDetail/${product.id}`}
            className="card"
            key={product.id}
          >
            <img
              style={{ width: "295px" }}
              src={product.images[0]}
              alt="The item one png"
            />
            <p>{product.title}</p>
            <div className="stars">
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <p className="raiting">5.0/5</p>
            </div>
            <p className="price">
              ${product.price} <span>${product.price + 10}</span>{" "}
              <span className="disc">-20%</span>
            </p>
          </Link>
        ))}
        <br />
        <button>View All</button>
      </div>
    </div>
  );
}

export default TopSelling;

import React, { useState, useEffect } from "react";
import "./NewArrivals.scss";
import { BiSolidStar } from "react-icons/bi";
import { useProducts } from "../../../../hooks/useProducts";
import { Link } from "react-router";

function NewArrivals() {
  const [products, setProducts] = useState([]);

  const { data } = useProducts({ category: "Pants" });

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
      <div className="new-arrivals-item">
        <h2>NEW ARRIVALS</h2>
      </div>
      <div className="item-cards">
        {products.map((product) => (
          <Link
            to={`/productDetail/${product.id}`}
            className="card"
            key={product.id}
          >
            <img src={product.images[0]} alt={product.title} />
            <p>{product.title}</p>
            <div className="stars">
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <p className="raiting">4.5/5</p>
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
      <hr />
    </div>
  );
}

export default NewArrivals;

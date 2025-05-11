import React from "react";
import StarRating from "../StarRating";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <h3 className="product-title">{product.title}</h3>
      <div className="product-rating">
        <StarRating rating={product.rating} size="sm" />
        <span className="total-ratings">{product.totalRatings}</span>
      </div>
      <div className="product-price">
        <span className="current-price">${product.price}</span>
        {product.discount > 0 && (
          <>
            <span className="original-price">${product.originalPrice}</span>
            <span className="discount-badge">-{product.discount}%</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

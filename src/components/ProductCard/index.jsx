import React from "react";
import StarRating from "../StarRating";
import "./ProductCard.scss";

const ProductCard = ({ product, image }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={image}
          alt={product?.title || "Product"}
          className="product-image"
        />
      </div>
      <h3 className="product-title">{product?.title || "Unnamed Product"}</h3>
      <div className="product-rating">
        <StarRating rating={product?.rating || 0} size="sm" />
        <span className="total-ratings">{product?.totalRatings || 0}</span>
      </div>
      <div className="product-price">
        <span className="current-price">${product?.price || 0}</span>
        {product?.discount > 0 && (
          <>
            <span className="original-price">
              ${product?.originalPrice || 0}
            </span>
            <span className="discount-badge">-{product?.discount || 0}%</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

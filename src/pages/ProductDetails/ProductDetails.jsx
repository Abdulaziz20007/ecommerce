import { Link, useParams } from "react-router";
import { useProductById } from "../../hooks";
import { useProducts } from "../../hooks/useProducts";
import { useState, useEffect } from "react";
import {
  Breadcrumb,
  StarRating,
  ProductCard,
  ReviewCard,
} from "../../components";
import "./ProductDetails.scss";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("reviews");
  const { id } = useParams();
  const { data } = useProductById(id);
  const { data: productsData } = useProducts({ category: "Pants" });

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  useEffect(() => {
    if (productsData) {
      const filtered = productsData
        .filter((item) => item.id !== Number(id))
        .slice(0, 4);
      setRelatedProducts(filtered);
    }
  }, [productsData, id]);

  if (!data || !product) {
    return <div>Loading...</div>;
  }

  const colors = ["#6B5D44", "#2D5754", "#2B345D"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      verified: true,
      rating: 4.5,
      text: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
      date: "August 14, 2023",
    },
    {
      id: 2,
      name: "Alex M.",
      verified: true,
      rating: 4,
      text: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
      date: "August 15, 2023",
    },
    {
      id: 3,
      name: "Ethan R.",
      verified: true,
      rating: 3.5,
      text: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
      date: "August 16, 2023",
    },
    {
      id: 4,
      name: "Olivia P.",
      verified: true,
      rating: 4,
      text: '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out."',
      date: "August 17, 2023",
    },
    {
      id: 5,
      name: "Liam K.",
      verified: true,
      rating: 4,
      text: "\"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.\"",
      date: "August 18, 2023",
    },
    {
      id: 6,
      name: "Ava H.",
      verified: true,
      rating: 4.5,
      text: "\"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.\"",
      date: "August 19, 2023",
    },
  ];

  return (
    <div className="product-details-page">
      <Breadcrumb />
      <div className="product-details-container">
        <div className="product-images">
          <div className="thumbnails">
            {product.images &&
              product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail-btn ${
                    selectedImageIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleImageSelect(index)}
                >
                  <img src={image} alt={`${product.title} view ${index + 1}`} />
                </button>
              ))}
          </div>
          <div className="main-image">
            <img src={product.images[selectedImageIndex]} alt={product.title} />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>

          <div className="product-rating">
            <StarRating rating={4.5} size="md" />
            <span className="rating-text">4.5/5</span>
          </div>

          <div className="product-price">
            <span className="current-price">${product.price}</span>
            <span className="original-price">
              ${Math.round(product.price * 1.4)}
            </span>
            <span className="discount-badge">-40%</span>
          </div>

          <p className="product-description">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="product-options">
            <div className="color-selection">
              <h3>Select Colors</h3>
              <div className="color-options">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-option ${
                      selectedColor === index ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(index)}
                  >
                    {selectedColor === index && (
                      <span className="checkmark">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="size-selection">
              <h3>Choose Size</h3>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-option ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-and-cart">
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={decreaseQuantity}>
                  −
                </button>
                <span className="quantity">{quantity}</span>
                <button className="quantity-btn" onClick={increaseQuantity}>
                  +
                </button>
              </div>

              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-tabs-section">
        <div className="tabs-container">
          <button
            className={`tab ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
          <button
            className={`tab ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Rating & Reviews
          </button>
          <button
            className={`tab ${activeTab === "faqs" ? "active" : ""}`}
            onClick={() => setActiveTab("faqs")}
          >
            FAQs
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "reviews" && (
            <div className="reviews-section">
              <div className="reviews-header">
                <h2 className="reviews-title">
                  All Reviews <span className="reviews-count">(451)</span>
                </h2>
                <div className="reviews-actions">
                  <button className="filter-button">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 4H13M5 8H11M7 12H9"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="sort-dropdown">
                    <span>Latest</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <button className="write-review-btn">Write a Review</button>
                </div>
              </div>

              <div className="reviews-grid">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              <button className="load-more-btn">Load More Reviews</button>
            </div>
          )}

          {activeTab === "details" && (
            <div className="details-content">
              <p>Product details will be displayed here.</p>
            </div>
          )}

          {activeTab === "faqs" && (
            <div className="faqs-content">
              <p>Frequently asked questions will be displayed here.</p>
            </div>
          )}
        </div>
      </div>

      <div className="recommendations-section">
        <h2 className="section-title">YOU MIGHT ALSO LIKE</h2>
        <div className="product-recommendations">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
              <Link
                to={`/productDetail/${product.id}`}
                key={product.id}
                className="product-link"
              >
                <ProductCard
                  key={product.id}
                  product={product}
                  image={product.images[0]}
                />
              </Link>
            ))
          ) : (
            <div className="loading-recommendations">
              Loading recommendations...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

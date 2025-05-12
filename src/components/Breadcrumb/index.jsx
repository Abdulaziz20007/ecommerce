import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  // Function to generate a readable name from path segment
  const getReadableName = (segment) => {
    // If this is a parameter (like categoryId or productId)
    if (segment === params.categoryId) return "Category";
    if (segment === params.id) return "Product";

    // For known routes
    if (segment === "sale") return "Sale";
    if (segment === "new") return "New Arrivals";
    if (segment === "brands") return "Brands";
    if (segment === "product") return "Product";
    if (segment === "category") return "Category";

    // Return capitalized segment if no specific name is available
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  if (pathSegments.length === 0) return null; // Don't show breadcrumb on home page

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>

      {pathSegments.map((segment, index) => {
        // Build the path up to this segment
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;

        return (
          <React.Fragment key={path}>
            <span className="separator">/</span>
            {isLast ? (
              <span className="current">{getReadableName(segment)}</span>
            ) : (
              <Link to={path}>{getReadableName(segment)}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;

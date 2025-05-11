import React from "react";
import FilterSidebar from "./FIlterSidebar";
import { Breadcrumb } from "../../../components";

import "./CategoryDetails.scss";

const CategoryDetails = () => {
  return (
    <div className="container">
      <Breadcrumb />
      <FilterSidebar />
    </div>
  );
};

export default CategoryDetails;

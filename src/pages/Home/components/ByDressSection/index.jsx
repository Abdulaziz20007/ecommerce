import React from "react";
import "./ByDress.scss";
import { BiSolidStar } from "react-icons/bi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FcApproval } from "react-icons/fc";
import { useCategories } from "../../../../hooks";
import { Link } from "react-router";

function ByDress() {
  const { data: categories } = useCategories();
  const images = [
    "/src/assets/bd1_item.png",
    "/src/assets/bd2_item.png", 
    "/src/assets/bd3_item.png",
    "/src/assets/bd4_item.png",
  ];
  console.log(categories);

  if (!categories) {
    return null;
  }

  return (
    <div className="container">
      <div className="dress-wrapper">
        <h3>BROWSE BY DRESS STYLE</h3>
        <div className="img-wrapper">
          <div className="img-row">
            {categories[0] && (
              <Link to={`/category/${categories[0].title}`}>
                <img
                  style={{ width: "408px", height: "289px" }}
                  src={images[0]}
                  alt={categories[0].title}
                />
              </Link>
            )}
            {categories[1] && (
              <Link to={`/category/${categories[1].title}`}>
                <img
                  style={{ width: "684px", height: "289px" }}
                  src={images[1]}
                  alt={categories[1].title}
                />
              </Link>
            )}
          </div>
          <div className="img-row">
            {categories[2] && (
              <Link to={`/category/${categories[2].title}`}>
                <img
                  style={{ width: "684px", height: "289px" }}
                  src={images[2]}
                  alt={categories[2].title}
                />
              </Link>
            )}
            {categories[3] && (
              <Link to={`/category/${categories[3].title}`}>
                <img
                  style={{ width: "408px", height: "289px" }}
                  src={images[3]}
                  alt={categories[3].title}
                />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="coments">
        <div className="customers">
          <h3>OUR HAPPY CUSTOMERS</h3>
          <div className="icons">
            <GoArrowLeft />
            <GoArrowRight />
          </div>
        </div>
        <div className="our-happy">
          <div className="coment-wrapper">
            <div className="stars">
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <p>
                Sarah M.
                <FcApproval />
              </p>
              <span>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations."
              </span>
            </div>
          </div>
          <div className="coment-wrapper">
            <div className="stars">
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <p className="raiting">
                Alex K.
                <FcApproval />
              </p>
              <span>
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions."
              </span>
            </div>
          </div>
          <div className="coment-wrapper">
            <div className="stars">
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <BiSolidStar className="star-icon" />
              <p className="raiting">
                James L.
                <FcApproval />
              </p>
              <span>
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends."
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ByDress;

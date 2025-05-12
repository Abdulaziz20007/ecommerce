import React, { useState } from "react";
import "./Header.scss";
import { MdClear } from "react-icons/md";
import { BiCart, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router";

function Header() {
  const [isFragmentVisible, setIsFragmentVisible] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleClearClick = () => {
    setIsFragmentVisible(false);
  };

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <header>
      {isFragmentVisible && (
        <div className="header-top">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#">Sign Up Now</a>
          </p>
          <MdClear className="clear-btn" onClick={handleClearClick} />
        </div>
      )}
      <div className="container">
        <div className="navbar-wrapper">
          <div className="burger-icon" onClick={toggleBurger}>
            <FiMenu />
          </div>

          <h3>
            <Link to="/">SHOP.CO</Link>
          </h3>

          <div className={`content-ul ${isBurgerOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/sale">On Sale</Link>
              </li>
              <li>
                <Link to="/new">New Arrivals</Link>
              </li>
              <li>
                <Link to="/brands">Brands</Link>
              </li>
            </ul>
          </div>

          <div className="search-input desktop-search">
            <BiSearch />
            <input type="text" placeholder="Search for products..." />
          </div>

          <div className="card-and-profile-icons">
            <BiSearch className="mobile-search-icon" />
            <BiCart />
            <CgProfile />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

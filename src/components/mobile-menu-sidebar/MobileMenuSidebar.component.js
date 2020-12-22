import React, { useContext } from "react";
import "./mobile-menu-sidebar.styles.scss";

import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

import { NavContext } from "../../context/Context";

export default function MobileMenuSidebar() {
  const { navState } = useContext(NavContext);

  return (
    <div
      className={`mobileMenuSidebar ${
        navState.menuSidebarMobile !== undefined
          ? navState.menuSidebarMobile
          : null
      }`}
    >
      <div className="inner-container">
        <div className="search-input">
          <span className="icon">
            <BiSearch />
          </span>
          <input type="search" placeholder="Search for your favourite" />
        </div>

        <div className="best-selling-products">
          <div className="area-title">Our Best seller</div>
          <div className="products-container">
            <Link to="/" className="product-link">
              <div className="each-best-selling">
                <div className="img-container">
                  <div className="img"></div>
                </div>
                <div className="title-container">Baby Bottles</div>
              </div>
            </Link>
            <Link to="/" className="product-link">
              <div className="each-best-selling">
                <div className="img-container">
                  <div className="img"></div>
                </div>
                <div className="title-container">Baby Bottles</div>
              </div>
            </Link>
            <Link to="/" className="product-link">
              <div className="each-best-selling">
                <div className="img-container">
                  <div className="img"></div>
                </div>
                <div className="title-container">Baby Bottles</div>
              </div>
            </Link>
            <Link to="/" className="product-link">
              <div className="each-best-selling">
                <div className="img-container">
                  <div className="img"></div>
                </div>
                <div className="title-container">Baby Bottles</div>
              </div>
            </Link>
            <Link to="/" className="product-link">
              <div className="each-best-selling">
                <div className="img-container">
                  <div className="img"></div>
                </div>
                <div className="title-container">Baby Bottles</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mobile-nav-links">
          <div className="list">
            <li className="link">
              <Link to="/pages/baby-bottles" className="product-link">
                Baby Bottles
              </Link>
            </li>
            <li className="link">
              <Link to="/pages/teether-and-peciefiers" className="product-link">
                Teethers & Peciefiers
              </Link>
            </li>
            <li className="link">
              <Link to="/pages/sippy-cups" className="product-link">
                Sippy Cups
              </Link>
            </li>
            <li className="link">
              <Link to="/pages/squeeze-bag" className="product-link">
                Squeeze Bags
              </Link>
            </li>
          </div>
        </div>
        <div className="topbar-menu">
          <div className="topbar-mobile-nav-links">
            <ul className="list">
              <li className="link">
                <Link to="/Contact" className="product-link">
                  Contact
                </Link>
              </li>
              <li className="link">
                <Link to="/Contact" className="product-link">
                  About us
                </Link>
              </li>
              <li className="link">
                <Link to="/Contact" className="product-link">
                  FAQ
                </Link>
              </li>
              <li className="link">
                <Link to="/Contact" className="product-link">
                  Twistshake world
                </Link>
              </li>
              <li className="link">
                <Link to="/Contact" className="product-link">
                  Ambassador
                </Link>
              </li>
              <li className="close-icon" onClick={() => {}}>
                {/* <VscClose /> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

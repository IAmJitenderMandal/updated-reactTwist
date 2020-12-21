import React, { useContext } from "react";
import "./mobile-menu-sidebar.styles.scss";

import Card from "../card/Card.component";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

import { NavContext } from "../../context/Context";

export default function MobileMenuSidebar() {
  const { navState } = useContext(NavContext);
  console.log(navState);
  return (
    <div
      className={`mobile-menu-sidebar ${
        navState.searchSideBarMobile !== undefined
          ? navState.searchSideBarMobile
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
        <div className="popular-keywords">
          <ul className="keyword-list">
            <li>Baby Bottle</li>
            <li>Sippy Cup</li>
            <li>Dummies</li>
            <li>Stroller</li>
            <li>Squeeze Bags</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div className="products">
          <div className="area-title">SEARCH RESULTS (17)</div>
          <div className="inner-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

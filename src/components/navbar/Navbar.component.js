import React, { useContext, useState, useEffect } from "react";
import "./navbar.styles.scss";

// call custom hook useViewPort
import useViewPort from "../../custom-hooks/useViewPort";

import { NavContext } from "../../context/Context";
import {
  CART_SIDEBAR,
  SEARCH_SHOW,
  SET_MOBILE_SEARCH,
  SET_MOBILE_MENU,
} from "../../context/action.types";

import { Link } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";

export default function Navbar() {
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [bar, setBar] = useState("hidden");
  const [navbar, setNavbar] = useState(false);
  const { navState, navStateDispatch } = useContext(NavContext);
  const { width } = useViewPort();
  const breakPoint = 1200;

  return width < breakPoint ? (
    <div
      className={`navbar-mobile ${
        navState.searchSideBarMobile !== undefined
          ? navState.searchSideBarMobile
          : null
      }${
        navState.menuSidebarMobile !== undefined
          ? navState.menuSidebarMobile
          : null
      }`}
    >
      <div className="menu-and-search">
        <div
          className="menu-icon"
          onClick={() => {
            navStateDispatch({
              type: SET_MOBILE_MENU,
              payload: "active",
            });
          }}
        >
          <AiOutlineMenu />
        </div>
        <div
          className="search-icon"
          onClick={() => {
            navStateDispatch({
              type: SET_MOBILE_SEARCH,
              payload: "active",
            });
          }}
        >
          <BiSearch />
        </div>
      </div>
      <div className="logo">
        <h3 className="logo-text">
          <Link to="/">TWISTSHAKE</Link>
        </h3>
      </div>
      <div className="cart">
        <CgShoppingBag />
      </div>
    </div>
  ) : (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className={`top-bar ${bar}`}>
        <div className="links">
          <ul className="list">
            <li className="link">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="link">
              <Link to="/Contact">About us</Link>
            </li>
            <li className="link">
              <Link to="/Contact">FAQ</Link>
            </li>
            <li className="link">
              <Link to="/Contact">Twistshake world</Link>
            </li>
            <li className="link">
              <Link to="/Contact">Ambassador</Link>
            </li>
            <li className="close-icon" onClick={() => setBar("hidden")}>
              <VscClose />
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-items">
        <div className="logo">
          <Link to="/" className="link">
            <h3>Twistshake</h3>
          </Link>
        </div>
        <div className="nav-links">
          <div className="list">
            <li className="link">
              <Link to="/pages/baby-bottles">Baby Bottles</Link>
            </li>
            <li className="link">
              <Link to="/pages/teether-and-peciefiers">
                Teethers & Peciefiers
              </Link>
            </li>
            <li className="link">
              <Link to="/pages/sippy-cups">Sippy Cups</Link>
            </li>
            <li className="link">
              <Link to="/pages/squeeze-bag">Squeeze Bags</Link>
            </li>
          </div>
        </div>
        <div className="action-icons">
          <div className="icon search">
            <Link
              to="/"
              className="icon-link"
              onClick={(e) => {
                e.preventDefault();
                navStateDispatch({ type: SEARCH_SHOW, payload: "active" });
              }}
            >
              <BiSearch className="icon-svg" />
            </Link>
          </div>
          <div className="icon cart">
            <Link
              to="/"
              className="icon-link"
              onClick={(e) => {
                e.preventDefault();
                navStateDispatch({ type: CART_SIDEBAR, payload: "active" });
              }}
            >
              {" "}
              <CgShoppingBag className="icon-svg" />
            </Link>
          </div>
          <div className="icon menu">
            <Link
              to="/"
              className="icon-link"
              onClick={() => {
                bar === "" ? setBar("hidden") : setBar("");
              }}
            >
              {" "}
              <AiOutlineMenu className="icon-svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

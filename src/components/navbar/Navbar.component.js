import React, { useContext, useState, useEffect } from "react";
import "./navbar.styles.scss";

// call custom hook useViewPort
import useViewPort from "../../custom-hooks/useViewPort";

import { NavContext, AppContext } from "../../context/Context";

import {
  CART_SIDEBAR,
  SEARCH_SHOW,
  SET_MOBILE_SEARCH,
  SET_MOBILE_MENU,
  DISABLE_MOBILE_MENU,
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

  const [bar, setBar] = useState("hidden");
  const [navbar, setNavbar] = useState(false);
  const { navState, navStateDispatch } = useContext(NavContext);
  const { appState } = useContext(AppContext);
  const { width } = useViewPort();
  const breakPoint = 1200;
  const navLinks = appState.navLinks;
  const [widthMobileDisable, setWidthMobileDisable] = useState(
    window.innerWidth
  );
  const disbleMobileSidebar = () => {
    setWidthMobileDisable(window.innerWidth);
  };

  useEffect(() => {
    if (widthMobileDisable > 1200) {
      navStateDispatch({
        type: DISABLE_MOBILE_MENU,
        payload: "",
      });
    }
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", disbleMobileSidebar);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", disbleMobileSidebar);
    };
  }, [widthMobileDisable]);

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
      } ${navbar ? "navbar active" : "navbar"} `}
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
            {navLinks !== undefined
              ? navLinks.map((linkObj, index) => {
                  if (
                    linkObj.urlString.toLowerCase() !== "home".toLowerCase()
                  ) {
                    return (
                      <li className="link" key={index}>
                        <Link to={`/pages/${linkObj.urlString}`}>
                          {linkObj.category_name}
                        </Link>
                      </li>
                    );
                  }
                })
              : null}
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

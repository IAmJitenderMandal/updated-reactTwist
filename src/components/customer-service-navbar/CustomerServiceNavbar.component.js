import React from "react";
import "./customer-service-navbar.styles.scss";
import { NavLink } from "react-router-dom";

export default function CustomerServiceNavbar() {
  return (
    <div className="customerNavbar">
      <div className="nav-links">
        <NavLink className="link" to="/customer-service/about-us">
          About us
        </NavLink>
        <NavLink className="link" to="/customer-service/ambassador">
          Ambassador
        </NavLink>
        <NavLink className="link" to="/customer-service/contact">
          Contact
        </NavLink>
        <NavLink className="link" to="/customer-service/faq">
          FAQ
        </NavLink>
        <NavLink className="link" to="/customer-service/privacy-policy">
          Privacy Policy
        </NavLink>
        <NavLink className="link" to="/customer-service/terms-and-conditions">
          Terms and Conditions
        </NavLink>
      </div>
    </div>
  );
}

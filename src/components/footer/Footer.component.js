import React from "react";
import "./footer.styles.scss";

import { useLocation } from "react-router-dom";

import { BiSend } from "react-icons/bi";

import { Link } from "react-router-dom";
import FooterIcons from "../footer-icons/FooterIcons.component";

export default function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="left-content">
          <div className="heading-text">
            SIGN UP FOR OUR NEWSLETTER AND LEARN MORE ABOUT OUR EXCLUSIVE OFFERS
            AND PRODUCTS!
          </div>
          <div className="form">
            <div className="input">
              <input
                type="email"
                placeholder="Enter your email address"
                className="email-input"
              />
              <BiSend className="send-icon" />
            </div>
            <div className="label">
              <input type="checkbox" className="label-input" id="label" />
              <p className="label-text">
                i have read and accept the{" "}
                <Link
                  to="/customer-service/privacy-policy"
                  className="privacy-policy-link"
                >
                  privacy policy
                </Link>{" "}
              </p>
            </div>
          </div>

          <div className="description-text">
            Twistshake aspires to develop products that are simple and safe to
            use, yet also offers an appealing design. We are of the opinion that
            aiming for functionality does not mean that we can ignore
            aesthetics, and our designers are always looking for ways to combine
            practicality with eye-pleasing design.
          </div>
        </div>
        <div className="right-content">
          <div className="top-content">
            <div className="left">
              <div className="heading-title">Customer service</div>
              <div className="links">
                <ul>
                  <li>
                    <Link to="/customer-service/about-us" className="link">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link to="/customer-service/faq" className="link">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/customer-service/payment-delivery"
                      className="link"
                    >
                      Payment deliveries
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="heading-title">Twistshake</div>
              <div className="links">
                <ul>
                  <li>
                    <Link to="/customer-service/about-us" className="link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/customer-service/twistshake-world"
                      className="link"
                    >
                      Twistshake world
                    </Link>
                  </li>
                  <li>
                    <Link to="/customer-service/contact" className="link">
                      Distributors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-content">
            <div className="extra-links">
              <div className="top">
                <Link to="/terms-and-conditions" className="link">
                  Terms and conditions
                </Link>
                <Link to="/terms-and-conditions" className="link">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterIcons />
    </div>
  );
}

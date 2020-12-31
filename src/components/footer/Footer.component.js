import React, { useState, useEffect } from "react";
import "./footer.styles.scss";
import { BiSend } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import FooterIcons from "../footer-icons/FooterIcons.component";

// react accordian
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function Footer() {
  const [width, setWidth] = useState(window.innerWidth);

  function Setwidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", Setwidth);
    return () => window.removeEventListener("resize", Setwidth);
  }, []);

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
          {width < 700 ? (
            <div className="accordian-container">
              <Accordion allowZeroExpanded>
                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>Customer service</span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="links">
                        <ul>
                          <li>
                            <Link
                              to="/customer-service/about-us"
                              className="link"
                            >
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
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>

                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>Twistshake</span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="links">
                        <ul>
                          <li>
                            <Link
                              to="/customer-service/about-us"
                              className="link"
                            >
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
                            <Link
                              to="/customer-service/contact"
                              className="link"
                            >
                              Distributors
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
              </Accordion>
            </div>
          ) : (
            <div className="top-content">
              <div className="left">
                <div className="heading-title">Customer service</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link to="/customer-service/about-us" className="link">
                        Contact us
                      </Link>
                      <RiArrowDropDownLine />
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
                        Payment de liveries
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
          )}

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

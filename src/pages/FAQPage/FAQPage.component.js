import React from "react";
import "./faq.styles.scss";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function FAQPage() {
  return (
    <div className="faq">
      <div className="inner-container">
        <div className="left">
          <div className="left-title">
            <span className="icon">
              <AiOutlineArrowRight />
            </span>
            <h2>Contact</h2>
          </div>
          <ul className="list">
            <li>Twistshake ambassador</li>
          </ul>
        </div>
        <div className="right">
          <div className="content">
            <p className="para-title">contact information</p>
            <div className="address">
              Twistshake of Sweden AB Örjansgränd 1 721 32 Västerås Sweden
              service@twistshake.com
            </div>
          </div>

          <div className="form">
            <h3>contact us</h3>
            <p>
              We are happy to hear from you and will get back to you as soon as
              possible!
            </p>
            <form action="#">
              <div className="form-element-group common">
                <label htmlFor="company">subject</label>
                <select name="" id="">
                  <option value="product-delivery">Product Delivery</option>
                  <option value="order-delivery">Order & Delivery</option>
                  <option value="return-claims">Return Claims</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other-question">Other Question</option>
                </select>
              </div>
              <div className="instagram-form-group common">
                <label htmlFor="instagram">Order number *</label>
                <input
                  type="text"
                  placeholder="Order number"
                  className="instagram"
                />
              </div>
              <div className="instagram-form-group common">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="email"
                />
              </div>
              <div className="email-form-group common">
                <label htmlFor="msg">Your Message</label>
                <textarea placeholder="Your message" className="msg"></textarea>
              </div>
              <div className="form-submit-btn">
                <input
                  type="button"
                  placeholder=""
                  className="submit-btn"
                  type="submit"
                />
              </div>
            </form>
          </div>
          <div className="form-1">
            <h3 className="form-1-title">
              Would you like to become a distributor?
            </h3>
            <p className="sub-title">
              Fill in the form below and we will contact you.
            </p>
            <form action="#">
              <div className="element-container">
                <div className="form-element-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" className="campany" />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Country</label>
                  <input type="text" className="campany" />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Contact name *</label>
                  <input type="text" className="campany" />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Telephone</label>
                  <input type="text" className="campany" />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Email *</label>
                  <input type="text" className="campany" />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Company type</label>
                  <input type="text" className="campany" />
                </div>

                <div className="form-element-group msg-container">
                  <label htmlFor="msg">Leave a Message</label>
                  <textarea id="" cols="30" rows="4"></textarea>
                </div>
              </div>

              <div className="submit-btn">
                <input
                  type="button"
                  placeholder=""
                  className="submit-btn"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

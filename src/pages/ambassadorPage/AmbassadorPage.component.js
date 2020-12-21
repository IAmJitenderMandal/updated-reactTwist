import React from "react";
import "./ambassador.styles.scss";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function Ambassador() {
  return (
    <div className="ambassador">
      <div className="inner-container">
        <div className="left">
          <div className="left-title">
            <span className="icon">
              <AiOutlineArrowRight />
            </span>
            <h2>Ambassador</h2>
          </div>
          <ul className="list">
            <li>Twistshake ambassador</li>
          </ul>
        </div>
        <div className="right">
          <div className="content">
            <h1 className="para-title">
              Do you want to collaborate with us and become a Twistshake
              Ambassador?
            </h1>
            <div className="details">
              Are you keen to work with us at Twistshake on your social media
              platform? Here is what you can expect: We always aim for
              long-lasting collaboration in different forms; Where you
              continuously receive our products Share your own personal discount
              code and your personal opinion about the products to your friends
              and followers Product launches where you got the chance to try our
              new products before everyone else SALE campaigns where you offer
              your followers AMAZING discounts Giveaway-competitions which is so
              popular since it brings so much traffic to our influencer’s
              accounts. An amazing chance for your followers to try our products
              for free! And much, much more… We believe that content is one key
              to success and below you find two pictures taken of two of our
              lovely ambassadors; https://www.instagram.com/p/CDwbr1tjBox/
              https://www.instagram.com/p/CBM6pSbH1Gg/ We are looking forward to
              hear from you! Love, Twistshake Family
            </div>
          </div>
          <div className="form">
            <form action="#">
              <div className="your-name-form-group common">
                <label htmlFor="your-name">First and last name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="your-name-input"
                />
              </div>
              <div className="instagram-form-group common">
                <label htmlFor="instagram">instagram *</label>
                <input
                  type="text"
                  placeholder="@Your Profile"
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
        </div>
      </div>
    </div>
  );
}

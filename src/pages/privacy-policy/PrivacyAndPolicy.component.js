import React from "react";
import "./privacyPolicy.styles.scss";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function PrivacyAndPolicy() {
  return (
    <div className="privacy-policy">
      <div className="inner-container">
        <div className="left">
          <div className="left-title">
            <span className="icon">
              <AiOutlineArrowRight />
            </span>
            <h2>Ambassador</h2>
          </div>
          <ul className="list">
            <li>Personal information</li>
            <li>What are cookies?</li>
            <li>Why do we use cookies? </li>
            <li>What information do we collect?</li>
            <li>Disclosures of your information</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className="right">
          <h1 className="para-title">Personal information</h1>
          <div className="para">
            At Twistshake we are dedicated to create a safe and enjoyable
            shopping experience for you. In this text we want to inform you
            about our website procedures; what we do, how we do it and how it
            affects you. When shopping at www.twistshake.com we may collect
            personal information you provide us when creating an account, making
            a purchase as well as data collected by cookies. All personal
            information are handled by GDPR, since May 25th, 2018.
          </div>
          <h1 className="para-title">What are the cookies</h1>
          <div className="para">
            Cookies are very small text files that are stored on your device’s
            hard drive when you visit websites. We use first-party cookies and
            third-party cookies for the main purposes of; web functionality, web
            statistics and advertising.
          </div>
          <h1 className="para-title">Quality and material</h1>
          <div className="para">
            All of Twistshake’s products are BPA-free. Twistshake cares about
            your safety. We want to give your child the best possible start in
            life. Twistshake’s products only utilizes raw materials that meet
            all the safety regulations in regards to foodstuffs. We have
            hand-picked materials of only the highest quality, and we believe
            this is something that becomes clear when you encounter our
            products. It is there, at first glance and first feel. The way we
            work involves regular quality inquiries that are performed in
            co-operation with world class test labs, all in order to guarantee
            quality and safety of the absolute highest order
          </div>

          <h1 className="para-title">What information do we collect?</h1>
          <div className="para">
            We collect information you provide us with when creating an account,
            signing up for our newsletter or when making a purchase. This
            information could be your name, address, contact information etc.
            The cookies may collect session information such as pages viewed,
            session duration, transactions made and demographics such as origin,
            gender and age.
          </div>

          <h1 className="para-title">Updates</h1>
          <div className="para">
            Be sure to review our Privacy Policy, T&Cs and any Rules regularly
            so that you will be aware of any changes to them. Please remember
            that your continued use of this Site, and/or maintenance of an
            Account after changes or revisions have been made constitutes your
            acceptance of such updates.
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import FormInput from "../formInput/FormInput.component";
import "./signup.styles.scss";

export default function Signup() {
  return (
    <div className="signup">
      <div className="inner-container">
        <div className="signup-container">
          <div className="signup-title">
            <h2>Create Account</h2>
          </div>
          <div className="form">
            <form>
              <FormInput
                type="text"
                name="name"
                className="name"
                placeholder="Your Name"
              />
              <FormInput
                type="email"
                name="email"
                className="email"
                placeholder="Email"
              />
              <FormInput
                type="password"
                name="password"
                className="password"
                placeholder="Password"
              />
              <FormInput
                type="password"
                name="password"
                className="password"
                placeholder="Re-enter Password"
              />
              <FormInput
                type="submit"
                value="Signup"
                name="signupSubmit"
                className="signup-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

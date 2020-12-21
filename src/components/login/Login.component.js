import React from "react";
import "./Login.styles.scss";
import FormInput from "../formInput/FormInput.component";
import { Link } from "react-router-dom";

import { VscKey } from "react-icons/vsc";
import { FiUserPlus } from "react-icons/fi";

export default function Login() {
  return (
    <div className="login">
      <div className="inner-container">
        <div className="login-container">
          <h2 className="login-title">Login</h2>
          <div className="form">
            <form>
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
              <div className="remember-user">
                <FormInput
                  type="checkbox"
                  name="loginSubmit"
                  className="remember-login"
                />
                <label htmlFor="login-btn">Remember Login</label>
              </div>
              <FormInput
                type="submit"
                value="Login"
                name="loginSubmit"
                className="login-btn"
              />
            </form>
          </div>
          <div className="login-footer">
            <Link to="/forgot-password" className="login-footer-link">
              <VscKey /> <span>Forgot Password</span>
            </Link>
            <Link to="/create-account" className="login-footer-link">
              <FiUserPlus /> <span>Create Account</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

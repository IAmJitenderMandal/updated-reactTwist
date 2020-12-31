import React, { useState } from "react";
import FormInput from "../formInput/FormInput.component";
import "./signup.styles.scss";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(name);
  const handleChange = (e) => {
    if (e.target.id.toLowerCase() === "name") {
      setName(e.target.value);
    }
    if (e.target.id.toLowerCase() === "user_email") {
      console.log(e.target.value);
      // setEmail(e.target.value);
    }
    if (e.target.id.toLowerCase() === "user_password") {
      setPassword(e.target.value);
    }
    if (e.target.id.toLowerCase() === "confirm_user_password") {
      setConfirmPassword(e.target.value);
    }
  };

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
                value={name}
                id="name"
                className="name"
                placeholder="Your Name"
                handleChange={handleChange}
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                id="user_email"
                className="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                id="user_password"
                className="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <FormInput
                type="password"
                name="confirm_password"
                value={confirmPassword}
                id="confirm_user_password"
                className="password"
                placeholder="Re-enter Password"
                onChange={handleChange}
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

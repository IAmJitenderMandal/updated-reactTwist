import React from "react";
import "./editAccount.styles.scss";

export default function EditAccountForm() {
  return (
    <div className="editAccount">
      <h2>Edit Your Account</h2>
      <div className="form">
        <form action="#">
          <div className="form-element-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="name" placeholder="name" />
          </div>
          <div className="form-element-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="email" placeholder="your email" />
          </div>
          <div className="form-element-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="password"
              placeholder="your password"
            />
          </div>
          <div className="form-element-group">
            <label htmlFor="password">Re-enter Password</label>
            <input
              type="password"
              className="password"
              placeholder="your password"
            />
          </div>
          <div className="form-element-group">
            <label htmlFor="number">Mobile Number</label>
            <input type="number" className="number" placeholder="phone" />
          </div>
          {/* <div className="form-element-group">
            <label htmlFor="address">#1 Address</label>
            <input
              type="text"
              className="address"
              placeholder="enter first Address"
            />
          </div>
          <div className="form-element-group">
            <label htmlFor="address">#2 Address</label>
            <input
              type="text"
              className="address"
              placeholder="enter second Address"
            />
          </div>
          <div className="form-element-group">
            <label htmlFor="address">#3 Address</label>
            <input
              type="text"
              className="address"
              placeholder="enter third Address"
            />
          </div> */}
          <div className="form-element-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

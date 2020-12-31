import React from "react";
import "./myAccountPage.styles.scss";
import ProfileImage from "../../components/profileImage/ProfileImage.component";
import Button from "../../components/button/Button.component";
import Orders from "../../components/orders/Orders.component";
import EditAccountForm from "../EditAccountForm/EditAccountForm.component";
import EditAddress from "../EditAddressPage/EditAddress.component";

import { Link, Route } from "react-router-dom";
import UserInfo from "../UserInfoPage/UserInfo.component";

export default function MyAccounPage() {
  return (
    <div className="my-account">
      <div className="title">My Account</div>
      <div className="content">
        <div className="left">
          <div className="upper-content">
            <ProfileImage profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DGIgTGL0UIi8L-k39NQtWAMLq6wvNJNENQ&usqp=CAU" />
            <span className="profile-name">John</span>
            <div className="button-logout">
              <Button>
                <span>LOGOUT</span>
              </Button>
            </div>
          </div>

          <div className="bottom-content">
            <div className="option-links">
              <Link to="/myAccount/dashboard" className="link">
                DASHBOARD
              </Link>
              <Link to="/myAccount/orders" className="link">
                MY ORDERS
              </Link>
              <Link to="/myAccount/edit-account" className="link">
                EDIT ACCOUNT
              </Link>
              <Link to="/myAccount/edit-address" className="link">
                EDIT ADDRESS
              </Link>
              <Link to="/myAccount/user-info" className="link">
                USER INFO
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <Route
            path="/myAccount/"
            exact
            render={() => (
              <>
                <div className="account-description">
                  Hello <span name="profile-name">john</span> from your account
                  dashboard you can manage and view all the recent orders and
                  your account details, manage your shipping and billing address
                  details.
                </div>
                <Orders />
              </>
            )}
          />
          <Route
            path="/myAccount/dashboard"
            render={() => (
              <>
                <div className="account-description">
                  Hello <span name="profile-name">john</span> from your account
                  dashboard you can manage and view all the recent orders and
                  your account details, manage your shipping and billing address
                  details.
                </div>
                <Orders />
              </>
            )}
          />
          <Route
            path="/myAccount/orders"
            render={() => (
              <>
                <Orders />
              </>
            )}
          />

          <Route
            path="/myAccount/edit-account"
            render={() => (
              <>
                {" "}
                <EditAccountForm />{" "}
              </>
            )}
          />

          <Route
            path="/myAccount/edit-address"
            render={() => (
              <>
                {" "}
                <EditAddress />{" "}
              </>
            )}
          />

          <Route
            path="/myAccount/user-info"
            render={() => (
              <>
                <UserInfo />
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}

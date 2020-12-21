import React, { useReducer, useContext, useState } from "react";
import "./CheckOutPage.styles.scss";
import { AppContext } from "../../context/Context";
import Counter from "../../components/counter/Counter.component";
import CartProduct from "../../components/cart-product/CartProduct.component";
import FormInput from "../../components/formInput/FormInput.component";
import SelectOption from "../../components/selectOption/SelectOption.component";

import { BiMoney } from "react-icons/bi";
import { FaDhl, FaFedex } from "react-icons/fa";

function CheckOutPage() {
  const { cartState, cartStateDispatch } = useContext(AppContext);
  const removeProduct = (cartIndex) => {
    cartStateDispatch({
      type: "REMOVE_PRODUCT",
      payload: cartIndex,
    });
  };
  const updateQuantity = (cartIndex, updateQuantity) => {
    const data = {
      cartIndex: cartIndex,
      quantity: updateQuantity,
    };
    cartStateDispatch({
      type: "UPDAT_QUANTITY",
      payload: data,
    });
  };
  console.log(cartState);
  return (
    <div id="checkOutContainer">
      <div className="float-container">
        <div className="float-child-bag">
          <div className="cart-heading">
            <b>
              Shopping basket (
              {cartState.cartProduct ? cartState.cartProduct.length : 0})
            </b>
          </div>
          {cartState.cartProduct &&
            cartState.cartProduct.length > 0 &&
            cartState.cartProduct.map((product, index) => {
              return (
                <CartProduct
                  removeProduct={removeProduct}
                  cartIndex={index}
                  key={index}
                  data={product.product}
                  pakageContent={product.productDetails}
                  quantity={product.quantity}
                  updateQuantity={updateQuantity}
                />
              );
            })}
        </div>
        <div className="float-child-payment">
          <div className="title-top">Payment Side</div>
          <div className="product-details">
            <div className="list">
              <li className="list-item">
                <span className="key">Products</span>
                <span className="value">984 AED</span>
              </li>
              <li className="list-item">
                <span className="key">Total Discount</span>
                <span className="value">984 AED</span>
              </li>
              <li className="list-item">
                <span className="key">Delivery</span>
                <span className="value">984 AED</span>
              </li>
              <li className="list-item">
                <span className="key">Total</span>
                <span className="value">984 AED</span>
              </li>
            </div>
          </div>

          <div className="delivery-options">
            <h3 className="delivery-title">Delivery</h3>
            <div className="options">
              <div className="input-container">
                <FormInput
                  type="radio"
                  value="bluedart"
                  className="bluedart"
                  name="delivery-option"
                />
                <label htmlFor="bluedart">
                  {" "}
                  <span>
                    <FaFedex />
                  </span>{" "}
                  FedEx
                </label>
              </div>
              <div className="input-container">
                <FormInput
                  type="radio"
                  value="dhl"
                  className="dhl"
                  name="delivery-option"
                />
                <label htmlFor="dhl">
                  {" "}
                  <span>
                    <FaDhl />
                  </span>{" "}
                  DHL
                </label>
              </div>
            </div>
          </div>
          <div className="payment-options">
            <h3 className="payment-options-title">Payment</h3>
            <div className="input-container">
              <FormInput
                type="radio"
                className="cash-on-delivery"
                name="payment"
              />
              <label htmlFor="cash-on-delivery">
                {" "}
                <span>
                  <BiMoney />
                </span>{" "}
                Cash on Delivery
              </label>
            </div>
          </div>
          <div className="address">
            <h3 className="address-title">Shipping Address</h3>
            <div className="form">
              <form>
                <div className="form-element-group">
                  <FormInput
                    placeholder="First Name"
                    type="text"
                    className="first"
                  />
                  <FormInput
                    placeholder="Last Name"
                    type="text"
                    className="last"
                  />
                </div>
                <FormInput
                  placeholder="Address"
                  type="text"
                  className="address"
                />
                <FormInput
                  type="text"
                  className="residential-address"
                  placeholder="Appartment, Suit, (optional)"
                />
                <SelectOption
                  name="city"
                  className="choose-city"
                  options={[
                    "Choose your city",
                    "abu dhabi",
                    "ajman",
                    "al ain",
                    "dubai",
                    "fujairah",
                    "ras al-khaimah",
                    "sharjah",
                    "umm al-quwain",
                  ]}
                />

                <div className="form-element-group">
                  <SelectOption
                    name="country"
                    className="choose-country"
                    options={["UAE"]}
                  />
                  <SelectOption
                    name="province"
                    className="choose-province"
                    options={[
                      "Choose your city",
                      "abu dhabi",
                      "ajman",
                      "al ain",
                      "dubai",
                      "fujairah",
                      "ras al-khaimah",
                      "sharjah",
                      "umm al-quwain",
                    ]}
                  />
                </div>

                <FormInput
                  placeholder="Phone"
                  type="number"
                  className="phone"
                />

                <FormInput placeholder="Email" type="email" className="email" />
                <FormInput
                  type="submit"
                  value="Place Order"
                  name="place-order"
                  className="place-order-btn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;

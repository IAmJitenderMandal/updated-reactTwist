import React, { useContext, useEffect } from "react";
import "./cart-sidebar.styles.scss";

// imports for context realted things
import { CART_SIDEBAR } from "../../context/action.types";
import { AppContext, NavContext } from "../../context/Context";

import { VscClose } from "react-icons/vsc";
import CartProduct from "../cart-product/CartProduct.component";
import Card from "../card/Card.component";
import Button from "../button/Button.component";

export default function ShopingCart() {
  const overlay_active = "body_overlay_active";
  const { navState, navStateDispatch } = useContext(NavContext);
  const { appState, appStateDispatch } = useContext(AppContext);
  const { cartState, cartStateDispatch } = useContext(AppContext);
  const isCartActive =
    navState.isCartSideBarActive !== undefined
      ? navState.isCartSideBarActive
      : "";

  // useEffect(() => {
  //   console.log(navState.isCartSideBarActive);
  //   navState.isCartSideBarActive !== ""
  //     ? document.body.classList.remove(overlay_active)
  //     : document.body.classList.add(overlay_active);
  // }, [navState.isCartSideBarActive]);

  const removeProduct = (cartIndex) => {
    cartStateDispatch({
      type: "REMOVE_PRODUCT",
      payload: cartIndex,
    });
  };

  return (
    appState && (
      <div className={`cart-sidebar ${isCartActive}`}>
        <div className="inner-wrapper">
          <div className="header-top">
            <div className="title">
              <h3>
                Shoping Basket{" "}
                <span className="product-number">
                  {" "}
                  {cartState.cartProduct !== null
                    ? cartState.cartProduct.length
                    : 0}
                </span>{" "}
              </h3>
            </div>
            <div
              className="close-btn"
              onClick={() => {
                navStateDispatch({ type: CART_SIDEBAR, payload: "" });
              }}
            >
              <VscClose />
            </div>
          </div>
          <div className="mid-area">
            <div className="grouped">
              <div>
                <div className="cart-products">
                  {cartState.cartProduct !== null
                    ? cartState.cartProduct.map((eachProduct, index) => (
                        <CartProduct
                          data={eachProduct.product}
                          key={index}
                          removeProduct={removeProduct}
                          cartIndex={index}
                          quantity={1}
                          updateQuantity={() => {}}
                        />
                      ))
                    : null}
                </div>
              </div>
              <div className="seprator"></div>
              <div>
                {/* <CartProduct
                          data={eachProduct}
                          key={index}
                          removeProduct={removeProduct}
                          cartIndex={index}
                        /> */}
                <div className="popular-products">
                  <div className="title">
                    <h3>Popular products</h3>
                  </div>
                  <div className="products">
                    <Card img="https://products.twistshake.com/images/628_92844b96df-73515-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
                    <Card img="https://products.twistshake.com/images/628_92844b96df-73515-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-area">
            <div className="seprator"></div>
            <div className="inner-container">
              <div className="product-price common">
                <div className="title">Products</div>
                <div className="price">109.99 EUR</div>
              </div>
              <div className="delivery-charge common">
                <div className="title">Delivery</div>
                <div className="price">0.00 EUR</div>
              </div>
              <div className="total-discount common">
                <div className="title">Total discount</div>
                <div className="price">-54.99 EUR</div>
              </div>
              <div className="total">
                <div className="title">Total</div>
                <div className="total-amount">109.99 EUR</div>
              </div>

              <Button>
                <span>Go to checkout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

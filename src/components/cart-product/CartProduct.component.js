import React, { useState } from "react";
import "./cart-product.styles.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { VscChevronDown } from "react-icons/vsc";
import { IoMdCloseCircle } from "react-icons/io";
import Counter from "../counter/Counter.component";
import { Link } from "react-router-dom";

export default function CartProduct({
  data,
  pakageContent,
  quantity,
  removeProduct,
  cartIndex,
  updateQuantity,
}) {
  const [packageBox, setPackageBox] = useState("");
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [showPakageContent, setShowPakageContent] = useState(false);
  const onAddQuantity = (quantity) => {
    setProductQuantity(quantity);
    updateQuantity(cartIndex, quantity);
  };
  const onRemoveQuantity = (quantity) => {
    setProductQuantity(quantity);
    updateQuantity(cartIndex, quantity);
  };
  return (
    <div className="cart-product">
      <div className="inner-container">
        <div
          className="top"
          onClick={() => {
            removeProduct(cartIndex);
          }}
        >
          <span className="icon-close">
            <IoMdCloseCircle />
          </span>
        </div>
        <div className="bottom">
          <div className="product-img">
            <div className="img-wrapper">
              <Link to="/product" className="product-link">
                <img src={data.product_thumbnail[0]} alt="product" />
              </Link>
            </div>
          </div>

          <div className="about-product">
            <div className="product-details">
              <div className="title">
                <Link to="/product" className="product-link">
                  {data.product_name}
                </Link>
              </div>
              <div className="extra-details">4 mth+/Mixed colors</div>
              <div className="product-counter">
                <Counter
                  quantity={quantity}
                  onAddQuantity={onAddQuantity}
                  onRemoveQuantity={onRemoveQuantity}
                />
              </div>
              {typeof pakageContent !== "undefined" && (
                <div className="package-content">
                  <div
                    onClick={() => {
                      setShowPakageContent(!showPakageContent);
                    }}
                  >
                    <h5>
                      Pakage Contaent &nbsp;
                      {showPakageContent ? (
                        <FaChevronUp className="direction-icon" />
                      ) : (
                        <FaChevronDown className="direction-icon" />
                      )}
                    </h5>
                  </div>
                  {showPakageContent &&
                    pakageContent.map((eachDesc, index) => {
                      return (
                        <h5>
                          {eachDesc.productName}, {eachDesc.attributecolor},{" "}
                          {eachDesc.attributeName}, {eachDesc.attributecolor}
                        </h5>
                      );
                    })}
                </div>
              )}
            </div>
            <div className="price">
              <span className="previous">
                {console.log(data.price)}
                {parseInt(data.price.split(" ")[0]) * productQuantity}{" "}
                {data.price.split(" ")[1]}
              </span>
              <span className="latest">
                {parseInt(data.total_price.split(" ")[0]) * productQuantity}{" "}
                {data.total_price.split(" ")[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

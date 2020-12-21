import React, { useReducer, useEffect } from "react";
import "./product.styles.scss";

import ReactHtmlParser from "react-html-parser";

// slick crowsel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios
import Axios from "../../axios/axios";
import requests from "../../axios/requests";
import { useParams } from "react-router-dom";

// imports regarding context
// import { packageCustomisationReducer } from "../../context/reducers/packageCustomisationReducer";
import { ProductContext } from "../../context/Context";
import {
  PACKAGE_SIDEBAR,
  SET_PRODUCT,
  SET_DISPLAY_PRODUCTS,
} from "../../context/action.types";
import { productReducer } from "../../context/reducers/productReducer";
import { cartReducer } from "../../context/reducers/cartReducer";

// icon imports
import { FiTruck, FiCheck } from "react-icons/fi";
import { AiOutlineSafety } from "react-icons/ai";

// component imports
import Button from "../button/Button.component";
import RectangleBadge from "../rectangle-badge/RectangleBadge.component";
import RoundBadge from "../round-badge/RoundBadge.component";
import PackageCustomisation from "../package-customization/PackageCustomisation.component";
import Counter from "../counter/Counter.component";
import ProductSlider from "../product-slider/ProductSlider.component";
import ImagesSlider from "../imgs-slider/ImgsSlider.component";

export default function Product(props) {
  const [productState, productStateDispatch] = useReducer(productReducer, {
    packageSidebar: "",
    isPackageCutomisationToggled: false,
    product: {},
    CustomisationNestedSidebar: "",
    galleryitems: [],
    currentlySelectedInCustomisation: {},
    customisedProduct: [],
    displayProduct: [],
    savedProduct: null,
  });
  const [cartState, cartStateDispatch] = useReducer(cartReducer, {
    cartProduct: [],
  });
  // extracting params using react router's hook useparams
  const { type, id } = useParams();
  // console.log(params);
  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get(`${requests.getProduct}${type}/${id}`).then((response) => {
      productStateDispatch({
        type: SET_PRODUCT,
        payload: response.data.product,
      });
      productStateDispatch({
        type: SET_DISPLAY_PRODUCTS,
        payload: response.data.product.products_in_package,
      });
    });
  }, [id]);

  const settings = {
    arrows: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };

  const { product } = productState;
  const { galleryitems } = productState;
  const { displayProduct } = productState;

  return (
    <ProductContext.Provider
      value={{
        productState,
        productStateDispatch,
        cartState,
        cartStateDispatch,
      }}
    >
      {Object.keys(product).length !== 0 ? (
        <div className="product">
          <div className={`overlay ${productState.packageSidebar}`}></div>
          <div className="container">
            {/* customisation sidebar  */}
            <PackageCustomisation />

            <div className={`overlay`}></div>
            {/* customisation sidebar ends  */}

            <div className="top">
              <div className="product-imgs-container">
                <div className="images">
                  <Slider {...settings}>
                    {galleryitems.map((img, index) => (
                      <div className="eachslide" key={index}>
                        <img src={`${img}`} alt="img" />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="badges">
                  <RoundBadge>{product.discount}</RoundBadge>
                  {product.shipping === "free" ? (
                    <RectangleBadge>Free Shipping</RectangleBadge>
                  ) : null}
                </div>
              </div>
              <div className="product-details-container">
                <div className="product-title">
                  <div className="product-name">{product.product_name}</div>
                  <div className="stock">
                    {" "}
                    <span className="signal-success"></span> In stock
                  </div>
                </div>
                <div className="extra-customization">0 mth+/Mixed colors</div>
                <div className="price">
                  <div className="previous">{product.price}</div>
                  <div className="latest">{product.total_price}</div>
                </div>
                <div className="product-description">
                  {product.short_descript}
                </div>
                <div className="imgslider">
                  {product.type === "single" ? <ImagesSlider /> : null}
                </div>
                <div className="buttons">
                  {product.type === "single" ? (
                    <Counter
                      onAddQuantity={() => {
                        console.log("+");
                      }}
                      onRemoveQuantity={() => {
                        console.log("-");
                      }}
                    />
                  ) : null}
                  {product.type !== "single" ? (
                    <div
                      className="cutomize-btn"
                      onClick={() => {
                        productStateDispatch({
                          type: PACKAGE_SIDEBAR,
                          payload: "active",
                        });
                      }}
                    >
                      <Button>Customize Package</Button>
                    </div>
                  ) : (
                    <div
                      className="cutomize-btn"
                      onClick={() => {
                        console.log("clicked on add to cart");
                      }}
                    >
                      <Button>Add To Cart</Button>
                    </div>
                  )}
                </div>
                <div className="extra-details">
                  <div className="safe-payment">
                    <span className="icon">
                      <AiOutlineSafety />
                    </span>
                    <span className="text">Safe payment</span>
                  </div>
                  <div className="fast-delivery">
                    <span className="icon">
                      <FiTruck />
                    </span>
                    <span className="text">
                      Fast deliveries around the world
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mid-slider">
              {product.type === "single" ? (
                <ProductSlider data={product.feature_image} />
              ) : null}
            </div>
            <div className="bottom">
              <div className="description">
                <div className="left">
                  <h4 className="product-desc-title">Product Description</h4>
                  <div className="description-text">
                    {ReactHtmlParser(product.long_descript)}
                  </div>
                </div>
                <div className="right">
                  <h4 className="product-desc-title">Features</h4>
                  <div className="description-text">
                    {ReactHtmlParser(product.product_feature)}
                  </div>
                </div>
              </div>

              <div className="add-to-basket">
                <div className="img">
                  <img
                    src={
                      Array.isArray(product.product_thumbnail)
                        ? product.product_thumbnail[0]
                        : product.product_thumbnail
                    }
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <div className="product-title">
                    <div className="product-name">{product.product_name}</div>
                  </div>
                  <div className="extra-customization">0 mth+/Mixed colors</div>
                  <div className="price">
                    <div className="previous">{product.price}</div>
                    <div className="latest">{product.total_price} </div>
                  </div>
                  <div className="add-to-basket-btn">
                    <Button>Add to basket</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </ProductContext.Provider>
  );
}

// <div className="product">
//   <div className="container">
//     {/* customisation sidebar  */}
//     <PackageCustomisationContext.Provider
//       value={{
//         customisationState,
//         customisationStateDispatch,
//       }}
//     >
//       <PackageCustomisation data={product.products_in_package} />
//     </PackageCustomisationContext.Provider>

//     <div className={`overlay`}></div>
//     {/* customisation sidebar ends  */}

//     <div className="top">
//       <div className="product-imgs-container">
//         <div className="images">
//           <Slider {...settings}>
//             {thumbnails.map((img, index) => (
//               <div className="eachslide" key={index}>
//                 <img src={`${img}`} alt="img" />
//               </div>
//             ))}
//           </Slider>
//         </div>
//         <div className="badges">
//           <RoundBadge>50%</RoundBadge>
//           <RectangleBadge>Free Shipping</RectangleBadge>
//         </div>
//       </div>
//       <div className="product-details-container">
//         <div className="product-title">
//           <div className="product-name">{product.product_name}</div>
//           <div className="stock">
//             {" "}
//             <span className="signal-success"></span> In stock
//           </div>
//         </div>
//         <div className="extra-customization">0 mth+/Mixed colors</div>
//         <div className="price">
//           <div className="previous">{product.price}</div>
//           <div className="latest">{product.total_price} AED</div>
//         </div>
//         <div className="product-description">{product.short_descript}</div>
//         <div className="imgslider">
//           {product.type === "single" ? <ImagesSlider /> : null}
//         </div>
//         <div className="buttons">
//           <Counter />
//           {product.type !== "single" ? (
//             <div
//               className="cutomize-btn"
//               onClick={() => {
//                 productStateDispatch({
//                   type: PACKAGE_SIDEBAR,
//                   payload: "active",
//                 });
//               }}
//             >
//               <Button>Customize Package</Button>
//             </div>
//           ) : (
//             <div
//               className="cutomize-btn"
//               onClick={() => {
//                 console.log("clicked on add to cart");
//               }}
//             >
//               <Button>Add To Cart</Button>
//             </div>
//           )}
//         </div>
//         <div className="extra-details">
//           <div className="safe-payment">
//             <span className="icon">
//               <AiOutlineSafety />
//             </span>
//             <span className="text">Safe payment</span>
//           </div>
//           <div className="fast-delivery">
//             <span className="icon">
//               <FiTruck />
//             </span>
//             <span className="text">Fast deliveries around the world</span>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="mid-slider">{/* <ProductSlider /> */}</div>
//     <div className="bottom">
//       <div className="description">
//         <h4 className="product-desc-title">product Description</h4>
//         <div className="description-text">{product.long_descript}</div>
//       </div>
//       <div className="add-to-basket">
//         <div className="img">
//           <img
//             src={
//               Array.isArray(product.product_thumbnail)
//                 ? product.product_thumbnail[0]
//                 : product.product_thumbnail
//             }
//             alt=""
//           />
//         </div>
//         <div className="product-details">
//           <div className="product-title">
//             <div className="product-name">{product.product_name}</div>
//           </div>
//           <div className="extra-customization">0 mth+/Mixed colors</div>
//           <div className="price">
//             <div className="previous">{product.price}</div>
//             <div className="latest">{product.total_price} AED</div>
//           </div>
//           <div className="add-to-basket-btn">
//             <Button>Add to basket</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

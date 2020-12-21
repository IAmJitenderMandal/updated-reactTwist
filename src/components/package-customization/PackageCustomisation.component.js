// import { PACKAGE_CUSTOMISATION_TOGGLE } from "../../context/action.types";
import {
  PACKAGE_SIDEBAR,
  SAVE_PRODUCT,
  SET_DISPLAY_PRODUCTS,
} from "../../context/action.types";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./package-customisation.styles.scss";

// context realted imports
import { ProductContext, AppContext } from "../../context/Context";
import {
  CUSTOMISATION_NESTED_SIDEBAR,
  SELCTED_CURRENT_PRODUCT_IN_CUSTOMISATION,
} from "../../context/action.types";

// react icons
import EditBadge from "../edit-badge/EditBadge.component";

// import SelectedProductOption from "../selectedProductOption/SelectedProductOption.component";
import SelectedProductOption from "../selectedProductOption/SelectedProductCustomisation";
import Button from "../button/Button.component";
import CustomProductCard from "../custom-product-card/CustomProductCard.component";

export default function PackageCustomisation() {
  const { productState, productStateDispatch } = useContext(ProductContext);
  const { cartState, cartStateDispatch } = useContext(AppContext);
  const history = useHistory();
  const [data, setData] = useState(productState.displayProduct);
  const [coustomizeData, setCoustomizeData] = useState([]);
  const [addBasketButton, setAddBasketButton] = useState(false);
  const [coustomizeProductID, setCoustomizeProductID] = useState({
    productID: null,
    productIndex: null,
  });

  useEffect(() => {
    setData(productState.displayProduct);
    if (
      productState.savedProduct &&
      productState.savedProduct.length === productState.displayProduct.length
    ) {
      setAddBasketButton(true);
    } else {
      setAddBasketButton(false);
    }
  }, [productState.displayProduct, coustomizeData]);

  const handlechange = (e, index) => {
    console.log(e.target.id);
    let subProduct = productState.displayProduct[index];
    console.log(" sub product ", subProduct.id);

    setCoustomizeProductID({ productID: subProduct.id, productIndex: index });
    let setDefaultCoustomizeProduct = subProduct;
    // subProduct.product_attribute.map((product,index)=>{
    //   setDefaultCoustomizeProduct.product_attribute[index].attribute_Image=product.product_color_image[0].product_image;
    // })
    setCoustomizeData(setDefaultCoustomizeProduct.product_attribute);
  };
  const handleCancel = () => {
    // setData(productState.product.products_in_package);
    // productStateDispatch({
    //   type: SET_DISPLAY_PRODUCTS,
    //   payload: productState.product.products_in_package,
    // });
    productStateDispatch({
      type: PACKAGE_SIDEBAR,
      payload: "",
    });
    // productStateDispatch({
    //   type: SAVE_PRODUCT,
    //   payload:[],
    // });
  };

  const handleSaveProduct = (saveProductData) => {
    setCoustomizeData([]);
    const saveProdectDataRedux = [];
    console.log("saved Product", productState.savedProduct);
    if (productState.savedProduct) {
      productState.savedProduct.map((eachItem) => {
        if (
          eachItem.productID !== saveProductData.productID ||
          eachItem.index !== saveProductData.index
        ) {
          // alert("enter")
          saveProdectDataRedux.push(eachItem);
        }
      });
      saveProdectDataRedux.push(saveProductData);
      productStateDispatch({
        type: SAVE_PRODUCT,
        payload: saveProdectDataRedux,
      });
    } else {
      productStateDispatch({
        type: SAVE_PRODUCT,
        payload: [saveProductData],
      });
    }
  };

  const handleBasketClick = () => {
    if (
      productState.savedProduct &&
      productState.savedProduct.length === productState.displayProduct.length
    ) {
      history.push("/checkout");
      const saveCartData = [];
      const cartSingleProduct = {
        product: productState.product,
        productDetails: productState.savedProduct,
        quantity: 1,
      };
      if (cartState.cartProduct) {
        cartState.cartProduct.map((eachItem) => {
          saveCartData.push(eachItem);
        });
        saveCartData.push(cartSingleProduct);
        cartStateDispatch({
          type: "SET_PRODDECT",
          payload: saveCartData,
        });
        productStateDispatch({
          type: SAVE_PRODUCT,
          payload: [],
        });
      } else {
        cartStateDispatch({
          type: "SET_PRODDECT",
          payload: [cartSingleProduct],
        });
        productStateDispatch({
          type: SAVE_PRODUCT,
          payload: [],
        });
      }
    }
  };

  return (
    data !== undefined && (
      <div className={`package-customization ${productState.packageSidebar}`}>
        {!coustomizeData.length && (
          <div className="inner-container">
            <Fragment>
              <div className="top-area">
                <div className="heading-top">
                  <div className="text">Customize the package</div>
                  <div className="number-of-products"></div>
                </div>
                {data !== undefined ? (
                  <div className="products">
                    {console.log(data)}
                    {data.map((eachItem, index) => (
                      <CustomProductCard
                        edit={true}
                        savedProduct={productState.savedProduct}
                        key={index}
                        id={eachItem.id}
                        productIndex={index}
                        img={eachItem.product_thumbnail[0]}
                        name={eachItem.product_name}
                        handleOnClick={(e) => {
                          handlechange(e, index);
                        }}
                      ></CustomProductCard>
                    ))}
                    <div>{productState.saveProduct}</div>
                  </div>
                ) : null}
              </div>
              <div className="customization-bottom">
                <div className="cancel-btn" onClick={handleCancel}>
                  <Button>
                    <span>Cancel</span>
                  </Button>
                </div>
                <div className="add-to-basket-btn" onClick={handleBasketClick}>
                  <Button addBasketStatus={addBasketButton}>
                    <span>Add To Basket</span>
                  </Button>
                </div>
              </div>
            </Fragment>
          </div>
        )}
        {coustomizeData.length > 0 && Array.isArray(coustomizeData) && (
          <SelectedProductOption
            customizeProduct={coustomizeData}
            handleOk={(saveProduct) => {
              handleSaveProduct(saveProduct);
            }}
            coustomizeProductID={coustomizeProductID}
          />
        )}
      </div>
    )
  );
}

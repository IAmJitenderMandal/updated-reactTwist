import React, { useEffect, useState, useContext } from "react";
import "./img-slider.styles.scss";

import Axios from "../../axios/axios";
import requests from "../../axios/requests";

import { useParams, useLocation } from "react-router-dom";

// imports related to context
import { SET_MAIN_PRODUCT_SLIDER } from "../../context/action.types";
import { ProductContext } from "../../context/Context";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

export default function ImagesSlider() {
  const [images, setImages] = useState([]);
  const [colorName, setColorName] = useState(null);
  const { productStateDispatch } = useContext(ProductContext);

  // router hooks usage
  const { id } = useParams();
  const { pathname } = useLocation();

  function fetchSliderImages(id) {
    const request = Axios.get(`${requests.getProductSliderMain}${id}`).then(
      (response) => {
        console.log(response);
        productStateDispatch({
          type: SET_MAIN_PRODUCT_SLIDER,
          payload: response.data,
        });
      }
    );
  }

  useEffect(() => {
    async function fetchGalleryImages() {
      const request = await Axios.get(`${requests.getGalleryImages}${id}`).then(
        (response) => {
          setImages(response.data.product.product_color_image[0]);
        }
      );
    }
    fetchGalleryImages();
  }, [id]);

  return (
    images.length && (
      <div className="images-slider">
        <div className="color-name">
          COLOUR: {colorName || images[0].color_name}
        </div>
        <div className="inner-container">
          {images.length && (
            <OwlCarousel
              className="owl-theme"
              mouseDrag={false}
              margin={5}
              items={4}
              nav={true}
              // autoWidth={false}
              navText={["<span><</span>", "<span>></span>"]}
              dots={false}
              // navContainer=".custom-nav .owl-nav"
            >
              {images.map((imgObj, index) => {
                return (
                  <div className="item" key={index}>
                    <img
                      onClick={(e) => {
                        console.log(e.target.id);
                        fetchSliderImages(imgObj.id);
                        setColorName(imgObj.color_name);
                      }}
                      height={100}
                      width={100}
                      src={imgObj.product_image}
                      alt="product-img"
                      id={imgObj.id}
                    />
                  </div>
                );
              })}
            </OwlCarousel>
          )}
        </div>
      </div>
    )
  );
}

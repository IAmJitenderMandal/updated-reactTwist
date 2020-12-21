import React, { useEffect, useState } from "react";
import "./categoryPage.styles.scss";

// imports for axios
import Axios from "../../axios/axios";
import requests from "../../axios/requests";

import VideoBackground from "../../components/videoBackground/VideoBackground.component";
import Row from "../../components/row/Row.component";
import Card from "../../components/card/Card.component";
import HeighlightBar from "../../components/heighlight-bar/HeighlightBar.component";

import { Link, useParams } from "react-router-dom";
import ImageBackground from "../../components/imgBackground/ImageBackground.component";

export default function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  const categories = {
    "sippy-cups": 22,
    "squeeze-bag": 2,
    "teether-and-peciefiers": 14,
    "baby-bottles": 1,
  };

  const categoryBG = {
    "sippy-cups":
      "https://media.twistshake.com/2020/06/05092948/TW-34.jpg?q=70&fit=clip&w=2000&auto=format",
    "baby-bottles":
      "https://media.twistshake.com/2020/07/01125419/Category_Banner-All-Baby-Bottle.jpg?q=70&fit=clip&w=2000&auto=format",
    "teether-and-peciefiers":
      "https://media.twistshake.com/2020/07/06071602/Pacififer.jpg?q=70&fit=clip&w=2000&auto=format",
    "squeeze-bag":
      "https://media.twistshake.com/2020/03/25095621/DSC8337.jpg?q=70&fit=clip&w=2000&auto=format",
  };
  useEffect(() => {
    async function fetchCategoryData(id) {
      const request = await Axios.get(`${requests.getCategory}${id}/${8}`).then(
        (response) => {
          setCategoryProducts(response.data.product);
        }
      );
    }
    fetchCategoryData(categories[category]);
  }, [category]);

  return categoryProducts.length > 0 ? (
    <div className="category-page">
      {/* <VideoBackground>
        <h2 className="heading">Black Week</h2>
        <p className="heading-description">
          Black Week at Twistshake has started. Enjoy 50% off sitewide and get
          free shipping on all packages!
        </p>
      </VideoBackground> */}
      {categoryProducts.length > 0 ? (
        <ImageBackground imgSrc={categoryBG[category]} title={category} />
      ) : null}

      <HeighlightBar />
      <div className="content">
        <div className="category-products">
          <Row title="">
            {categoryProducts.length > 0
              ? categoryProducts.map((product, index) => (
                  <Link
                    to={`/product/${product.type}/${product.id}`}
                    key={index}
                    className="product-link"
                  >
                    <Card eachProduct={product} />
                  </Link>
                ))
              : null}
          </Row>
        </div>
        {/* <div className="text-content">
          <h2 className="title">Twistshake Campaigns</h2>
          <p className="description-text">
            Here you will find lots of great offers and perfect packages
            arranged according to age and needs.
          </p>
        </div> */}
      </div>
    </div>
  ) : (
    <div className="loading"></div>
  );
}

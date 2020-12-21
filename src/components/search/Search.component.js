import React, { useContext } from "react";
import "./search.styles.scss";

import { NavContext } from "../../context/Context";

import Card from "../card/Card.component";
import SearchInput from "../search-input/SearchInput.component";

export default function Search() {
  const { navState } = useContext(NavContext);

  return (
    <div className={`search-content ${navState.isSearchActive}`}>
      <div className="inner-container">
        <div className="input-field">
          <SearchInput placeholder={"Search for your favourites"} />
        </div>
        <div className="popular-searches">
          <span className="title-text">Popular search words</span>
          <div className="keywords">
            <div className="keyword">Baby Bottels</div>
            <div className="keyword">Sippy Cup</div>
            <div className="keyword">Dummies</div>
            <div className="keyword">Stroller</div>
          </div>
        </div>
        <div className="search-area-products">
          <div className="title-text">
            <span className="pp-title-text">Popular products</span>
          </div>
          <div className="product-container">
            <Card img="https://products.twistshake.com/images/442_d98c7d210a-73439-low-front-raw-2-copy-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
            <Card img="https://products.twistshake.com/images/15_5977f4d980-78260-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
            <Card img="https://products.twistshake.com/images/44_cbea88ae16-78280-2-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
            <Card img="https://products.twistshake.com/images/244_136ce77ae0-78480-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
            <Card img="https://products.twistshake.com/images/216_a7b6217ff1-78581-1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
            <Card img="https://products.twistshake.com/images/194_6a04e4c548-78568-2-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Fragment, useReducer, useEffect } from "react";

import "./App.css";
import "./layout.styles.scss";
import "./mediaqueries/main.styles.scss";
// axios
import axios from "axios";

// context imports
import {
  SET_HOME_BEST_SELLER_DATA,
  SET_CAT_ONE_DATA,
  SET_CAT_TWO_DATA,
  SET_CAT_THREE_DATA,
  SET_CAT_FOUR_DATA,
} from "./context/action.types";

import {
  HomeContext,
  NavContext,
  ProductContext,
  AppContext,
} from "./context/Context";
import { navReducer } from "./context/reducers/navReducer";
import { homeReducer } from "./context/reducers/homeReducer";
import { appReducer } from "./context/reducers/appReducer";
import { cartReducer } from "./context/reducers/cartReducer";
// react router imports
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";
import VideoBackground from "./components/videoBackground/VideoBackground.component";
import Header from "./components/header/Header.component";
import HeighlightBar from "./components/heighlight-bar/HeighlightBar.component";
import Row from "./components/row/Row.component";
import Card from "./components/card/Card.component";
import LiveStreamShoppingBanner from "./components/live-stream-shopping-banner/LiveStreamShoppingBanner.component";
import CategoryHeader from "./components/category-header/CategoryHeader.component";
import Button from "./components/button/Button.component";
import Footer from "./components/footer/Footer.component";
// import Campaign from "./components/campaign/Campaign.component";
import Product from "./components/product/Product.component";
import HungerProject from "./components/hunger-project/HungerProject.component";
import LiveShopping from "./components/live-shopping/LiveShopping.component";
import SpecialProduct from "./components/special-product/SpecialProduct.component";
import TwistshakeWorld from "./components/twistshake-world/TwistshakeWorld.component";
import CartSidebar from "./components/cart-sidebar/CartSidebar.component";
import Search from "./components/search/Search.component";
import CategoryPage from "./pages/CategoryPage/CategoryPage.component";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage.component";
import CustomerServicesPage from "./pages/customerServicePage/customerServicepage.component";
import MyAccounPage from "./pages/myAccountPage/MyAccounPage.component";
import Login from "./components/login/Login.component";
import Signup from "./components/signup/Signup.component";
import MobileSearchSidebar from "./components/mobile-search-sidebar/MobileSearchSidebar.component";
import MobileMenuSidebar from "./components/mobile-menu-sidebar/MobileMenuSidebar.component";

function App() {
  const [appState, appStateDispatch] = useReducer(appReducer, {
    cartProductsToSendInDB: [],
    produtToShowInCart: [],
    numberOfProductToAdd: 1,
  });
  const [cartState, cartStateDispatch] = useReducer(cartReducer, {
    cartProduct: null,
  });

  const [homeState, homeStateDispatch] = useReducer(homeReducer, {
    bestSellerProducts: [],
    cat_one: [],
    cat_two: [],
    cat_three: [],
    cat_four: [],
  });

  const [navState, navStateDispatch] = useReducer(navReducer, {
    isCardSideBarActive: "",
    isSearchActive: "",
    searchSideBarMobile: "",
    menuSidebarMobile: "",
  });

  console.log(navState);
  function fetchData() {
    const fetchBestSeller =
      "http://twistshake.ewtlive.in/admin/api/best-seller-products/4";
    const fetchCat1 =
      "http://twistshake.ewtlive.in/admin/api/show-product-by-category/1/2";
    const fetchCat2 =
      "http://twistshake.ewtlive.in/admin/api/show-product-by-category/2/2";
    const fetchCat3 =
      "http://twistshake.ewtlive.in/admin/api/show-product-by-category/14/2";
    const fetchCat4 =
      "http://twistshake.ewtlive.in/admin/api/show-product-by-category/22/2";

    const getBestSeller = axios.get(fetchBestSeller);
    const getCat1 = axios.get(fetchCat1);
    const getCat2 = axios.get(fetchCat2);
    const getCat3 = axios.get(fetchCat3);
    const getCat4 = axios.get(fetchCat4);

    axios.all([getBestSeller, getCat1, getCat2, getCat3, getCat4]).then(
      axios.spread((...allData) => {
        const bestSellerData = allData[0];
        const dataCat1 = allData[1];
        const dataCat2 = allData[2];
        const dataCat3 = allData[3];
        const dataCat4 = allData[4];

        homeStateDispatch({
          type: SET_HOME_BEST_SELLER_DATA,
          payload: bestSellerData.data.products,
        });
        homeStateDispatch({
          type: SET_CAT_ONE_DATA,
          payload: dataCat1.data.product,
        });
        homeStateDispatch({
          type: SET_CAT_TWO_DATA,
          payload: dataCat2.data.product,
        });
        homeStateDispatch({
          type: SET_CAT_THREE_DATA,
          payload: dataCat3.data.product,
        });
        homeStateDispatch({
          type: SET_CAT_FOUR_DATA,
          payload: dataCat4.data.product,
        });
      })
    );
  }

  // fetching data from product api
  useEffect(() => {
    fetchData();
    console.log(homeState);
  }, []);

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{ appState, appStateDispatch, cartState, cartStateDispatch }}
      >
        <div className="App">
          <div className="app-layout">
            <NavContext.Provider value={{ navState, navStateDispatch }}>
              <Navbar />
              <CartSidebar />
              <Search />
              <MobileSearchSidebar />
              <MobileMenuSidebar />
              <div className={`overlay ${navState.isCartSideBarActive}`}></div>
            </NavContext.Provider>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Fragment>
                    <HomeContext.Provider
                      value={{ homeState, homeStateDispatch }}
                    >
                      {/* header starts */}
                      <Header>
                        <VideoBackground>
                          <h2 className="heading">Black Week</h2>
                          <Link to="/">
                            <Button
                              onClick={() => {
                                console.log("clicked");
                              }}
                            >
                              <span>Buy Now</span>
                            </Button>
                          </Link>
                        </VideoBackground>
                      </Header>
                      {/* header ends */}

                      {/* heighlight-bar starts */}
                      <HeighlightBar />
                      {/* heighlight-bar ends */}

                      {/* our best seller section starts */}
                      <Row title="Our best seller">
                        {homeState.bestSellerProducts.length > 0
                          ? homeState.bestSellerProducts.map(
                              (product, index) => (
                                <Link
                                  to={`/product/${product.type}/${product.id}`}
                                  className="product-link"
                                  key={index}
                                >
                                  <Card eachProduct={product} />
                                </Link>
                              )
                            )
                          : null}
                      </Row>
                      {/* our best seller section ends */}

                      {/* live shopping  section starts */}
                      <LiveStreamShoppingBanner />
                      {/* live shopping  section starts */}

                      {/* twistshake table ware products section starts */}
                      <Row title="">
                        <div className="twistshake-tableware left-started">
                          <div className="left-card">
                            <CategoryHeader
                              backgroundImage={
                                "http://twistshake.ewtlive.in/admin/product_thumbnail/78279_1.png"
                              }
                              title={"OUR BEST BABY BOTTLES"}
                              subtitle={"TWISTSHAKE BOTTLES"}
                            >
                              <Link to="/pages/baby-bottles">
                                <Button>
                                  <span>Shop Now</span>
                                </Button>
                              </Link>
                            </CategoryHeader>
                          </div>
                          <div className="right-cards">
                            {homeState.cat_one.length > 0
                              ? homeState.cat_one.map((product, index) => (
                                  <Link
                                    key={index}
                                    to={`/product/${product.type}/${product.id}`}
                                    className="product-link"
                                  >
                                    <Card eachProduct={product} />
                                  </Link>
                                ))
                              : null}
                          </div>
                        </div>
                      </Row>
                      {/* twistshake table ware products section ends */}

                      {/* twistshake squeeze bags products section starts */}
                      <Row title="">
                        <div className="twistshake-squeeze-bags right-started">
                          <div className="left-cards">
                            {homeState.cat_two.length > 0
                              ? homeState.cat_two.map((product, index) => (
                                  <Link
                                    key={index}
                                    to={`/product/${product.type}/${product.id}`}
                                    className="product-link"
                                  >
                                    <Card eachProduct={product} />
                                  </Link>
                                ))
                              : null}
                          </div>
                          <div className="right-card">
                            <CategoryHeader
                              backgroundImage={
                                "https://media.twistshake.com/2020/07/06082526/hmogminit.png?q=70&fit=clip&w=700&auto=format"
                              }
                              title={"SNACK ON THE GO"}
                              subtitle={"Squeeze Bags"}
                            >
                              <Link to="/pages/squeeze-bag">
                                <Button>
                                  <span>Shop Now</span>
                                </Button>
                              </Link>
                            </CategoryHeader>
                          </div>
                        </div>
                      </Row>
                      {/* twistshake squeeze bags products section ends */}

                      {/* twistshake storollers products section starts */}
                      <Row title="">
                        <div className="twistshake-stroller left-started">
                          <div className="left-card dark-content">
                            <CategoryHeader
                              backgroundImage={
                                "https://products.twistshake.com/images/48_08ac59df5e-pacifier1-original.jpg?q=70&fit=clip&w=400&fm=jpg&bg=FAFAFA&auto=format"
                              }
                              title={"OUR STYLISH PECIEFIERS AND TEETHERS"}
                              subtitle={"Twistshake PECIEFIERS"}
                            >
                              <Link to="/pages/teether-and-peciefiers">
                                <Button>
                                  <span>Shop Now</span>
                                </Button>
                              </Link>
                            </CategoryHeader>
                          </div>
                          <div className="right-cards">
                            {homeState.cat_three.length > 0
                              ? homeState.cat_three.map((product, index) => (
                                  <Link
                                    key={index}
                                    to={`/product/${product.type}/${product.id}`}
                                    className="product-link"
                                  >
                                    <Card eachProduct={product} />
                                  </Link>
                                ))
                              : null}
                          </div>
                        </div>
                      </Row>
                      {/* twistshake strollers products section ends */}

                      {/* twistshake squeeze bags products section starts */}
                      <Row title="">
                        <div className="twistshake-baby-bottles right-started">
                          <div className="left-cards">
                            {homeState.cat_four.length > 0
                              ? homeState.cat_four.map((product, index) => (
                                  <Link
                                    key={index}
                                    to={`/product/${product.type}/${product.id}`}
                                    className="product-link"
                                  >
                                    <Card eachProduct={product} />
                                  </Link>
                                ))
                              : null}
                          </div>
                          <div className="right-card dark-content">
                            <CategoryHeader
                              backgroundImage={
                                "https://media.twistshake.com/2020/10/01092314/Babybottle.jpg?q=70&fit=clip&w=700&auto=format"
                              }
                              title="OUR STYLISH Baby Bottles"
                              subtitle="Baby Bottles"
                            >
                              <Link to="/pages/sippy-cups">
                                <Button>
                                  <span>Shop Now</span>
                                </Button>
                              </Link>
                            </CategoryHeader>
                          </div>
                        </div>
                      </Row>
                      {/* twistshake squeeze bags products section ends */}

                      {/* twistshake freash and trendy products section starts */}
                      {/* <Row title="">
                      <div className="twistshake-freash-trendy left-started">
                        <div className="left-card dark-content">
                          <CategoryHeader
                            backgroundImage={
                              "https://media.twistshake.com/2020/10/01092315/News.jpg?q=70&fit=clip&w=700&auto=format"
                            }
                            title={"FRESH AND TRENDY"}
                            subtitle={"Latest news"}
                          >
                            <Link to="/tableware">
                              <Button>
                                <span>Shop Now</span>
                              </Button>
                            </Link>
                          </CategoryHeader>
                        </div>
                        <div className="right-cards">
                          <Link to="/product" className="product-link">
                            <Card img="https://products.twistshake.com/images/615_eb42763d02-73502-original.jpg?q=70&fit=clip&w=600&fm=jpg&bg=FAFAFA&auto=format" />
                          </Link>
                          <Link to="/product" className="product-link">
                            <Card img="https://products.twistshake.com/images/610_21cc4669dd-73500-original.jpg?q=70&fit=clip&w=600&fm=jpg&bg=FAFAFA&auto=format" />
                          </Link>
                        </div>
                      </div>
                    </Row> */}
                      {/* twistshake freash and trendy products section ends */}

                      {/* twistshake kitchen tools products section starts */}
                      {/* <Row title="">
                      <div className="twistshake-kitchen-tools right-started">
                        <div className="left-cards">
                          <Link to="/product" className="product-link">
                            <Card img="https://products.twistshake.com/images/617_b4cba93f91-73504-original.jpg?q=70&fit=clip&w=600&fm=jpg&bg=FAFAFA&auto=format" />
                          </Link>
                          <Link to="/product" className="product-link">
                            <Card img="https://products.twistshake.com/images/436_7b51145d7d-73314-original.jpg?q=70&fit=clip&w=600&fm=jpg&bg=FAFAFA&auto=format" />
                          </Link>
                        </div>
                        <div className="right-card light-content">
                          <CategoryHeader
                            backgroundImage={
                              "https://media.twistshake.com/2020/07/06082636/2.jpg?q=70&fit=clip&w=700&auto=format"
                            }
                            title="KITCHEN TOOLS"
                            subtitle="Everyday easy"
                          >
                            <Link to="/tableware">
                              <Button>
                                <span>Shop Now</span>
                              </Button>
                            </Link>
                          </CategoryHeader>
                        </div>
                      </div>
                    </Row> */}
                      {/* twistshake kitchen tools products section ends */}
                    </HomeContext.Provider>
                  </Fragment>
                )}
              />{" "}
              {/* <Route
              path="/campaign"
              render={() => (
                <Fragment>
                  <Campaign />
                </Fragment>
              )}
            /> */}
              <Route path="/pages/:category" render={() => <CategoryPage />} />
              <Route path="/news" render={() => <div></div>} />
              <Route path="/squeeze-bags" render={() => <div></div>} />
              <Route path="/tableware" render={() => <div></div>} />
              <Route path="/sippy-cups" render={() => <div></div>} />
              <Route path="/baby-bottles" render={() => <div></div>} />
              <Route path="/strollers" render={() => <div></div>} />
              <Route path="/pacifiers-teethers" render={() => <div></div>} />
              <Route path="/textiles" render={() => <div></div>} />
              <Route path="/accessories" render={() => <div></div>} />
              <Route
                path="/the-hunger-project"
                render={() => (
                  <Fragment>
                    <HungerProject />
                  </Fragment>
                )}
              />
              <Route
                path="/live-shopping"
                render={() => (
                  <Fragment>
                    <LiveShopping />
                  </Fragment>
                )}
              />
              <Route path="/product/:type/:id" render={() => <Product />} />
              <Route
                path="/special-product"
                render={() => (
                  <Fragment>
                    <SpecialProduct />
                  </Fragment>
                )}
              />
              <Route
                path="/twistshake-world"
                render={() => (
                  <Fragment>
                    <TwistshakeWorld />
                  </Fragment>
                )}
              />
              <Route
                path="/checkout"
                render={() => (
                  <Fragment>
                    <CheckOutPage />
                  </Fragment>
                )}
              />
              <Route
                path="/customer-service/:service"
                component={CustomerServicesPage}
              />
              <Route path="/myaccount" render={() => <MyAccounPage />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/create-account" render={() => <Signup />} />
            </Switch>
            {/* footer starts here */}
            <Footer />
            {/* footer ends here */}
          </div>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;

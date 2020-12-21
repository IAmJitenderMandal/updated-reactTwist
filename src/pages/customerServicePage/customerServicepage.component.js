import React from "react";

import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";

import CustomerServiceNavbar from "../../components/customer-service-navbar/CustomerServiceNavbar.component";
import CustomerServiceHero from "../../components/customer-services-hero/CustomerServiceHero.component";
import HeighlightBar from "../../components/heighlight-bar/HeighlightBar.component";
import AboutPage from "../aboutpage/AboutPage.component";
import AmbassadorPage from "../ambassadorPage/AmbassadorPage.component";
import ContactPage from "../ContactPage/ContactPage.component";

export default function CustomerServicesPage() {
  const { pathName } = useLocation();
  console.log();
  return (
    <div className="CustomerServicesPage">
      <CustomerServiceHero />
      <HeighlightBar />
      <CustomerServiceNavbar />
      <Switch>
        <Route path={`/customer-service/about-us`} component={AboutPage} />
        <Route
          path={`/customer-service/ambassador`}
          component={AmbassadorPage}
        />
        <Route path={`/customer-service/contact`} component={ContactPage} />
        <Route path={`/customer-service/about-us`} component={AboutPage} />
      </Switch>
    </div>
  );
}

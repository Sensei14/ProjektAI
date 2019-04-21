import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={() => "HOME"} />
        <Route path="/products" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/register" component={RegisterPage} />
        

        <Route component={() => "ERROR PAGE"} />
      </Switch>
    </div>
  );
};

export default Content;

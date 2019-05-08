import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import SingleProduct from "../pages/SingleProduct";
import RulesPage from "../pages/RulesPage";
import ShoppingCart from "../pages/ShoppingCart";
import LoginPage from "../pages/LoginPage";

const Content = props => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/product/:name" component={SingleProduct} />
        <Route path="/rules" component={RulesPage} />
        <Route path="/shoppingcart" component={ShoppingCart} />

        <Route path="/login" component={LoginPage} />

        <Route component={() => "ERROR PAGE"} />
      </Switch>
    </div>
  );
};

export default Content;

import React from "react";
import { Route, Switch } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={() => "HOME"} />
        <Route path="/products" component={() => "PRODUKTY"} />
        <Route path="/contact" component={() => "KONTAKT"} />

        <Route component={() => "ERROR PAGE"} />
      </Switch>
    </div>
  );
};

export default Content;

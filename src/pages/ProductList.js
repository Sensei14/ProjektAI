import React, { Component } from "react";
import "../styles/products.css";
// import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import Product from "./Product";

class ProductList extends Component {
  state = {
    products: [],

    rodzaj: "all"
  };

  componentDidMount() {
    fetch("http://localhost:3010/products")
      .then(res => res.json())
      .then(res =>
        this.setState({
          products: res
        })
      );
  }

  handleChange = event => {
    this.setState({ rodzaj: event.target.value });
  };

  render() {
    let rodzaj = this.state.rodzaj;
    let products = [...this.state.products];

    if (rodzaj === "all") {
      products = products.map(product => (
        <Product key={product._id} products={product} />
      ));
    } else if (rodzaj === "bialko") {
      products = products.filter(product => product.type === "protein");
      products = products.map(product => (
        <Product key={product._id} products={product} />
      ));
    } else if (rodzaj === "kreatyna") {
      products = products.filter(product => product.type === "creatine");
      products = products.map(product => (
        <Product key={product._id} products={product} />
      ));
    } else if (rodzaj === "shot") {
      products = products.filter(product => product.type === "pump");
      products = products.map(product => (
        <Product key={product._id} products={product} />
      ));
    } else if (rodzaj === "gainer") {
      products = products.filter(product => product.type === "gainer");
      products = products.map(product => (
        <Product key={product._id} products={product} />
      ));
    }
    return (
      <>
        <div className="categories">
          <div className="select">
            <select value={this.state.rodzaj} onChange={this.handleChange}>
              <option value="all">Kategorie</option>
              <option value="bialko">Białko</option>
              <option value="gainer">Gainer</option>
              <option value="kreatyna">Kreatyna</option>
              <option value="shot">Shot</option>
            </select>
          </div>
        </div>
        <div className="products-container">{products}</div>
      </>
    );
  }
}

export default ProductList;

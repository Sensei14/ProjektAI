import React, { Component } from "react";
import "../styles/products.css";
// import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import Product from "./Product";

class ProductList extends Component {
  state = {
    value: 0,
    availble: 7,
    isModalOpen: false,
    isModalInfoOpen: false,
    isSomethinginShopCard: false,
    products: []
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

  handleChangeValue = type => {
    if (type === "+") {
      this.setState({
        value: this.state.value + 1
      });
    } else if (type === "-") {
      this.setState({
        value: this.state.value - 1
      });
    }
  };

  handleBuy = () => {
    this.setState({
      availble: this.state.availble - this.state.value,
      value: 0,
      isSomethinginShopCard: true
    });
  };

  handleToggleModal = () => {
    console.log("xd");
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  handleToggleInfo = () => {
    this.setState({
      isModalInfoOpen: !this.state.isModalInfoOpen
    });
  };

  render() {
    let products = [...this.state.products];
    products = products.map(product => (
      <Product key={products._id} products={product} />
    ));

    return <div className="products-container">{products}</div>;
  }
}

export default ProductList;

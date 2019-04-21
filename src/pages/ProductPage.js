import React, { Component } from "react";
import "../styles/products.css";

class ProductPage extends Component {


     state = {
    value: 0,
    availble: 7
  };

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
      value: 0
    });
  };


    render (){
    return (
        <div className="products">
            <img src="https://ecsmedia.pl/c/biotech-odzywka-bialkowa-iso-whey-zero-908-g-w-iext52941782.jpg" alt=""/>
              <div>
        <p>Dostępna ilość produktu to {this.state.availble} </p>
        <button
          disabled={this.state.value === this.state.availble ? true : false}
          onClick={() => this.handleChangeValue("+")}
        >
          +
        </button>
        <span> {this.state.value}</span>
        <button
          disabled={this.state.value === 0 ? true : false}
          onClick={() => this.handleChangeValue("-")}
        >
          -
        </button>
        <span>
          {this.state.value > 0 ? (
            <button onClick={this.handleBuy}>Kup</button>
          ) : null}
        </span>
      </div>
        </div>
    );
}}

export default ProductPage;
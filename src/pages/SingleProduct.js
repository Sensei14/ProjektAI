import React from "react";
import "../styles/singleproduct.css";
import { Link } from "react-router-dom";

class SingleProduct extends React.Component {
  state = {
    product: {
      item: {},
      amount: 1,
      addToCartMessage: "",
      showMessage: false
    }
  };

  componentDidMount() {
    fetch(`http://localhost:3010/products/${this.props.match.params.name}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          product: {
            item: res[0],
            amount: 1
          }
        })
      );
  }

  AddToCart = e => {
    e.preventDefault();

    fetch("http://localhost:3010/shoppingCartAdd", {
      method: "POST",
      body: JSON.stringify(this.state.product),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          addToCartMessage: res.text,
          showMessage: true
        });
      });
  };

  handleChange = e => {
    this.setState({
      product: {
        item: this.state.product.item,
        amount: e.target.value
      }
    });
  };

  render() {
    const addMessage = (
      <div className="alert alert-primary">
        <strong>{this.state.addToCartMessage}</strong>
      </div>
    );

    const {
      name,
      description,
      image,
      portioning,
      Ingredients,
      price
    } = this.state.product.item;

    return (
      <div className="single-product">
        <div className="product-name"> {name} </div>

        <div className="product-info">
          <div className="img-product">
            <img src={image} alt="produkt" />{" "}
          </div>

          <div className="tab-product">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#desc">
                  Opis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#portion">
                  Skład
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#ingr">
                  Zalecane dawkowanie
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane container active" id="desc">
                {description}
              </div>
              <div className="tab-pane container fade" id="portion">
                {portioning}
              </div>
              <div className="tab-pane container fade" id="ingr">
                {Ingredients}
              </div>
            </div>
          </div>

          <div className="price">
            <p>{price} zł </p>
            <form onSubmit={this.AddToCart}>
              <div className="form-group">
                <label>Ilość: </label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.product.amount}
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-warning btn-block btn-lg">
                Dodaj do koszyka
              </button>
            </form>
          </div>
        </div>
        <div className="toProducts">
          <Link to="/products"> Powrót do produktów </Link>
        </div>

        {this.state.showMessage ? (
          <div className="add-message"> {addMessage} </div>
        ) : null}
      </div>
    );
  }
}

export default SingleProduct;

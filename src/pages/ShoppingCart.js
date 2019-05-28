import React, { Component } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { Modal, ModalHeader, ModalFooter } from "reactstrap";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLogged: this.props.isLogged,
      products: [],
      openSummary: false,
      name: "",
      lastname: "",
      city: "",
      street: "",
      username: "",
      wasLogged: this.props.isLogged,
      itemRemoved: false,
      itemsPurchased: false,
      loginAsk: false,
      cannotBuy: false,
      buyMsg: false
    };
  }

  componentWillMount() {
    if (this.props.isLogged) {
      this.setState({
        user: this.props.loggedUser,
        username: this.props.loggedUser.login.username,
        name: this.props.loggedUser.userData.name,
        lastname: this.props.loggedUser.userData.lastname,
        city: this.props.loggedUser.adress.city,
        street: this.props.loggedUser.adress.street
      });
    }
  }

  componentDidMount() {
    fetch("http://localhost:3010/shoppingCart")
      .then(res => res.json())
      .then(res => {
        this.setState({
          products: res
        });
      });
  }

  componentWillUpdate() {
    if (this.props.isLogged === true && this.state.wasLogged === false) {
      this.setState({
        wasLogged: true,
        user: this.props.loggedUser,
        username: this.props.loggedUser.login.username,
        name: this.props.loggedUser.userData.name,
        lastname: this.props.loggedUser.userData.lastname,
        city: this.props.loggedUser.adress.city,
        street: this.props.loggedUser.adress.street
      });
    }

    fetch("http://localhost:3010/shoppingCart")
      .then(res => res.json())
      .then(res => {
        if (this.state.itemRemoved) {
          this.setState({
            itemRemoved: false
          });
        } else {
          if (this.state.itemsPurchased) {
            this.setState({
              itemsPurchased: false
            });
          } else {
            if (this.state.products.length < res.length)
              this.setState({
                products: res
              });
          }
        }
      });
  }

  add = id => {
    const index = this.state.products.findIndex(
      product => product.items[0]._id === id
    );

    const products = [...this.state.products];

    products[index].amount += 1;
    this.setState({
      products
    });
  };

  substract = id => {
    const index = this.state.products.findIndex(
      product => product.items[0]._id === id
    );

    const products = [...this.state.products];

    if (products[index].amount > 1) {
      products[index].amount -= 1;
      this.setState({
        products
      });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  removeItem = id => {
    fetch(`http://localhost:3010/shoppingCart/${id}`);

    let products = [...this.state.products];
    products = products.filter(product => product._id !== id);
    this.setState({
      products,
      itemRemoved: true
    });
  };

  handleBuy = () => {
    if (!this.validateSummary()) {
      this.setState({
        cannotBuy: true
      });
    } else {
      fetch("http://localhost:3010/shoppingCartBuy");

      this.setState({
        products: [],
        openSummary: false,
        itemsPurchased: true,
        cannotBuy: false,
        buyMsg: true
      });
    }
  };

  summarize = () => {
    this.setState({ openSummary: !this.state.openSummary });
  };

  validateSummary = () => {
    const { name, lastname, city, street } = this.state;

    let success = false;

    if (
      name.length > 0 &&
      lastname.length > 0 &&
      city.length > 0 &&
      street.length > 0
    )
      success = true;

    return success;
  };

  render() {
    const cannotBuy = (
      <div className="alert alert-warning">Wypełnij wszystkie pola!</div>
    );

    const buyMessage = (
      <div className="alert alert-success">
        {" "}
        <strong>Dziękujemy za zakupy! </strong>
      </div>
    );
    let products = this.state.products.map(product => (
      <ShoppingCartItem
        key={product._id}
        info={product}
        add={this.add}
        substract={this.substract}
        removeItem={this.removeItem}
      />
    ));

    let totalPrice = 0;
    this.state.products.forEach(
      product => (totalPrice += product.amount * product.items[0].price)
    );
    return (
      <>
        {products.length === 0 ? (
          <p
            style={{
              fontSize: "30px",
              fontWeight: "600",
              margin: "20px"
            }}
          >
            Koszyk jest pusty
            <hr />
            {this.state.buyMsg ? <div>{buyMessage}</div> : null}
          </p>
        ) : (
          <div>
            <div style={{ backgroundColor: "white" }}>
              <div>{products}</div>
              <div className="totalPrice">
                Do zapłaty: {totalPrice.toFixed(2)}zł
              </div>
            </div>
            <div className="summary">
              <button
                className="btn btn-danger btn-block"
                onClick={this.summarize}
              >
                {" "}
                PODSUMOWANIE{" "}
              </button>
            </div>

            <div className="modal" id="summaryModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <Modal isOpen={this.state.openSummary}>
                    <ModalHeader>
                      Użytkownik: {this.state.username}{" "}
                    </ModalHeader>
                    <div className="modal-body summary-info">
                      <span> Do zapłaty: {totalPrice.toFixed(2)} zł </span>
                      <div>
                        <p> Informacje do wysyłki: </p>
                        <div className="form-group">
                          <label>Imię: </label>
                          <input
                            type="text"
                            defaultValue={this.state.name}
                            className="form-control"
                            onChange={this.handleChange}
                            name="name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Nazwisko: </label>
                          <input
                            type="text"
                            defaultValue={this.state.lastname}
                            className="form-control"
                            onChange={this.handleChange}
                            name="lastname"
                          />
                        </div>
                        <div className="form-group">
                          <label>Miasto: </label>
                          <input
                            type="text"
                            defaultValue={this.state.city}
                            className="form-control"
                            onChange={this.handleChange}
                            name="city"
                          />
                        </div>
                        <div className="form-group">
                          <label>Ulica: </label>
                          <input
                            type="text"
                            defaultValue={this.state.street}
                            className="form-control"
                            onChange={this.handleChange}
                            name="street"
                          />
                        </div>
                      </div>
                      <button
                        className="btn btn-danger btn-block "
                        onClick={this.handleBuy}
                      >
                        Zapłać
                      </button>
                      {this.state.cannotBuy ? <div> {cannotBuy} </div> : null}
                    </div>
                    <ModalFooter>
                      <button
                        className="btn btn-secondary"
                        onClick={() => this.setState({ openSummary: false })}
                      >
                        {" "}
                        Powrót
                      </button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ShoppingCart;

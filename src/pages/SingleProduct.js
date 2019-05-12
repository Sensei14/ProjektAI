import React from "react";
import "../styles/singleproduct.css";
import { Link } from "react-router-dom";

class SingleProduct extends React.Component {
  state = {
    count: 0,
    product: {}
  };

  componentDidMount() {
    fetch(`http://localhost:3010/products/${this.props.match.params.name}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          product: res[0]
        })
      );
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);
  };

  render() {
    const {
      name,
      description,
      image,
      portioning,
      Ingredients,
      price
    } = this.state.product;

    return (
      <div className="single-container">
        <div className="name"> {name} </div>

        <div className="imgs">
          <img src={image} alt="zdj" />
        </div>
        <div className="amount-item">
          <button className="amount">750g</button>
        </div>
        <div className="info-item">
          <div className="info">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Opis
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Skład
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Zalecane dawkowanie
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {description}
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {Ingredients}
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                {portioning}
              </div>
            </div>
          </div>
        </div>

        <div className="price-add-item">
          <div className="price-add">
            {price} zł
            <p>
              {" "}
              <button>Dodaj do koszyka</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;

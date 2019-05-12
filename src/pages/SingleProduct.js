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
      <div className="single-product">
        <div className="product-name"> {name} </div>

        <div className="product-info">
          <div className="img-product">
            <img src={image} alt="image" />{" "}
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
            <button className="btn btn-warning btn-block btn-lg">
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;

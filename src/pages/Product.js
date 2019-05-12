import React from "react";
// import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";

const Product = props => {
  console.log(props);
  const { name, description, _id, image } = props.products;
  const adres = `/product/${_id}`;
  return (
    <div className="products-item">
      <img src={image} alt="img" width="200px" />

      <br />
      <p className="productname"> {name} </p>

      <span className="description">{description}</span>
      <Link to={adres}>
        <button>Sprawdź produkt</button>
      </Link>
    </div>
  );
};

export default Product;

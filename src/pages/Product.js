import React from "react";
// import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import bialeczko1 from "../images/bialeczko1.png";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Product = (props) => {

  
  

  const { name, opis} = props.products;
    const adres = `/product/${ name }`;
  return (
    <div className="products-item">
      <img src={bialeczko1} alt="kasztan" />

      <br />
      <p className="productname"> {name} </p>

      <span className="description">{opis}</span>
      <Link to={adres}>
        <button>Sprawdź produkt</button>
      </Link>
    </div>
  );
};

export default Product;



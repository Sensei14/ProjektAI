import React from "react";
import "../styles/shoppingCart.css";

const ShoppingCartItem = props => {
  const item = props.info.items[0];

  return (
    <div className="shoppingCart">
      <div>
        {" "}
        <img src={item.image} alt="item" width="50px" />{" "}
      </div>
      <div className="item-name">{item.name} </div>
      <div className="item-amount">
        <button
          className="btn btn-warning"
          onClick={() => props.substract(item._id)}
        >
          {" "}
          -{" "}
        </button>
        <button className="btn btn-info"> {props.info.amount} </button>
        <button className="btn btn-warning" onClick={() => props.add(item._id)}>
          {" "}
          +{" "}
        </button>
      </div>
      <div className="item-price">{item.price}zł / szt. </div>
      <div className="item-remove">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => props.removeItem(props.info._id)}
        >
          Usuń produkt
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;

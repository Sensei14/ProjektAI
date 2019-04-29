import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
          <div className="logomarg">
          <h1 id="logotext" className="display-3">
            KASZTANIAKI
          </h1>
          <p className="lead">
            Najlepszy sklep z odżywkami według magazynu Kasztan 2019.
          </p>
      </div>
    </div>
  );
};

export default Header;

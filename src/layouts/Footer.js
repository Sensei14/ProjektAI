import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <i className="fab fa-facebook-square fa-2x" />

        <i className="fab fa-twitter-square fa-2x" />

        <i className="fab fa-instagram fa-2x" />
        <i className="fab fa-youtube fa-2x" />
      </div>
      <div className="footer-copyright py-3">
        <Link to="/rules">Regulamin </Link>| © 2019 Sklep MUSCLE POWER
      </div>
    </div>
  );
};

export default Footer;

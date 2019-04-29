import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <i className="fab fa-facebook-square fa-lg" />

        <i className="fab fa-twitter-square fa-lg" />

        <i className="fab fa-instagram fa-lg" />
        <i className="fab fa-youtube fa-lg" />
      </div>
      <div className="footer-copyright py-3">
        Regulamin | © 2019 Sklep KASZTANIAKI
      </div>
    </div>
  );
};

export default Footer;

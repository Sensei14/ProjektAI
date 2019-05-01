import React from "react";
import "../styles/footer.css";
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
        Regulamin | © 2019 Sklep KASZTANIAKI
      </div>
    </div>
  );
};

export default Footer;

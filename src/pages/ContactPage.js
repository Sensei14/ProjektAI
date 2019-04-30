import React from "react";
import "../styles/contactpage.css";

const ContactPage = () => {
  return (
    <div className="contact">
      <div>
        <span>
          <i className="fas fa-phone-square fa-3x" />
          <br /> 512 067 291 <br /> 665 442 704
        </span>
        <hr />
      </div>
      <div>
        <span>
          <i className="fas fa-at fa-3x" />
          <br /> biuro@kasztany.pl
          <br /> kasztan@kasztany.pl
        </span>
        <hr />
      </div>
    </div>
  );
};

export default ContactPage;
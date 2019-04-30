import React from "react";
import "../styles/homepage.css";
import img1 from "../images/home1.jpg";
import img2 from "../images/home2.jpg";

import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
import t4 from "../images/t4.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <img src={img2} alt="home2" />
      <img src={img1} alt="home2" /> */}

      <div className="trainers">
        <p> Nasi trenerzy pomogą Ci z planem treningowym i dietą </p>
        <img src={t1} alt="T" />
        <img src={t2} alt="T" />
        <img src={t3} alt="T" />
        <img src={t4} alt="T" />
      </div>
      <hr />

      <div className="homeicons">
        <span>
          <i class="fas fa-truck fa-lg" />
          Darmowa Dostawa
        </span>
        <span>
          <i class="fas fa-medal fa-lg"> </i>
          Gwarancja jakości
        </span>
      </div>
    </div>
  );
};

export default HomePage;

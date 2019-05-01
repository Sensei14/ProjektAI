import React from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import img1 from "../images/home1.jpg";
import img2 from "../images/home2.jpg";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
import t4 from "../images/t4.jpg";
import h1 from "../images/h1.jpg";
import h2 from "../images/h2.jpg";
import h3 from "../images/h3.jpg";
import h4 from "../images/h4.jpg";
import h5 from "../images/h5.jpg";
import h6 from "../images/h6.jpg";
import h7 from "../images/h7.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <img src={img2} alt="home2" />
      <img src={img1} alt="home2" /> */}

      <div id="demo" className="carousel slide" dataRide="carousel">
        <ul className="carousel-indicators">
          <li dataTarget="#demo" dataSlideTo="0" className="active" />
          <li dataTarget="#demo" dataSlideTo="1" />
          <li dataTarget="#demo" dataSlideTo="2" />
          <li dataTarget="#demo" dataSlideTo="3" />
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={h1} alt="H" />
          </div>

          <div className="carousel-item">
            <img src={h2} alt="H" />
          </div>

          <div className="carousel-item">
            <img src={h3} alt="H" />
          </div>

          <div className="carousel-item">
            <img src={h4} alt="H" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" dataSlide="prev">
          <span className="carousel-control-prev-icon" />
        </a>

        <a className="carousel-control-next" href="#demo" dataSlide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>

      <div className="trainers">
        <p> Nasi trenerzy pomogą Ci z planem treningowym i dietą </p>
        <p>
          <img src={t1} alt="T" />
          <img src={t2} alt="T" />
        </p>
        <img src={t3} alt="T" />
        <img src={t4} alt="T" />
      </div>

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

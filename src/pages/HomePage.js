import React from "react";
// import { Link } from "react-router-dom";
import "../styles/homepage.css";
// import img1 from "../images/home1.jpg";
// import img2 from "../images/home2.jpg";
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
import h8 from "../images/h8.jpg";
import h9 from "../images/h9.jpg";
import h10 from "../images/h10.jpg";
import visa from "../images/visa.png";
import paypal from "../images/paypal.png";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <img src={img2} alt="home2" />
      <img src={img1} alt="home2" /> */}
      <div className="homeicons">
        <span>
          <i class="fas fa-medal fa-2x" style={{ color: "gold" }} />
          <br />
          SETKI PRODUKTÓW NAJWYŻSZEJ JAKOŚCI
        </span>
      </div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active" />
          <li data-target="#demo" data-slide-to="1" />
          <li data-target="#demo" data-slide-to="2" />
          <li data-target="#demo" data-slide-to="3" />
          <li data-target="#demo" data-slide-to="4" />
          <li data-target="#demo" data-slide-to="5" />
          <li data-target="#demo" data-slide-to="6" />
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={h1} alt="Los Angeles" width="100%" />
          </div>
          <div className="carousel-item">
            <img src={h2} alt="Chicago" width="100%" />
          </div>
          <div className="carousel-item">
            <img src={h3} alt="New York" width="100%" />
          </div>
          <div className="carousel-item">
            <img src={h4} alt="New York" width="100%" />
          </div>
          <div className="carousel-item">
            <img src={h5} alt="New York" width="100%" />
          </div>
          <div className="carousel-item">
            <img src={h6} alt="New York" width="100%" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
      <div className="homeicons">
        <span>
          <i class="fas fa-star fa-2x" style={{ color: "gold" }} />
          <br />
          TYSIĄCE ZADOWOLONYCH KLIENTÓW, W TYM DOŚWIADCZENI KULTURYŚCI
        </span>
      </div>
      <div id="demo1" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo1" data-slide-to="0" className="active" />
          <li data-target="#demo1" data-slide-to="1" />
          <li data-target="#demo1" data-slide-to="2" />
          <li data-target="#demo1" data-slide-to="3" />
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={h7} alt="Los Angeles" width="100%" />
          </div>
          <div className="carousel-item">
            <img src={h8} alt="Chicago" width="100%" />
          </div>
          <div className="carousel-item">
            <img src={h9} alt="New York" width="100%" />
          </div>
          <div className="carousel-item">
            <img src={h10} alt="New York" width="100%" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo1" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo1" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>

      <div className="homeicons">
        <span>
          NASI TRENERZY POMOGĄ CI DOBRAĆ ODPOWIEDNIE DLA CIEBIE PRODUKTY
        </span>
        <div className="trainers">
          <img src={t1} alt="trener" />
          <img src={t2} alt="trener" />
          <br />
          <img src={t3} alt="trener" />
          <img src={t4} alt="trener" />
        </div>
      </div>

      <div className="homeicons">
        <ul>
          <li>
            <i class="fas fa-heart fa-lg" />
            <br />
            99% ZADOWOLONYCH KLIENTÓW
          </li>
          <li>
            <i class="fas fa-sync-alt fa-lg" /> <br />
            30 DNI NA ZWROT ZAKUPIONEGO TOWARU
          </li>
          <li>
            <i class="fas fa-truck-moving fa-lg" /> <br />
            DARMOWA DOSTAWA
          </li>
        </ul>
      </div>

      <div className="payment">
        Płatności obsługują:
        <ul>
          <li>
            <img src={visa} alt="VISA" width="100px" />
          </li>
          <li>
            <img src={paypal} alt="PayPal" width="100px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

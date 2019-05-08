import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = props => {
  return (
    <div className="mynavbar">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
        <ul className="navbar-nav">
          <span className="navbar-brand">MusclePower</span>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              STRONA GŁÓWNA
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              PRODUKTY
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              KONTAKT
            </Link>
          </li>
        </ul>

        {props.isLogged ? (
          <span>
            <Link to="/shoppingcart">
              <i class="fas fa-shopping-cart fa-lg" />
            </Link>
            <span class="badge badge-light">1</span>
            <span>
              USERNAME
              <Link to="/">
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={props.handleLogin}
                >
                  Wyloguj
                </button>
              </Link>
            </span>
          </span>
        ) : (
          <span>
            <Link to="/login">
              <button className="btn btn-outline-light btn-sm">
                Logowanie
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline-light btn-sm">
                Rejestracja
              </button>
            </Link>
          </span>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

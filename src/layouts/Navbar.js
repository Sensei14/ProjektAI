import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = props => {
  return (
    <div className="mynavbar">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              HOMEPAGE
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
        ) : (
          <span>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={props.handleLogin}
            >
              Logowanie
            </button>
            <Link to="/register">
              <button className="btn btn-outline-light btn-sm">
                Rejestracja
              </button>
            </Link>
          </span>
        )}

        {/* <span>
          Jesteś zalogowany!
          <button className="btn btn-outline-light btn-sm"> Logowanie </button>
          <button className="btn btn-outline-light btn-sm">Rejestracja</button>
        </span> */}
      </nav>
    </div>
  );
};

export default Navbar;

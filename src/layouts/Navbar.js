import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

const Navbar = props => {
  const alert = (
    <div className="alert alert-primary">
      <strong>Zalogowano!</strong>
    </div>
  );

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
              <i className="fas fa-shopping-cart fa-lg" />
            </Link>
            <span className="badge badge-light">1</span>
            <span>
              {props.loggedUser.login.username}
              <Link to="/">
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={props.handleLogOut}
                >
                  Wyloguj
                </button>
              </Link>
            </span>
          </span>
        ) : (
          <span>
            <button
              className="btn btn-outline-light btn-sm"
              data-toggle="modal"
              data-target="#loginModal"
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
      </nav>

      <div className="modal" id="loginModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Logowanie</h3>
            </div>
            <div className="modal-body">
              <div className="login-form">
                <form onSubmit={props.handleLogin}>
                  <div className="form-group">
                    <label>Nazwa użytkownika</label>
                    <input
                      className="form-control"
                      type="text"
                      name="usernameLog"
                      value={props.usernameLog}
                      onChange={props.handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Hasło</label>
                    <input
                      type="password"
                      className="form-control"
                      name="passwordLog"
                      value={props.passwordLog}
                      onChange={props.handleChange}
                    />
                  </div>
                  <button className="btn btn-dark btn-lg btn-block">
                    Zaloguj
                  </button>
                </form>
                <button
                  data-dismiss="modal"
                  className="btn btn-danger btn-lg btn-block"
                >
                  Powrót
                </button>
                {props.isLogged === true ? <div>{alert}</div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

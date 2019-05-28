import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";
import { Modal, ModalHeader, ModalFooter } from "reactstrap";

const Navbar = props => {
  const errorMessage = (
    <div className="alert alert-danger" style={{ textAlign: "center" }}>
      <strong>Błędny login lub hasło!</strong>
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
            <Link to="/shoppingcart">
              <i className="fas fa-shopping-cart fa-lg"> </i>
            </Link>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => props.handleToggleModal()}
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
            <div className="modal-header" />
            <Modal isOpen={props.isModalOpened}>
              <div className="modal-body">
                <ModalHeader>MusclePower</ModalHeader>
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
                      Zaloguj się
                    </button>
                  </form>
                  <button
                    onClick={props.handleToggleModal}
                    className="btn btn-danger btn-lg btn-block"
                  >
                    Powrót
                  </button>
                  {props.showErrorMessage ? <div>{errorMessage} </div> : null}
                </div>
                <ModalFooter style={{ border: "none", textAlign: "center" }}>
                  <Link to="/register" onClick={props.handleToggleModal}>
                    Nie masz konta? Zarejestruj się
                  </Link>
                </ModalFooter>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

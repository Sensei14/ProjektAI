import React, { Component } from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";
class RegisterPage extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    agree: false
  };

  handleChange = e => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      this.setState({
        [name]: checked
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  validation = () => {
    let correct = false;

    const { username, email, password, agree } = this.state;

    if (
      username.length > 3 &&
      password.length > 5 &&
      agree === true &&
      email.length > 3
    )
      correct = true;

    return correct;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.validation()) {
      alert("Użytkownik został zarejestrowany!");
    } else {
      alert("Formularz został błędnie wypełniony");
    }
  };

  render() {
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.state.username}
              placeholder="Nazwa użytkownika"
              onChange={this.handleChange}
              name="username"
              minLength="3"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              value={this.state.password}
              placeholder="Hasło"
              onChange={this.handleChange}
              name="password"
              minLength="5"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              value={this.state.email}
              placeholder="E-mail"
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <input
            type="checkbox"
            isChecked={this.state.agree}
            onChange={this.handleChange}
            name="agree"
          />
          <span>
            Oświadczam, że zapoznałem się z <Link to="/rules">Regulaminem</Link>
            , akceptuję jego treść i zobowiązuję się przestrzegać jego
            postanowień.
          </span>
          <div>
            <button className="btn btn-dark btn-lg btn-block">
              Zarejestruj
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;

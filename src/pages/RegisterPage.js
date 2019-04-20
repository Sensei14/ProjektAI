import React, { Component } from "react";
import "../styles/register.css";
import { timingSafeEqual } from "crypto";

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
      <div>
        <div className="register">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                value={this.state.username}
                placeholder="Nazwa użytkownika"
                onChange={this.handleChange}
                name="username"
                minLength="3"
              />
            </div>
            <div>
              <input
                type="password"
                value={this.state.password}
                placeholder="Hasło"
                onChange={this.handleChange}
                name="password"
                minLength="5"
              />
            </div>
            <div>
              <input
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
              Oświadczam, że zapoznałem się z Regulaminem, akceptuję jego treść
              i zobowiązuję się przestrzegać jego postanowień.
            </span>
            <div>
              <button className="btn btn-light btn-sm"> Zarejestruj </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;

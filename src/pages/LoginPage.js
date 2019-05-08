import React, { Component } from "react";
import "../styles/login.css";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    users: []
  };

  componentWillMount() {
    fetch("http://localhost:3010/users")
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res
        });
        // console.log(res);
      });
  }

  handleSubmit = e => {
    e.preventDefault();

    const username = this.state.username;
    const password = this.state.password;
    const users = [...this.state.users];

    const login = users.find(
      user =>
        user.login.username === username && user.login.password === password
    );

    if (login) console.log("Uzytkownik poprawny!");
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const users = this.state.users.map(user => (
      <ul key={user._id}>
        <li>{user.login.username}</li>
        <li>{user.login.password}</li>
      </ul>
    ));
    return (
      <div className="login-form">
        <div>{users}</div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nazwa użytkownika</label>
            <input
              className="form-control"
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Hasło</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-dark btn-lg btn-block">Zaloguj</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;

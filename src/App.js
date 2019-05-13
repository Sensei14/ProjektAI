import React, { Component } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layouts/Navbar";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    usernameLog: "",
    passwordLog: "",
    isLogged: false,
    loggedUser: {},
    isModalOpened: false
  };

  handleLogin = e => {
    e.preventDefault();
    const userCredentials = {
      username: this.state.usernameLog,
      password: this.state.passwordLog
    };

    fetch("http://localhost:3010/login", {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 1) {
          this.setState({
            isLogged: true,
            loggedUser: res.user,
            usernameLog: "",
            passwordLog: ""
          });
        }
      });
  };

  handleLogOut = () => {
    this.setState({
      isLogged: false,
      loggedUser: {}
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleToggleModal = () => {
    this.setState({
      isModalOpened:!this.state.isModalOpened
    })
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Navbar
            isLogged={this.state.isLogged}
            handleLogin={this.handleLogin}
            loggedUser={this.state.loggedUser}
            usernameLog={this.state.usernameLog}
            passwordLog={this.state.passwordLog}
            handleChange={this.handleChange}
            handleLogOut={this.handleLogOut}
            handleToggleModal={this.handleToggleModal}
            isModalOpened ={this.state.isModalOpened}
          />
          <Content isLogged={this.state.isLogged} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

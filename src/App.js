import React, { Component } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    isLogged: false,
    loggedUser: {},
    isLoaded: true
  };

  handleLogin = () => {
    this.setState({
      isLogged: !this.state.isLogged
    });
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Navbar
            isLogged={this.state.isLogged}
            handleLogin={this.handleLogin}
            loggedUser={this.state.loggedUser}
          />
          <Content isLogged={this.state.isLogged} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

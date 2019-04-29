import React, { Component } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    isLogged: false,
    isLoaded: true
  };

  handleLogin = () => {
    this.setState({
      isLogged: !this.state.isLogged
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="app">
          <Router basename={process.env.PUBLIC_URL}>
            <Header />
            <Navbar
              isLogged={this.state.isLogged}
              handleLogin={this.handleLogin}
            />
            <Content />
            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

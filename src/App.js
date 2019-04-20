import React, { Component } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    isLogged: false
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
          <Router>
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

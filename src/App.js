import React, { Component } from "react";
import "./styles/App.css";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

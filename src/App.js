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
    isLoaded : true
  };

  handleLogin = () => {
    this.setState({
      isLogged: !this.state.isLogged
    });
  };
 

  handleLoadingPage = () => {
    this.setState({
      isLoaded: true
    });
  };

  componentDidMount() {
    setTimeout(this.handleLoadingPage, 3000);
  }

  render() {
    return (

      <>
      {this.state.isLoaded ?
        (
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
              </div >
            </div >
           
        ):(
            <div id="loadingpage">
              <div  class="spinner-border" role="status">
              <span class="sr-only"/>
              </div>
            <div> Wczytywanie zasobów strony.
                Strona stworzona przez dr Daniel Ochaba i kasztana
            </div>
            </div>
             
        ) 
         }
      </>
    );
  }
}

export default App;

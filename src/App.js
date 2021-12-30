import React, { Component } from "react";
import Footer from "./footer/footer";
import Header from "./header/heading";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Services from "./pages/services";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="background">
          <div className="">
            <Header />
          </div>
        </div>
        <div className="about">
          <h3>Office Hours: Mon-Fri 8:00am-4:00pm</h3>
        </div>

        <div className="welcome-parent">
          <Home />
        </div>
        <div className="container">
          <About />
          <Services />
          <Contact />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

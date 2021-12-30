import React, { Component } from "react";
import logo from "../static/assets/images/logo.jpg";

class Header extends Component {
  render() {
    return (
      <header id="header" className="header" name="header">
        <div className="logo-container">
          <img src={logo} alt="DG drywall logo" className="logo"></img>
          <h1 className="heading">DG Drywall, Inc.</h1>
        </div>
        <div id="navbar" className="nav-container">
          <a href="/#about" data-nav-section="about" className="nav-link">
            ABOUT
          </a>
          <a href="/#services" data-nav-section="services" className="nav-link">
            SERVICES
          </a>
          <a href="#contact" data-nav-section="contact" className="nav-link">
            CONTACT
          </a>
        </div>
        <div className="call-header-container">
          <h3 className="heading-call">Call the office: (770)448-0086</h3>
          <h2 className="heading2">
            Serving the surrounding Greater Atlanta areas
          </h2>
        </div>
      </header>
    );
  }
}

export default Header;

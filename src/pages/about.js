import React, { Component } from "react";
import hanging from "../static/assets/images/hanger2.jpg";
// import finisher from "../static/assets/images/finisher2.jpg";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-header" id="about">
          <h2 className="about-heading border-heading">About Us</h2>
        </div>
        <div className="images-container double-images">
          <div className="image-container">
            <img
              src={hanging}
              alt="drywaller hanging drywall"
              className="images"
            ></img>
          </div>
        </div>
        <div className="paragraph-container">
          <div className="desc">
            <p>
              With over fifteen years in business, DG Drywall Inc. carries fifty
              years of experience. We offer Georgia's top quality residential
              drywall installation and finishing. Our reputation is based on
              honesty, integrity, and respect for our customers. We focus on
              every detail of our work to give the best job at the best price on
              the market. We specialize in custom finished work, completing each
              project on time, on budget, and to our customer's satisfaction.
              Our large and able team of dedicated staff allows us to man a
              multitude of projects simultaneously making us recognized leaders
              in the residential and multifamily industry. Our company offers
              the most up to date textures, finishes, colors, and designs. We
              have a talented crew of craftsmen. Whether you are considering a
              new project or a renovation, DG Drywall can bring added value and
              beauty to your home.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

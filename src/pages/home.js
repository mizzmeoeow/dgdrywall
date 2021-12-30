import React, { Component } from "react";
// import sander2 from "../static/assets/images/sander2.jpg";

class Home extends Component {
  render() {
    return (
      <div className="about-container welcome-container" data-section="home">
        <div className="paragraph-container image-welcome">
          {/* <div className="images-container">
            <img
              src={sander2}
              alt="DG drywall trucks"
              className="images touchup-img"
            ></img>
          </div> */}

          <div className="desc welcome-desc">
            <div>
              <h2 className="about-heading welcome-heading">
                Welcome to DG Drywall, Inc
              </h2>
            </div>
            <p>
              Our company offers the most up to date textures, finishes, colors,
              and designs. We have a talented crew of craftsmen. Whether you are
              considering a new project or a renovation, DG Drywall can bring
              added value and beauty to your home.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

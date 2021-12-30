import React, { Component } from "react";
// import sander from "../static/assets/images/sander.jpg";
import sander2 from "../static/assets/images/sander2.jpg";

class Services extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-header" id="services">
          <h2 className="about-heading">Services</h2>
        </div>
        <div className="images-container double-images">
          {/* <div className="image-left">
              <img
                src={sander}
                alt="drywall sander sanding drywall"
                className="images"
              ></img>
            </div> */}
          <div className="image-right">
            <img
              src={sander2}
              alt="drywall sander sanding drywall"
              className="images"
            ></img>
          </div>
        </div>
        <div className="paragraph-container">
          <div className="desc">
            <h3 className="service-heading">
              Hangers, Finishers, Sanders, and Touch up Crews -
            </h3>
            <br />
            <p>
              Unlike many drywall companies, DG Drywall, Inc. possesses our own
              top-of-the-line labor force, which gives us much more job control
              than many of our competitors. As a result of our labor force and
              construction management expertise, DG Drywall, Inc. has been able
              to forge a strong construction team that understands its strengths
              and can pull together to ensure that your construction project is
              completed on time and within budget. Over the years, our client
              list - and the services we offer - has grown and diversified. Our
              clients feel confident calling on us to handle "turnkey" and
              design/build projects because of our ability to provide cost
              effective construction techniques, select quality subcontractors
              and suppliers, and provide better service. The service we provide
              sets us apart from our competitors - and ensure that our clients
              call on us for their construction needs - time and time again.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;

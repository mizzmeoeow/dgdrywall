import React, { Component } from "react";
import clean from "../static/assets/images/clean.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-header" id="contact">
          <h2 className="about-heading">Contact Us</h2>
        </div>
        <div className="images-container">
          <div className="contact-image">
            <img
              src={clean}
              alt="drywaller removing debris from job site"
              className="images"
            ></img>
          </div>
        </div>
        <div className="paragraph-container contact-container">
          <div className="contact-desc">
            <div className="contact-hours">
              <h3 className="">DG Drywall, Inc.</h3>
              <div>Serving the Greater Atlanta area for over 20 years</div>
              <br />
              <h3>Office Hours:</h3>
              Monday-Friday 8:00am-4:00pm
              <br />
              Saturday-Sunday Closed
              <br />
              Holidays are subject to change
            </div>
            <div className="contact-container">
              <span className="contact-item-header">
                <h3>You can reach our office by phone at:</h3>
              </span>
              <i className="fas fa-phone-alt contact-icon"></i>
              <span className="contact-item">(770)448-0086</span>
              <i className="fas fa-phone-alt contact-icon"></i>
              <br />
              <span className="contact-item-header">
                <h3 className="contact-item-header">and email us at:</h3>
              </span>
              <i className="fas fa-envelope contact-icon"></i>
              <span className="contact-item">warranty@dgdrywall.com</span>
              <i className="fas fa-envelope contact-icon"></i>
              <div className="page-break"></div>
              <div>
                <iframe
                  title="map of atlanta"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701741.884563992!2d-84.77906286242612!3d33.58675820755885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f501167813287d%3A0x26d21ce27f74b79!2sAtlanta%20Metropolitan%20Area%2C%20GA!5e0!3m2!1sen!2sus!4v1637263666104!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

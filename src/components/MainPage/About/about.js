import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../MainPage/main.css";
import "../../MainPage/fixed.css";

class About extends Component {
  render() {
    return (
      <div>
        <div className="col-12 narrow text-center">
          <h1>About Us</h1>
          <p className="lead">
            While the main goal of this endeavor is to assist homeless individuals and families, we recognize that homelessness is more complicated than where someone slept last night. Many individuals are one late rent payment away from homelessness, one bill away from living with no heat, and one meal away from hunger. Our goal is to strengthen our communityies by connecting those in need with the agencies in their area who have the resources to assist them.
          </p>
        </div>
      </div>

    );
  }
}

export default About;
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../MainPage/main.css";
import "../../MainPage/fixed.css";
import logo2 from "../../../images/logo.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <img id="logo2" src={logo2} alt="logo with text" />
            <p>Creating connections for individuals directly affected by homelessness and those at risk.</p>
            <strong>Contact Info</strong>
            <p>(888) 888-8888<br></br> email@bridgethegap.com</p>
            <a href="#" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="#" target="_blank"><i class="fab fa-twitter-square"></i></a>
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
          <hr className="socket"></hr>
          &copy; Bridge The Gap
            </div>
      </div>

    );
  }
}

export default Contact;
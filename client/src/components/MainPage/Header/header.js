import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import "../../MainPage/fixed.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h1 id="home-heading">Bridge the Gap</h1>
        <h3 id="slogan"><i>Creating connections for individuals directly affected by homelessness <br></br>and those at risk</i></h3>
      </div>

    );
  }
}

export default Header;
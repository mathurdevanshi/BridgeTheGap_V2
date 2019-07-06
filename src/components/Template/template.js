import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "../Nav/nav";
import "./template.css";



class Template extends Component {
  render() {
    return (
      <div className="TemplateContainer">
        <div className="background">
          {/* <NavBar /> */}
          {this.props.children}
        </div>
      </div>

    );
  }
}

export default Template;
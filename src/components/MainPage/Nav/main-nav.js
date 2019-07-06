import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../../../images/logo_notext.png";
import "./main-nav.css";

export default class MainNav extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <a className="navbar-brand" href="https://limitless-lowlands-20086.herokuapp.com/">
            <img src={logo} width="80" height="40" alt="bridge the gap" />
          </a>

          <Link to="/" className="navbar-brand">Bridge the Gap</Link>
          <div className="collpase nav-collapse">
            {/* <ul className="navbar-nav mr-auto">
              {/* <li className="navbar-item">
                <Link to="/" className="nav-link">Main Page</Link>
              </li> */}
            {/* <li className="navbar-item">
                <Link to="/create-community" className="nav-link">Create Community Account</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create-homeless" className="nav-link">Create Homeless Account</Link>
              </li> */}
            {/* </ul> */}
          </div>
        </nav>
      </div >
    )
  }
}

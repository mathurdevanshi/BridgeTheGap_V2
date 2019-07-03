import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo_notext.png";
import "./nav.css";



export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <a className="navbar-brand" href="https://limitless-lowlands-20086.herokuapp.com/">
            <img src={logo} width="40" height="40" alt="bridge the gap" />
          </a>

          <Link to="/" className="navbar-brand">Bridge the Gap</Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto" style={{ float: "right" }}>
              {/* <li className="navbar-item">
                <Link to="/create-agency" className="nav-link">Create Agency Account</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create-community" className="nav-link">Create Community Account</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create-homeless" className="nav-link">Create Homeless Account</Link>
              </li>
              <li className="navbar-item">
                <Link to="/agencyhome" className="nav-link">Agency Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/inventory" className="nav-link">Agency Inventory</Link>
              </li>
              <li className="navbar-item">
                <Link to="/claimeditems" className="nav-link">Agency Claimed Items</Link>
              </li>
              <li className="navbar-item">
                <Link to="/wishlist" className="nav-link">Agency Wishlist</Link>
              </li>
              <li className="navbar-item">
                <Link to="/communityassistance" className="nav-link">Community Assistance</Link>
              </li>
              <li className="navbar-item">
                <Link to="/pendingdonations" className="nav-link">Pending Donations</Link>
              </li>
              <li className="navbar-item">
                <Link to="/agencyneeds" className="nav-link">Agency Needs</Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div >
    )
  }
}

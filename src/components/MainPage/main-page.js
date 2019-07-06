import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "../Nav/nav";
import MainNav from "./Nav/main-nav";
import Header from "./Header/header";
import About from "./About/about";
import How from "./How/how";
import Spotlight from "./Spotlight/spotlight";
import Contact from "./Contact/contact";
import "./main.css";
import "./fixed.css";
import Testimonials from './Testimonials/testimonials';

class MainPage extends Component {
  render() {
    return (

      <div className="MainPageContainer">
        {/* Home Section */}
        <div id="home">
          <MainNav />
          <div className="landing">
            <div className="home-wrap">
              <div className="home-inner">

              </div>
            </div>
          </div>
          <div className="caption text-center">
            <Header />
          </div>
        </div>
        {/* About Section */}
        <div id="about" className="offset">
          <About />
        </div>

        {/* How Section -- Needs More Info */}
        <div id="how" className="offset">
          <How />
        </div>

        {/* Spotlight Section*/}
        <div id="spotlight" className="offset text-center">
          <Spotlight />
        </div>

        {/* Testimonials Section -- Need to style images  */}
        <div id="testimonials" className="offset">
          <Testimonials />
        </div>

        {/* Contact Section */}
        <div id="contact" className="offset">
          <footer>
            <Contact />
          </footer>
        </div>

        {/* Footer */}
        <div className="footer">

        </div>
      </div>

    );
  }
}

export default MainPage;
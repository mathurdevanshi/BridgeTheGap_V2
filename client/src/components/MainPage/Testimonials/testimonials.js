import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../MainPage/main.css";
import "../../MainPage/fixed.css";
import Client2 from "../../../images/client2.png";
import Client1 from "../../../images/client1.png";

class Testimonials extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="col-12 text-center">
            <h3 className="heading">Testimonials</h3>
            <div className="underline"></div>
          </div>

          <div className="row">
            <div className="col-md-6 testimonials row">
              <div className="col-md-4">
                <img src={Client2} alt="client" />
              </div>

              <div className="col-md-8">
                <blockquote>
                  <i class="fas fas fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel consequatur unde.
                  Maiores quod accusamus labore enim a laboriosam unde, cumque pariatur corrupti est. Sequi et veniam
                  sapiente architecto porro.
                    <hr class="clients-hr" />
                  <cite>&#8212; Jane Doe, Agency President</cite>
                </blockquote>
              </div>
            </div>

            <div className="col-md-6 testimonials row">
              <div className="col-md-4">
                <img src={Client1} alt="client" />
              </div>

              <div className="col-md-8">
                <blockquote>
                  <i class="fas fas fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel consequatur unde.
                  Maiores quod accusamus labore enim a laboriosam unde, cumque pariatur corrupti est. Sequi et veniam
                  sapiente architecto porro.
                    <hr class="clients-hr" />
                  <cite>&#8212; John Doe, Formerly Homeless</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

      </div >

    );
  }
}

export default Testimonials;
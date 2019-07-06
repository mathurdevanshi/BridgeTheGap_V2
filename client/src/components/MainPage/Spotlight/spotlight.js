import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import "../fixed.css";
import SantaAna from "../../../images/santaAna.jpg";

class Spotlight extends Component {
  render() {
    return (
      <div>
        <div className="fixed-background">
          <div className="row dark text-center">
            <div className="col-12 text-center">
              <h1 className="heading" style={{ color: 'white' }}>Spotlight</h1>
              <div className="underline"></div>
            </div>
            <div className="row justify-content-center">
              <div className="col-med-4">
                <div>
                  <img id="agencyImage" src={SantaAna} alt="" />
                </div>
              </div>
              <div className="col-med-8">
                <h2 style={{ color: 'white' }}>Faces of Santa Ana</h2>
                <p class="lead">In July 2015, Brian and Vanessa Peterson moved to Santa Ana, California with a burning
                desire
                in their hearts to love their neighbors unconditionally and sacrificially. Night after night, Brian was on
                his living room sofa reading a book called, Love Does, and one evening he heard the screams from a man
                experiencing homelessness right outside his 4th floor apartment window. The agony on this man’s voice
                gripped his heart as he realized, “This very man is my neighbor, and I am called to love him.” Brian ran
                into the bedroom to share the good news with Vanessa and explained, “We have to at least find out his
                name.”
                Two days later, on the way home from work, Brian’s heart led him to find this man. He sat down next to him
                on the sidewalk and had the first conversation with one of his neighbors experiencing homelessness. In
                this
                conversation, Brian saw beauty in his pain along, with glimmers of hope in his eyes. Up until this point,
                Brian hadn't painted in 8 years. However, from the deepest place in his heart, he asked, “Would it be ok
                if
                I painted your portrait?” From this single moment, Faces of Santa Ana was born.
                </p>
                <br></br>
                <br></br>
                <a href="https://faces.funraise.org/" className="btn btn-secondary btn-md">Donate</a>
              </div>
              <div className="fixed-wrap">
                <div class="fixed">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Spotlight;




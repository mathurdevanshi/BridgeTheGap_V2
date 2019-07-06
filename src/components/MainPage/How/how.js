import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../MainPage/main.css";
import "../../MainPage/fixed.css";
import HomelessCard from '../../Cards/homeless';
import AgencyCard from '../../Cards/agency';
import CommunityCard from '../../Cards/community';


class How extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="narrow">
            <div className="col-12 text-center">
              <h3 className="heading">How it Works</h3>
              <div className="heading-underline"></div>
              <div className="row">
                <HomelessCard />
                <AgencyCard />
                <CommunityCard />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default How;
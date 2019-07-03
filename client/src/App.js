import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage/main-page";
// import CreateAgencyAccount from "./components/Forms/create-account-agency";
// import CreateCommunityAccount from "./components/Forms/create-account-community";
// import CreateHomelessAccount from "./components/Forms/create-account-homeless";
import AgencyHome from "./components/HomePages/agencyhome.component";
import CommunityHome from "./components/HomePages/communityhome";
import HomelessHome from "./components/HomePages/homelesshome";
import Inventory from "./components/Tables/inventory.components"
import ClaimedItems from "./components/Tables/claimeditems.components"
import Wishlist from "./components/Tables/wishlist.components"
import CommunityAssistance from "./components/Tables/communityassistance.components";
import PendingDonations from "./components/Tables/pendingdonations.components";
import AgencyNeeds from "./components/Tables/agencyneeds.components";


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Route path="/" exact component={MainPage} />
          {/* <Route path="/create-agency" component={CreateAgencyAccount} />
          <Route path="/create-community" component={CreateCommunityAccount} />
          <Route path="/create-homeless" component={CreateHomelessAccount} /> */}
          <Route path="/agencyhome" component={AgencyHome} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/claimeditems" component={ClaimedItems} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/communityhome" component={CommunityHome} />
          <Route path="/homelesshome" component={HomelessHome} />
          <Route path="/communityassistance" component={CommunityAssistance} />
          <Route path="/pendingdonations" component={PendingDonations} />
          <Route path="/agencyneeds" component={AgencyNeeds} />
        </Router>

      </div>

    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Template from "../Template/template";
import "./forms.css";

export default class CreateAgencyAccount extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZipCode = this.onChangeZipCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      phonenumber: '',
      address: '',
      state: '',
      zipcode: '',
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phonenumber: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }

  onChangeZipCode(e) {
    this.setState({
      zipcode: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('Form Submitted');
    console.log(`Name: ${this.state.name}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Phone Number: ${this.state.phonenumber}`);
    console.log(`Address: ${this.state.address}`);
    console.log(`City: ${this.state.city}`);
    console.log(`State: ${this.state.state}`);
    console.log(`State: ${this.state.zipcode}`);

    this.setState({
      name: '',
      email: '',
      phonenumber: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    });
  }

  render() {
    console.log("rendering create account")
    return (
      <Template>
        <div className="form-container">
          <div style={{ marginTop: 20 }}>
            <h3>Create Account - Agency</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <input type="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />

              </div>
              <div className="form-group">
                <label>Phone Number: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.phonenumber}
                  onChange={this.onChangePhoneNumber}
                />
              </div>
              <div className="form-group">
                <label>Address: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label>City: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={this.onChangeCity}
                />
              </div>
              <div className="form-group">
                <label>State: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.state}
                  onChange={this.onChangeState}
                />
              </div>
              <div className="form-group">
                <label>Zip Code: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.zipcode}
                  onChange={this.onChangeZipCode}
                />
              </div>
              <div className="form-group">
                <RouterLink component={RouterLink} to="/agencyhome">
                  <input type="submit" value="Create Account" className="btn" style={{ marginTop: 20, backgroundColor: "teal", color: "white" }} />
                </RouterLink>
              </div>
            </form>
          </ div>

        </div>
      </Template>
    )
  }
}